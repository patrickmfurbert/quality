const QualityRecord = require("../models/QualityRecord.model");

exports.getAllQualityRecords = async (req: any, res: any) => {
    const qualityRecords = await QualityRecord.findAll();
    res.json(qualityRecords);
}

exports.getQualityRecordById = async (req: any, res: any) => {
    const qualityRecords = await QualityRecord.findById(req.params.id);
    res.json(qualityRecords);
}

exports.getQualityRecordByDate = async (req: any, res: any) => {
    const { createdOn, createdAfter, createdBefore } = req.query;

    let qualityRecords;

    if (createdOn) {
        qualityRecords = await QualityRecord.findByDate(createdOn);
    } else {
        if(createdBefore && !createdAfter){
            qualityRecords = await QualityRecord.findByBeforeDate(createdBefore);
        }else if(createdAfter && !createdBefore){
            qualityRecords = await QualityRecord.findByAfterDate(createdAfter);
        }else if(createdBefore && createdAfter){
            qualityRecords = await QualityRecord.findByBetweenDates(createdAfter, createdBefore);
        }
    }

    res.json(qualityRecords);
}

exports.createQualityRecord = async (req: any, res: any) => {
    const qualityRecord = await QualityRecord.createQualityRecord(req.body);

    res.json(qualityRecord);

}

export { }