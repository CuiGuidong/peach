"""Validate user-configured AI bases and pin the destination before sending credentials."""
from __future__ import annotations

import ipaddress
import re
from urllib.parse import urlsplit

from .http import host_addresses

_LABEL = r"[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?"
_DOMAIN = re.compile(rf"(?:{_LABEL}\.)+{_LABEL}", re.ASCII)
_PATH = re.compile(r"(?:/[A-Za-z0-9_~.\-]+)*/?", re.ASCII)
_LAN = tuple(ipaddress.ip_network(block) for block in ("10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "fc00::/7"))


def _public(ip):
    return ip.is_global and not (ip.is_multicast or ip.is_reserved)


def normalize_base(raw: str, custom_port: str = "") -> str:
    """Return the canonical protocol base, including any non-default port."""
    if (len(raw) > 512 or any(not 33 <= ord(char) < 127 for char in raw)
            or any(char in raw for char in "\\?#@%")):
        raise ValueError("invalid API base")
    parsed = urlsplit(raw)
    host = parsed.hostname or ""
    port = parsed.port
    if custom_port:
        if not re.fullmatch(r"[0-9]{1,5}", custom_port) or not 1 <= int(custom_port) <= 65535:
            raise ValueError("invalid API port")
        port = int(custom_port)
    try:
        ip = ipaddress.ip_address(host)
    except ValueError:
        ip = None
    loopback = host == "localhost" or (ip is not None and ip.is_loopback)
    if (parsed.scheme not in ("http", "https") or (parsed.scheme == "http" and not loopback)
            or port == 0 or not _PATH.fullmatch(parsed.path)
            or any(segment in (".", "..") for segment in parsed.path.split("/"))):
        raise ValueError("invalid API base")
    if ip is not None:
        if not (loopback or _public(ip) or any(ip in network for network in _LAN)):
            raise ValueError("invalid API address")
        host = f"[{ip.compressed}]" if ip.version == 6 else ip.compressed
    elif host != "localhost" and (len(host) > 253 or not _DOMAIN.fullmatch(host) or host.rsplit(".", 1)[-1].isdigit()):
        raise ValueError("invalid API host")
    authority = host if port in (None, 80 if parsed.scheme == "http" else 443) else f"{host}:{port}"
    return f"{parsed.scheme}://{authority}{parsed.path.rstrip('/')}"


def pinned_target(endpoint: str) -> tuple[str, str, int]:
    parsed = urlsplit(endpoint)
    host = parsed.hostname
    port = parsed.port or (80 if parsed.scheme == "http" else 443)
    if host == "localhost":
        return host, "127.0.0.1", port
    try:
        ip = ipaddress.ip_address(host)
    except ValueError:
        addresses = host_addresses(host)
        if not addresses or not all(_public(ipaddress.ip_address(address)) for address in addresses):
            raise ValueError("API host must resolve to public addresses")
        return host, addresses[0], port
    return host, str(ip), port
