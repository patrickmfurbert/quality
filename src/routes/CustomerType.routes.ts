const router = require("express").Router();
const CustomerTypeController = require("../controllers/CustomerType.controller");

router.get('/', CustomerTypeController.getAllCustomerTypes);
router.get('/:id', CustomerTypeController.getCustomerTypeById);

module.exports = router;

export {}