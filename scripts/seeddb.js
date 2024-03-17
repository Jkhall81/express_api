const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: "localhost",
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

const sqlFilePath = path.join(__dirname, "monsters.sql");
const sqlScript = fs.readFileSync(sqlFilePath).toString();

async function runScript() {
  try {
    const client = await pool.connect();
    await client.query(sqlScript);
    console.log("Script executed successfully");
    client.release();
  } catch (error) {
    console.error(error);
  } finally {
    pool.end();
  }
}

runScript();
