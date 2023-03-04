"use strict";
const express = require('express');
const dotenv = require('dotenv');
const db = require('./persistence/db');
// Initialize express app
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(db);
    console.log(`App listening at http://localhost:${port}`);
});
