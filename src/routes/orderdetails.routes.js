const express = require('express');
const {
  getAllOrderDetails,
  createOrderDetails,
  getOrderDetails,
  updateOrderDetails,
  deleteOrderDetails,
} = require('../controllers/orderdetails.controller');
const canAccess = require('../middleware/auth.middleware');

const orderDetailsRoutes = express.Router();
/**
 * Express routes for orderDetails.
 *
 * RESTful endpoints make for easily adding to existing API features.
 */

/**
 * Routes for all orderDetails. Evaluates to `/orderDetails/`.
 */
orderDetailsRoutes.get('/', canAccess, getAllOrderDetails).post('/', canAccess, createOrderDetails);

/**
 * Routes for orderdetails by orderNumber. Evalutes to `/orderdetails/:orderNumber`.
 */
orderDetailsRoutes
  .get('/:orderNumber', canAccess, getOrderDetails) // GET http://locahost:3000/orderdetails/1
  .put('/:orderNumber', canAccess, updateOrderDetails)
  .delete('/:orderNumber', canAccess, deleteOrderDetails);

module.exports = orderDetailsRoutes;