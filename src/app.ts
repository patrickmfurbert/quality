const express = require('express');
const db = require('./persistence/db');
const qualityRecordCategoryRoutes = require('./routes/QualityRecordCategory.routes');
const qualityRecordClassificationRoutes = require('./routes/QualityRecordClassification.routes');
require('dotenv').config();


// Initialize express app
const app = express();

//configure middleware
app.use('/api/qualityrecordcategories', qualityRecordCategoryRoutes);
app.use('/api/qualityrecordclassifications', qualityRecordClassificationRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

export {};