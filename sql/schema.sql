
DROP TABLE IF EXISTS FriendList;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users(
    id SERIAL PRIMARY KEY,
    username TEXT NULL,
    password TEXT NULL,
    auth_id TEXT NULL,
    firstname TEXT NULL,
    lastname TEXT NULL,
    gender TEXT NULL,
    haircolor TEXT NULL,
    eyecolor TEXT NULL,
    hobby TEXT NULL,
    birthday INTEGER NULL,
    birthmonth INTEGER NULL,
    birthyear INTEGER NULL
);

CREATE TABLE FriendList(
    user_id INTEGER NOT NULL,
    friend_id INTEGER NOT NULL
);


-- need to make create user and find user sql for auth0