import sequelize from 'sequelize';
import 'dotenv/config';

class DataBase {
  constructor() { }

  init() {
    this.connection = process.env.DATABASE_URL;
  }
}
