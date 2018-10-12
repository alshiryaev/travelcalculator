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
    }
})

// const sequelize = new Sequelize('d9hko1m7coq5g7', 'ufbymoxopiprqj', '290fdc3ae848542bc4ccc9e05c14a42b565ca033ba5db9cde4759d1cca62d788', {
//     host: 'ec2-54-75-251-84.eu-west-1.compute.amazonaws.com',
//     dialect: 'postgres',  
//     port: 5432,
//     dialectOptions: {        
//         ssl: {
//             require: true
//         }
//     }
//   })
  

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

