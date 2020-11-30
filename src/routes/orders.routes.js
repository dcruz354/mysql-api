const express = require('express');
const {
  getAllOrders,
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/orders.controller');
const canAccess = require('../middleware/auth.middleware');

const ordersRoutes = express.Router();
/**
 * Express routes for Orders.
 *
 * RESTful endpoints make for easily adding to existing API features.
 */

/**
 * Routes for all orders. Evaluates to `/orders/`.
 */
ordersRoutes.get('/', canAccess, getAllOrders).post('/', canAccess, createOrder);

/**
 * Routes for orders by order number. Evalutes to `/orders/:order_number`.
 */
ordersRoutes
  .get('/:orderNumber', canAccess, getOrder) // GET http://locahost:3000/orderls/1
  .put('/:orderNumber', canAccess, updateOrder)
  .delete('/:orderNumber', canAccess, deleteOrder);

module.exports = ordersRoutes;