const CustomerType = require("../models/CustomerType.model");

exports.getAllCustomerTypes = async (req: any, res: any) => {
    const customerTypes = await CustomerType.findAll();
    res.json(customerTypes)
}

exports.getCustomerTypeById = async (req: any, res: any) => {
    const customerTypes = await CustomerType.findById(req.params.id);
    res.json(customerTypes)
}

export {}