/**
 * Tables follow syntax:
 * - CREATE TABLE <table_name>(<column_name> <data_type> <options>, ...)
 *
 * Create a table called `orderdetails` (case-insensitive), with
 * - orderNumber as an integer/number that can't have null values, auto-increment it
 * - customerName with a max of 255 characters, cannot have null values
 * - created_date set to date and time created
 * - status with a max of 10 characters, has a default of 'pending'
 * - comments with a max of 255 characters, cannot have null values
 *
 * NOTE: order is important.
 * - columns can have multiple options attached (take `orderNumber` column for example)
 * - orderNumber is always first (helps with inserting)
 * - defaults always specifed last (helps with inserting)
 */
exports.CREATE_ORDERDETAILS_TABLE = `CREATE TABLE IF NOT EXISTS orderdetails(
    orderNumber int NOT NULL AUTO_INCREMENT,
    user_id int NOT NULL,
    customerName varchar(255) NOT NULL,
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP(),
    status varchar(10) DEFAULT 'pending',
    comments varchar(255) DEFAULT NULL,
    PRIMARY KEY (orderNumber),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
  )`;

  // Get every Order Details
exports.ALL_ODERDETAILS = `SELECT * FROM orderdetails`;

// Get a single order detail by orderNumber
exports.SINGLE_ODERDETAILS = `SELECT * FROM orderdetails WHERE orderNumber = ?`;

/**
 * Insert follows syntax:
 * - INSERT INTO <table_name>(<col_name1>, <col_name3>, <col_name3>, ...)
 *    VALUES(<value1>, <value2>, <value3>, ...)
 *
 * Create a new order detail in `orderdetails` table where
 * - column names match the order the are in the table
 * - `?` allow us to use params in our controllers
 */
exports.INSERT_ODERDETAILS = `INSERT INTO orderdetails (customerName) VALUES (?)`;

/**
 * Update follows syntax:
 * - UPDATE <table_name> SET <colum_name> = '<new_value>' WHERE <colum_name> = '<old_value>'
 *
 * NOTE: omitting `WHERE` will result in updating every existing entry.
 */
exports.UPDATE_ODERDETAILS = `UPDATE orderdetails SET customerName = ?, comments = ? WHERE orderNumber = ?`;

// Delete a orderdetails by orderNumber
exports.DELETE_ODERDETAILS = `DELETE FROM orderdetails WHERE orderNumber = ?`;