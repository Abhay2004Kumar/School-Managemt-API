const School = require('../models/school.model');
const { calculateDistance } = require('../utils/distanceCalc.js');

class SchoolService {
  async addSchool(schoolData) {
    return await School.create(schoolData);
  }

  async getSchoolsSortedByDistance(userLat, userLon) {
    const schools = await School.findAll();
    
    return schools.map(school => {
      const distance = calculateDistance(
        userLat,
        userLon,
        school.latitude,
        school.longitude
      );
      return { ...school, distance };
    }).sort((a, b) => a.distance - b.distance);
  }
}

module.exports = new SchoolService();