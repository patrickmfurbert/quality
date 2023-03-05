const express = require("express");
const router = express.Router();
const QualityRecordController = require("../controllers/QualityRecord.controller");

router.get('/', QualityRecordController.getAllQualityRecords);
router.get('/:id', QualityRecordController.getQualityRecordById);

module.exports = router;

export {}