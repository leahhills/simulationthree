INSERT INTO Users
(UserName,Password,Auth_ID)
VALUES
($1,$2$,$3);
RETURNING *;