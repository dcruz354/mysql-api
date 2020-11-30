/**
 * Tables follow syntax:
 * - CREATE TABLE <table_name>(<column_name> <data_type> <options>, ...)
 *
 * Create a table called `orders` (case-insensitive), with
 * - order_number as an integer/number that can't have null values, auto-increment it
 * - order_name with a max of 255 characters, cannot have null values
 * - created_date set to date and time created
 * - status with a max of 10 characters, has a default of 'pending'
 *
 *
 * NOTE: order is important.
 * - columns can have multiple options attached (take `order_number` column for example)
 * - order_number is always first (helps with inserting)
 * - defaults always specifed last (helps with inserting)
 */
exports.CREATE_ORDERS_TABLE = `CREATE TABLE IF NOT EXISTS orders(
    order_number int NOT NULL AUTO_INCREMENT,
    user_id int NOT NULL,
    order_name varchar(255) NOT NULL,
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP(),
    status varchar(10) DEFAULT 'pending',
    PRIMARY KEY (order_number),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
          ON UPDATE CASCADE
          ON DELETE CASCADE
  )`;

  // Get every Orders
exports.ALL_ORDERS = (userId) => `SELECT * FROM orders WHERE user_id = ${userId}`;

// Get a single order by orderNumber
exports.SINGLE_ORDER = (userId, orderNumber) => 
  `SELECT * FROM orders WHERE user_id = ${userId} AND order_number = ${orderNumber}`;

/**
 * Insert follows syntax:
 * - INSERT INTO <table_name>(<col_name1>, <col_name3>, <col_name3>, ...)
 *    VALUES(<value1>, <value2>, <value3>, ...)
 *
 * Create a new order detail in `orders` table where
 * - column names match the order the are in the table
 * - `?` allow us to use params in our controllers
 */
exports.INSERT_ORDER = (userId, orderName) =>
  `INSERT INTO orders (user_id, order_name) VALUES (${userId}, ${orderName})`;

/**
 * Update follows syntax:
 * - UPDATE <table_name> SET <colum_name> = '<new_value>' WHERE <colum_name> = '<old_value>'
 *
 * NOTE: omitting `WHERE` will result in updating every existing entry.
 */
exports.UPDATE_ORDER = (userId, orderNumber, newValues) =>
  `UPDATE orders SET ${newValues} WHERE user_id = ${userId} AND order_number = ${orderNumber}`;

// Delete a orderdetails by orderNumber
exports.DELETE_ORDER = (userId, orderNumber) =>
 `DELETE FROM orders WHERE user_id = ${userId} AND order_number = ${orderNumber}`;