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
            AND FL.friend_id IS NOT NULL
    )
    AND U.id != $1;