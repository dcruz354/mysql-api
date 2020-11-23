const connection = require('../db-config');
const {
  ALL_ODERDETAILS,
  SINGLE_ODERDETAILS,
  INSERT_ODERDETAILS,
  UPDATE_ODERDETAILS,
  DELETE_ODERDETAILS,
} = require('../queries/orderdetails.queries');
const query = require('../utils/query');

/**
 * CRUD - Create, Read, Update, Delete
 * GET - Read
 * POST - Create
 * PUT - Update
 * DELETE - Delete
 */

// http://localhost:3000/orderdetails
exports.getAllOrderDetails = async (req, res) => {
  // establish connection
  const con = await connection().catch((err) => {
    throw err;
  });

  // query all orderdetails
  const orderdetails = await query(con, ALL_ODERDETAILS).catch((err) => {
    res.send(err);
  });

  if (orderdetails.length) {
    res.json(orderdetails);
  }
};

// http://localhost:3000/orderdetails/1
exports.getOrderDetails = async (req, res) => {
  // establish connection
  const con = await connection().catch((err) => {
    throw err;
  });

  // query all orderdetails
  const orderdetail = await query(con, SINGLE_ODERDETAILS, [req.params.orderNumber]).catch(
    (err) => {
      res.send(err);
    }
  );

  if (orderdetail.length) {
    res.json(orderdetail);
  }
};

// http://localhost:3000/orderdetails/1
/**
 * POST request -
 * {
 *  customerName: 'A customer name'
 * }
 */
exports.createOrderDetails = async (req, res) => {
  // verify valid token
  const decoded = req.user; // {id: 1, iat: wlenfwekl, expiredIn: 9174323 }

  // take result of middleware check
  if (decoded.id) {
    // establish connection
    const con = await connection().catch((err) => {
      throw err;
    });

    // query add orderdetails
    const result = await query(con, INSERT_ODERDETAILS, [req.body.customerName]).catch(
      (err) => {
        res.send(err);
      }
    );
    console.log(result);

    if (result.affectedRows === 1) {
      res.json({ message: 'Added orderdetails successfully!' });
    }
  }
};

// http://localhost:3000/orderdetails/1
/**
 * PUT request -
 * {
 *  customerName: 'A customer name',
 *  status: 'completed'
 * }
 */
exports.updateOrderDetails = async (req, res) => {
  // establish connection
  const con = await connection().catch((err) => {
    throw err;
  });

  // query update orderdetails
  const result = await query(con, UPDATE_ODERDETAILS, [
    req.body.customerName,
    req.body.comments,
    req.params.orderNumber,
  ]).catch((err) => {
    res.send(err);
  });

  if (result.affectedRows === 1) {
    res.json(result);
  }
};

// http://localhost:3000/orderdetails/1
exports.deleteOrderDetails = async (req, res) => {
  // establish connection
  const con = await connection().catch((err) => {
    throw err;
  });

  // query delete orderdetails
  const result = await query(con, DELETE_ODERDETAILS, [req.params.orderNumber]).catch(
    (err) => {
      res.send(err);
    }
  );

  if (result.affectedRows === 1) {
    res.json({ message: 'Deleted successfully.' });
  }
};