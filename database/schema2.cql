-- DROP KEYSPACE IF EXISTS sdc_photos;

-- CREATE KEYSPACE sdc_photos
-- WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'}
-- AND durable_writes = 'true';

USE sdc_photos;

DROP TABLE IF EXISTS listings_by_id;

CREATE TABLE listings_by_id(
share_id UUID,
name TEXT STATIC,
rating FLOAT STATIC,
reviews INT STATIC,
listing TEXT STATIC,
photo_id UUID,
description TEXT,
url TEXT,
PRIMARY KEY((share_id), url)
);
CREATE INDEX listing_by_id_listing_idx ON listings_by_id (listing);

-- CREATE TABLE listings(
-- share_id INT,
-- name TEXT,
-- rating FLOAT,
-- reviews INT,
-- listing TEXT,
-- PRIMARY KEY(share_id)
-- );

-- CREATE TABLE photos(
-- photo_id UUID,
-- share_id INT,
-- description TEXT,
-- url TEXT,
-- PRIMARY KEY(photo_id)
-- );
-- CREATE INDEX photos_share_id_idx ON photos (share_id);