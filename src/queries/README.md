MySQL Database Schema
Tables for our database follow the example schemas below. Each table represents a dataset by which we can access via our API.

Note: not every table we create for an API needs to be exposed.

Users Table Schema
Auth queries peform tasks against the users table.

The users table will be represented by the following Schema:

Column	Description
id	Unique identifier for our user besides their name.
user_name	User's name
password	User's password (non-unique)
Example:

+----------+--------------+------+-----+---------+----------------+
| Field    | Type         | Null | Key | Default | Extra          |
+----------+--------------+------+-----+---------+----------------+
| user_id  | int          | NO   | PRI | NULL    | auto_increment |
| username | varchar(255) | NO   | UNI | NULL    |                |
| email    | varchar(255) | NO   |     | NULL    |                |
| password | varchar(255) | NO   |     | NULL    |                |
+----------+--------------+------+-----+---------+----------------+

Orders Table Schema
The orders table will be represented by the following Schema:

Column	Description
    order_number int NOT NULL AUTO_INCREMENT,
    order_name varchar(255) NOT NULL,
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP(),
    status varchar(10) DEFAULT 'pending',
    PRIMARY KEY (order_number)

    Example:

    +--------------+--------------+------+-----+-------------------+-------------------+
    | Field        | Type         | Null | Key | Default           | Extra             |
    +--------------+--------------+------+-----+-------------------+-------------------+
    | order_number | int          | NO   | PRI | NULL              | auto_increment    |
    | user_id      | int          | NO   | MUL | NULL              |                   |
    | order_name   | varchar(255) | NO   |     | NULL              |                   |
    | created_date | datetime     | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
    | status       | varchar(10)  | YES  |     | pending           |                   |
    +--------------+--------------+------+-----+-------------------+-------------------+