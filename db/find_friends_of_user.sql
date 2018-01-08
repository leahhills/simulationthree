SELECT
    F.*
FROM
    Users U
    JOIN FriendList FL ON FL.user_id = U.Id
    JOIN Users F ON F.Id = FL.friend_id
WHERE
    U.Id = $1
;    