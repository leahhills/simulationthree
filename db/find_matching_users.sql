SELECT * FROM USERS 
WHERE 
    LOWER(firstname) like LOWER('%' || $1 || '%')
    OR
    LOWER(lastname) like LOWER('%' || $2 || '%')