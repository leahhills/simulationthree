INSERT INTO Users(
    username,
    password,
    auth_id,
    firstname,
    lastname,
    gender,
    haircolor,
    eyecolor,
    hobby,
    birthday,
    birthmonth,
    birthyear
)
VALUES ($1, $2, $3, $4, $6, $7, $8, $9, $10, $11, $12);
