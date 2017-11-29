
DROP TABLE IF EXISTS FriendTable;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users(
    UserID SERIAL,
    UserName TEXT NOT NULL,
    Password TEXT NOT NULL,
    AuthID TEXT NOT NULL
);

CREATE TABLE FriendTable (
    FriendID SERIAL,
    FirstName TEXT NULL,
    LastName TEXT NULL,
    Gender TEXT NULL,
    HairColor TEXT NULL,
    EyeColor TEXT NULL,
    Hobby TEXT NULL,
    BirthDay INTEGER NOT NULL,
    BirthMonth INTEGER NOT NULL,
    BirthYear INTEGER NOT NULL,
    UserID INTEGER NOT NULL

);


-- need to make create user and find user sql for auth0