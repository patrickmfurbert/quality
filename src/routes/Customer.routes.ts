const router = require("express").Router();
const CustomerController = require("../controllers/Customer.controller");

router.get('/', CustomerController.getAllCustomers);
router.get('/id/:id', CustomerController.getCustomerById);
router.get('/name', CustomerController.getCustomerByName);

module.exports = router;

export {}