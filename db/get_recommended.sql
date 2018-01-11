SELECT
    *
FROM
    Users U
WHERE 
    $3:name = $2 
    AND U.id NOT IN (
        SELECT
            FL.friend_id
        FROM
            FriendList FL
        WHERE 
            FL.user_id = $1
    )
    AND U.id != $1;