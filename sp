DELIMITER //
CREATE PROCEDURE GetUsersWithProfiles()
BEGIN
  SELECT * FROM Users
  LEFT JOIN Profiles ON Users.id = Profiles.userId;
END //
DELIMITER ;