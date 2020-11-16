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

+----+-----------+----------+
| id | user_name | password |
+----+-----------+----------+
|  1 | admin     | 123456   |
|  2 | mworrell  | derp     |
+----+-----------+----------+

Orderdetails Table Schema
The orderdetails table will be represented by the following Schema:

Column	Description
    orderNumber int NOT NULL AUTO_INCREMENT,
    customerName varchar(255) NOT NULL,
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP(),
    status varchar(10) DEFAULT 'pending',
    comments varchar(255) DEFAULT NULL,
    PRIMARY KEY (orderNumber)