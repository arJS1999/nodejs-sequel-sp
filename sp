DELIMITER //
CREATE PROCEDURE GetUsers()
BEGIN
  SELECT * FROM Users
  LEFT JOIN Profiles ON Users.id = Profiles.userId
  LEFT JOIN Contacts ON Users.id = Contacts.userId
  LEFT JOIN Addresses ON Users.id = Addresses.userId;
END //
DELIMITER ;
