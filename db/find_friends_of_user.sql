-- SELECT user_id as _id
-- FROM USERS



-- SELECT * FROM Users WHERE Id = $1;

-- SELECT
--     U.firstname || U.lastname AS UserName,
--     F.firstname || F.lastname AS FriendName
-- FROM
--     Users U
--     JOIN FriendList FL ON FL.user_id = U.Id
--     JOIN Users F ON F.Id = FL.friend_id
-- WHERE
--     U.Id = $1
-- ;    

SELECT * FROM FriendList WHERE user_id =$1