const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('peluqueria', 'root' ,'',{
    host: 'localhost',
    dialect: 'mysql'
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