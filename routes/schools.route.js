const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schools.controller');

// POST /api/v1/schools
router.post('/', schoolController.addSchool);

// GET /api/v1/schools?latitude=XX&longitude=YY
router.get('/', schoolController.listSchools);

module.exports = router;