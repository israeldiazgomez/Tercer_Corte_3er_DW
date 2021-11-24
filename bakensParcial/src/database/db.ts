const Sequelize = require('sequelize');

const BD_NAME = 'bakk';
const BD_USER = 'isra';
const BD_PASS = 'israelD25.';

export const database = new Sequelize(
    BD_NAME,
    BD_USER,
    BD_PASS,

    {
        host:'localhost',
        dialect: 'mysql',
        port: 3306
    }
);

database.sync({forse: true})
    .then(function(){
        console.log('---------------------------------------------------------------------------------------------------------------')
        console.log('                  FUNCIONANDO BASE DE DATOS ')
    })