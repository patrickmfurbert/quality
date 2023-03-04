const express = require("express");
const router = express.Router();
const QualityRecordCategoryController = require("../controllers/QualityRecordCategory.controller");

router.get('/qualityrecordcategories', QualityRecordCategoryController.getAllQualityRecordCategories);

module.exports = router;

export {}