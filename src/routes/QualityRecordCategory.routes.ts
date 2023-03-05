const express = require("express");
const router = express.Router();
const QualityRecordCategoryController = require("../controllers/QualityRecordCategory.controller");

router.get('/', QualityRecordCategoryController.getAllQualityRecordCategories);

router.get('/:id', QualityRecordCategoryController.getQualityRecordCategoriesById);
module.exports = router;

export {}