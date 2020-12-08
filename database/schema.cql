DROP KEYSPACE IF EXISTS sdc_photos;

CREATE KEYSPACE sdc_photos
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'}
AND durable_writes = 'true';

USE sdc_photos;

CREATE TABLE listings(
share_id INT,
name TEXT,
rating FLOAT,
reviews INT,
listing TEXT,
PRIMARY KEY(share_id)
);

CREATE TABLE photos(
photo_id UUID,
share_id INT,
description TEXT,
url TEXT,
PRIMARY KEY(photo_id)
);
CREATE INDEX photos_share_id_idx ON photos (share_id);