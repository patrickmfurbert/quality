const QualityRecordCategory = require("../models/QualityRecordCategory.model");

exports.getAllQualityRecordCategories = async (req: any, res: any) => {
    const categories = await QualityRecordCategory.findAll();
    res.json(categories);
}

exports.getQualityRecordCategoriesById = async (req: any, res: any) => {
    const categories = await QualityRecordCategory.findById(req.params.id);
    res.json(categories);
}


export {}