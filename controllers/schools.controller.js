const schoolService = require('../services/school.service.js');
const { validateSchoolData } = require('../utils/validators');

class SchoolController {
  async addSchool(req, res, next) {
    try {
      const { name, address, latitude, longitude } = req.body;
      
      // Validate input
      validateSchoolData({ name, address, latitude, longitude });
      
      // Add school
      const schoolId = await schoolService.addSchool({ name, address, latitude, longitude });
      
      res.status(201).json({
        success: true,
        message: 'School added successfully',
        data: { schoolId }
      });
    } catch (error) {
      next(error);
    }
  }

  async listSchools(req, res, next) {
    try {
      const { latitude, longitude } = req.query;
      
      // Validate coordinates
      if (!latitude || !longitude) {
        throw new Error('Latitude and longitude are required');
      }
      
      const userLat = parseFloat(latitude);
      const userLon = parseFloat(longitude);
      
      if (isNaN(userLat) || isNaN(userLon)) {
        throw new Error('Invalid latitude or longitude values');
      }
      
      // Get sorted schools
      const schools = await schoolService.getSchoolsSortedByDistance(userLat, userLon);
      
      res.json({
        success: true,
        data: schools
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new SchoolController();