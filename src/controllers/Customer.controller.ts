const Customer = require("../models/Customer.model");

exports.getAllCustomers = async (req: any, res: any) => {
    const customers = await Customer.findAll();
    res.json(customers);
}

exports.getCustomerById = async (req: any, res: any) => {
    const customers = await Customer.findById(req.params.id);
    res.json(customers);
}

exports.getCustomerByName = async (req: any, res:any) => {
    const customers = await Customer.findByName(req.query);
    res.json(customers);
}

export {}