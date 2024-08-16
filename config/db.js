const {Sequelize} = require('sequelize');
require('dotenv').config(); // paquete para acceder al .env

// const sequelize = new Sequelize('peluqueria', 'root' ,'',{
//     host: 'localhost',
//     dialect: 'mysql'
// });

//se cambia la forma de accceder a los datos
const sequelize = new Sequelize(process.env.DATABASE_URL, {  //'peluqueria', 'root' ,'',
    dialect: 'mysql',
    dialectOptions:{
        connectTimeout: 60000
    }
});

const connectDB = async() =>{
    try{
        await sequelize.authenticate();
        console.log ('Connected to database');
    } catch(err){
        console.error('error connecting to database', err);
    }
};

module.exports = {sequelize,connectDB};