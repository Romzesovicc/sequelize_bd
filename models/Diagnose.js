const Sequelize =require('sequelize');
const Patient = require ('../models/Patient');
const sequelize = new Sequelize('new2','root', 'root',{
    dialect: 'mysql',
    host: 'localhost',
    define: {timestamps: false}

});

const Diagnose = sequelize.define('diagnoses', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    its_diagnos: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Diagnose;