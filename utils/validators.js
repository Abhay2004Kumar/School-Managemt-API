function validateSchoolData({ name, address, latitude, longitude }) {
    if (!name || !address || latitude === undefined || longitude === undefined) {
      throw new Error('All fields are required');
    }
  
    if (typeof name !== 'string' || typeof address !== 'string') {
      throw new Error('Name and address must be strings');
    }
  
    if (isNaN(latitude) || isNaN(longitude) || 
        latitude < -90 || latitude > 90 || 
        longitude < -180 || longitude > 180) {
      throw new Error('Invalid latitude or longitude values');
    }
  }
  
  module.exports = { validateSchoolData };