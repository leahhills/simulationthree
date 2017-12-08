
DROP TABLE IF EXISTS FriendList;
DROP TABLE IF EXISTS Qualities;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users(
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT,
    auth_id TEXT NOT NULL
);

CREATE TABLE Qualities(
    id SERIAL PRIMARY KEY,
    firstname TEXT NULL,
    lastname TEXT NULL,
    gender TEXT NULL,
    haircolor TEXT NULL,
    eyecolor TEXT NULL,
    hobby TEXT NULL,
    birthday INTEGER NOT NULL,
    birthmonth INTEGER NOT NULL,
    birthyear INTEGER NOT NULL,
    userid INTEGER NOT NULL REFERENCES Users(id)
);


CREATE TABLE FriendList(
    user_id INTEGER NOT NULL REFERENCES Users(id) ON DELETE CASCADE,
    friend_id INTEGER NOT NULL REFERENCES Users(id) ON DELETE CASCADE
);


-- need to make create user and find user sql for auth0