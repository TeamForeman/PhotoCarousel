USE sdc_photos;

COPY listings (
share_id,
name,
rating,
reviews,
listing
)
FROM 'database/monsterListing.csv'
WITH DELIMITER=','
AND HEADER=TRUE;

COPY photos (
photo_id,
share_id,
description,
url
)
FROM 'database/monsterPhotos.csv'
WITH DELIMITER=','
AND HEADER=TRUE;