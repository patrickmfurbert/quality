const express = require("express");
const router = express.Router();
const QualityRecordClassificationController = require("../controllers/QualityRecordClassification.controller");

router.get('/', QualityRecordClassificationController.getAllQualityRecordClassification);

router.get('/:id', QualityRecordClassificationController.getQualityRecordClassificationById);
module.exports = router;

export {}