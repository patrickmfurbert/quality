const express = require('express');
const bodyParser = require('body-parser');
const qualityRecordCategoryRoutes = require('./routes/QualityRecordCategory.routes');
const qualityRecordClassificationRoutes = require('./routes/QualityRecordClassification.routes');
const qualityRecordRoutes = require('./routes/QualityRecord.routes');
require('dotenv').config();


// Initialize express app
const app = express();

//configure middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes
app.use('/api/qualityrecordcategories', qualityRecordCategoryRoutes);
app.use('/api/qualityrecordclassifications', qualityRecordClassificationRoutes);
app.use('/api/qualityrecords', qualityRecordRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

export {};