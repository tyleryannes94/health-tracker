DROP DATABASE IF EXISTS resolution_tracking;

CREATE DATABASE resolution_tracking;

-- USE resolution_tracking;

-- CREATE TABLE user (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     first_name VARCHAR(255) NOT NULL,
--     last_name VARCHAR(255) NOT NULL,
--     email VARCHAR(255) NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     health_goal VARCHAR(255) NOT NULL,
--     starting_weight INT NOT NULL
-- );

-- CREATE TABLE workout (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     workout_type VARCHAR(255) NOT NULL,
--     workout_length INT NOT NULL,
--     mood INT NOT NULL,
--     new_weight INT,
--     user_id INT NOT NULL.
--     FOREIGN KEY (mood) REFERENCES mood(id),
--     FOREIGN KEY (user_id) REFERENCES user(id)
-- );

-- CREATE TABLE mood (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     mood_new INT NOT NULL,
--     user_id INT NOT NULL,
--     FOREIGN KEY (user_id) REFERENCES user(id)
-- );

