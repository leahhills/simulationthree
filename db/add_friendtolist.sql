INSERT INTO FriendsTable
(FirstName, LastName, Gender, HairColor, EyeColor, Hobby, BirthDay, BirthMonth, BirthYear,UserID)
VALUES
($1,$2,$3,$4,$6,$7,$8,$9,$10)
WHERE UserID =$ AND AuthID =$;