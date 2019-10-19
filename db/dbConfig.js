require('dotenv').config();

const dbConfig = {
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME
}

module.exports = { dbConfig }