
DROP TABLE IF EXISTS Qualities;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS FriendList;

CREATE TABLE Users(
    UserID SERIAL PRIMARY KEY,
    UserName TEXT NOT NULL,
    Password TEXT NOT NULL,
    AuthID TEXT NOT NULL
);

CREATE TABLE Qualities(
    FriendID SERIAL PRIMARY KEY,
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


CREATE TABLE FriendList(
    UserID INTEGER NOT NULL,
    FriendID INTEGER NOT NULL
);


-- need to make create user and find user sql for auth0