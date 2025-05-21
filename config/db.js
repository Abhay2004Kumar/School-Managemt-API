const mysql = require('mysql2/promise');
const dbConfig = require('./db.config');

let pool;

async function initializeDb() {
  pool = mysql.createPool(dbConfig);
  try {
    const connection = await pool.getConnection();
    console.log('Successfully connected to the database');
    connection.release();
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
}

function getPool() {
  return pool;
}

module.exports = {
  initializeDb,
  getPool
};