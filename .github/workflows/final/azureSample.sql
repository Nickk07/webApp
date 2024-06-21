-- Insert sample data into Accounts
INSERT INTO Accounts (Username, PasswordHash, Email)
VALUES ('user1', 'hash1', 'user1@example.com'),
       ('user2', 'hash2', 'user2@example.com');
GO

-- Insert sample data into Albums
INSERT INTO Albums (Title, Artist, ReleaseDate, Genre)
VALUES ('Album1', 'Artist1', '2023-01-01', 'Pop'),
       ('Album2', 'Artist2', '2023-05-15', 'Rock');
GO

-- Insert sample data into Announcements
INSERT INTO Announcements (Title, Content)
VALUES ('Welcome', 'Welcome to our new website!'),
       ('Update', 'We have added new albums.');
GO