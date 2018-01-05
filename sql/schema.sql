
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


INSERT INTO Users(
    firstname,
    lastname,
    gender,
    haircolor,
    eyecolor,
    hobby,
    birthday,
    birthmonth,
    birthyear)
VALUES ('Xena','WarriorPrincess','Female','Brown','Brown','Fishing',01,16,1984);

INSERT INTO Users(
    firstname,
    lastname,
    gender,
    haircolor,
    eyecolor,
    hobby,
    birthday,
    birthmonth,
    birthyear)
VALUES ('Brita','Filter','Female','Blue','Blue','Fishing',06,23,1957);

INSERT INTO Users(
    firstname,
    lastname,
    gender,
    haircolor,
    eyecolor,
    hobby,
    birthday,
    birthmonth,
    birthyear)
VALUES ('Billybob','Thornton','Male','Brown','Blue','Fishing',08,27,1964);

INSERT INTO Users(
    firstname,
    lastname,
    gender,
    haircolor,
    eyecolor,
    hobby,
    birthday,
    birthmonth,
    birthyear)
VALUES ('Jakeumus','Maximus','Male','Brown','Brown','Video Games',03,16,1992);

INSERT INTO Users(
    firstname,
    lastname,
    gender,
    haircolor,
    eyecolor,
    hobby,
    birthday,
    birthmonth,
    birthyear)
VALUES ('Gabrielle','Xenasidekick','Female','Blonde','Blue','Rafting',05,18,1995);


-- need to make create user and find user sql for auth0