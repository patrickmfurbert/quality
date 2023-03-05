const QualityRecordClassification = require("../models/QualityRecordClassification.model");

exports.getAllQualityRecordClassification = async (req: any, res: any) => {
    const classification = await QualityRecordClassification.findAll();
    res.json(classification);
}

exports.getQualityRecordClassificationById = async (req: any, res: any) => {
    const classification = await QualityRecordClassification.findById(req.params.id);
    res.json(classification);
}

export {}