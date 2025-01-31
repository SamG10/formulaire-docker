CREATE TABLE IF NOT EXISTS users (
  id CHAR(36) PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

INSERT INTO users (id, firstName, lastName, email, password)
VALUES
    (UUID(), 'John', 'Doe', 'john.doe@example.com', 'hashedpassword1'),
    (UUID(), 'Jane', 'Doe', 'jane.doe@example.com', 'hashedpassword2'),
    (UUID(), 'Alice', 'Smith', 'alice.smith@example.com', 'hashedpassword3'),
    (UUID(), 'Bob', 'Johnson', 'bob.johnson@example.com', 'hashedpassword4'),
    (UUID(), 'Charlie', 'Brown', 'charlie.brown@example.com', 'hashedpassword5');
