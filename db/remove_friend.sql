DELETE FROM Friendlist
WHERE friend_id= $2 AND user_id=$1
RETURNING *;