"use strict";
const { Pool } = require('pg');
const pool = new Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_URL,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASS,
    port: process.env.DATABASE_PORT,
});
module.exports = pool;
