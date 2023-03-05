const QualityRecord = require("../models/QualityRecord.model");

exports.getAllQualityRecords = async (req: any, res: any) => {
    const qualityRecords = await QualityRecord.findAll();
    res.json(qualityRecords);
}

exports.getQualityRecordById = async (req: any, res: any) => {
    const qualityRecords = await QualityRecord.findById(req.params.id);
    res.json(qualityRecords);
}

export {}