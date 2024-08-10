const {Sequelize, DataTypes} = require('sequelize')
const {sequelize} = require('../config/db')

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        //allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genero: {
        type: DataTypes.ENUM('Masculino', 'Femenino'),
        allowNull: false
    },
    fechaNacimiento: {
        type: DataTypes.DATEONLY, // Almacena solo la fecha, sin la hora
        allowNull: false
    },
    ciudad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_registro: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }   
},
{
    timestamps: false
});

module.exports= User;