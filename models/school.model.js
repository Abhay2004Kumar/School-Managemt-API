const { getPool } = require('../config/db');

class School {
  static async create({ name, address, latitude, longitude }) {
    const pool = getPool();
    const [result] = await pool.execute(
      'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
      [name, address, latitude, longitude]
    );
    return result.insertId;
  }

  static async findAll() {
    const pool = getPool();
    const [schools] = await pool.execute('SELECT * FROM schools');
    return schools;
  }

  static async findById(id) {
    const pool = getPool();
    const [schools] = await pool.execute('SELECT * FROM schools WHERE id = ?', [id]);
    return schools[0];
  }
}

module.exports = School;