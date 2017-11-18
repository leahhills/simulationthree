
DROP TABLE IF EXISTS PeopleTable;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users(
    UserID SERIAL,
    UserName TEXT NOT NULL,
    Password TEXT NOT NULL
)

CREATE TABLE PeopleTable (
    FriendID SERIAL,
    FirstName TEXT NULL,
    LastName TEXT NULL,
    Gender TEXT NULL,
    HairColor,
    EyeColor,
    Hobby,
    BirthDay,
    BirthMonth,
    BirthYear,
    UserID

);