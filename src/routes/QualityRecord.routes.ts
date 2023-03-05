const express = require("express");
const router = express.Router();
const QualityRecordController = require("../controllers/QualityRecord.controller");

router.get('/', QualityRecordController.getAllQualityRecords);
router.get('/id/:id', QualityRecordController.getQualityRecordById);
router.get('/date', QualityRecordController.getQualityRecordByDate);

module.exports = router;

export {}