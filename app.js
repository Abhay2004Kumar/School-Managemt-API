const express = require('express');
require('dotenv').config(); // Load environment variables
const bodyParser = require('body-parser');
const cors = require('cors');
const { initializeDb } = require('./config/db');
const { errorHandler, notFoundHandler } = require('./middlewares/errorHandler');
const serverConfig = require('./config/server.config');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database initialization
initializeDb();

// API routes
const apiRouter = express.Router();
app.use(serverConfig.apiPrefix, apiRouter);

apiRouter.use('/schools', require('./routes/schools.route'));

// Health check endpoint
apiRouter.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;