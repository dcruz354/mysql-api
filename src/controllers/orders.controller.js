const mysql = require('mysql');
const connection = require('../db-config');
const {
  ALL_ORDERS,
  SINGLE_ORDER,
  INSERT_ORDER,
  UPDATE_ORDER,
  DELETE_ORDER,
} = require('../queries/orders.queries');
const query = require('../utils/query');
const { serverError } = require('../utils/handlers');

/**
 * CRUD - Create, Read, Update, Delete
 * GET - Read
 * POST - Create
 * PUT - Update
 * DELETE - Delete
 */


// http://localhost:3000/orders
exports.getAllOrders = async (req, res) => {
  // establish connection
  const con = await connection().catch((err) => {
    throw err;
  });

  // query all orders
  const orders = await query(con, ALL_ORDERS(req.user.id), []).catch(
    serverError(res)
  );

  // [] === true, 0 === false
  if (!orders.length) {
    res.status(200).json({ msg: 'No orders available for this user.' });
  }
  res.json(orders);
};

// http://localhost:3000/orders/1
exports.getOrder = async (req, res) => {
  // establish connection
  const con = await connection().catch((err) => {
    throw err;
  });

  // query order
  const order = await query(
    con,
    SINGLE_ORDER(req.user.id, req.params.orderNumber)).catch(serverError(res));

  if (!order.length) {
    res.status(400).json({ msg: 'No order available for this user.' });
  }
  res.json(order);
};

// http://localhost:3000/orders
/**
 * POST request -
 * {
 *  order_name: 'An order name'
 * }
 */

exports.createOrder = async (req, res) => {
  // verify valid token
  const user = req.user; // {id: 1, iat: wlenfwekl, expiredIn: 9174323 }

   // take result of middleware check
   if (user.id) {
    // establish connection
    const con = await connection().catch((err) => {
      throw err;
    });

    // query add orderdetails
    const orderName = mysql.escape(req.body.order_name);
    const result = await query(con, INSERT_ORDER(user.id, orderName)).catch(
      serverError(res)
    );

    if (result.affectedRows !== 1) {
      res
        .status(500)
        .json({ msg: `Unable to add order: ${req.body.order_name}` });
    }
    res.json({msg: 'Added order successfully!' });
  }
};

/**
 * Build up values string.
 *
 * @example
 * 'key1 = value1, key2 = value2, ...'
 * "order_name = \'Orders 1\', status = \'complete\', date = \'<today's_date>\'"
 */
const _buildValuesString = (req) => {
  const body = req.body;
  const values = Object.keys(body).map(
    // [order_name, status].map()
    (key) => `${key} = ${mysql.escape(body[key])}` // 'New 1 Customer name'
  );

  values.push(`created_date = NOW()`); // update current date and time
  values.join(', '); // make into a string
  return values;
};

// http://localhost:3000/orders/1
/**
 * PUT request -
 * {
 *  order_name: 'An order name',
 *  status: 'completed'
 * }
 */
 
exports.updateOrder = async (req, res) => {
  // establish connection
  const con = await connection().catch((err) => {
    throw err;
  });

  const values = _buildValuesString(req);

  // query update order
  const result = await query(
    con,
    UPDATE_ORDER(req.user.id, req.params.orderNumber, values)
    ).catch(serverError(res));

  if (result.affectedRows !== 1) {
    res
      .status(500)
      .json({ msg: `Unable to update order: '${req.body.order_name}'`});
  }
  res.json(result);
};

// http://localhost:3000/orders/1
exports.deleteOrder = async (req, res) => {
  // establish connection
  const con = await connection().catch((err) => {
    throw err;
  });

  // query delete order
  const result = await query(
    con, 
    DELETE_ORDER(req.user.id, req.params.orderNumber)
    ).catch(serverError(res));

  if (result.affectedRows !== 1) {
    res
      .status(500)
      .json({ msg: `Unable to delete order at: ${req.params.orderNumber}` });
  }
  res.json({ msg: 'Delete successfully.'});
};