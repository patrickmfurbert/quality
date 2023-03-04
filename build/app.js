"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const db = require('./persistence/db');
const qualityRecordCategoryRoutes = require('./routes/QualityRecordCategory.routes');
require('dotenv').config();
// Initialize express app
const app = express();
//configure middleware
app.use('/api', qualityRecordCategoryRoutes);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(db);
    console.log(`App listening at http://localhost:${port}`);
});
