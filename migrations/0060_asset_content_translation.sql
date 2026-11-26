CREATE TABLE asset_content_translation (
    asset_id INTEGER NOT NULL REFERENCES asset(id) ON DELETE CASCADE,
    language TEXT NOT NULL,
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    source_digest TEXT NOT NULL,
    provider TEXT NOT NULL,
    model TEXT NOT NULL,
    quality TEXT NOT NULL CHECK (quality IN ('human', 'machine')),
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (asset_id, language)
) WITHOUT ROWID;
