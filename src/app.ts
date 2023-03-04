const express = require('express');
const db = require('./persistence/db');
require('dotenv').config();


// Initialize express app
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(db);
  console.log(`App listening at http://localhost:${port}`);
});