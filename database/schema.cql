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
PRIMARY KEY(share_id, name)
);

CREATE TABLE photos(
id INT,
share_id INT,
url TEXT,
PRIMARY KEY((id), share_id)
);