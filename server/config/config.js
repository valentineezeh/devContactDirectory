
import dotenv from 'dotenv';

dotenv.config();

const config = {
  development: {
    username: 'DBUSERNAME',
    password: 'DBPASSWORD',
    database: 'DB',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'DBUSERNAMETEST',
    password: 'DBPASSWORDTEST',
    database: 'DBTEST',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres'
  }
};

module.exports = config[process.env.NODE_ENV || 'development'];

// {
//   "development": {
//     "username": "postgres",
//     "password": "Sagemode2",
//     "database": "vconnect",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }