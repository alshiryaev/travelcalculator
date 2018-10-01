const Sequelize = require('sequelize');

const sequelize = new Sequelize('travelcalculator', 'postgres', '12345', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    sync: true
})

const db = {
    testConnection : () => {
        sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    },
    sequelize:sequelize
}

module.exports.db = db;
