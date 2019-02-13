const Sequelize = require('sequelize');

const db = new Sequelize('test', 'postgres', 'cuong', {
    dialect: 'postgres',
    host: "localhost",
    port: 5432,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  });

db.authenticate()
  .then(() => console.log('database connected'))
  .catch(err => console.log("err" + err))

module.exports = db