# ADR-0181：Windows 托盘在默认浏览器中打开 Peach

- 状态：Accepted
- 日期：2026-11-28

## 背景

[ADR-0179](0179-native-peach-windows-with-browser-fallback.md) 将 Windows 托盘的打开动作交给 WebView2，以便反馈截取原生窗口的视口。用户从托盘访问馆藏时需要沿用系统默认浏览器里的会话和标签页。

## 决策

- Windows 托盘与独立启动器在系统默认浏览器里打开 Peach。首次设置仍使用引导页地址。
- WebView2 宿主保留反馈截图能力，只能截取自身视口。浏览器内发起的反馈复用当前标签页捕获或 SnapDOM。

## 影响

托盘打开 Peach 使用默认浏览器已有的会话。标签页捕获需要浏览器授权，SnapDOM 根据当前页面内容生成截图。
