require('dotenv').config(); // Load environment variables
const app = require('./app');
const serverConfig = require('./config/server.config');

const port = serverConfig.port;

app.listen(port, () => {
  console.log(`Server running in ${serverConfig.env} mode on port ${port}`);
  console.log("Attempting to connect to:", {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
  });
});