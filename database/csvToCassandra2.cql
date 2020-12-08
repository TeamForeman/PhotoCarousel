USE sdc_photos;

COPY listings_by_id (
share_id,
name,
rating,
reviews,
listing,
photo_id,
description,
url
)
FROM 'database/monsterListing3.csv'
WITH DELIMITER=','
AND HEADER=TRUE;

-- COPY photos (
-- photo_id,
-- share_id,
-- description,
-- url
-- )
-- FROM 'database/monsterPhotos.csv'
-- WITH DELIMITER=','
-- AND HEADER=TRUE;