INSERT INTO puns 
(content, creator_id, rating)
VALUES
($1, $2, 5);
-- (${content}, ${user_id}, 5)

SELECT * FROM puns;