const Sequelize =require('sequelize');
const Patient = require ('../models/Patient');
const Medicine = require ('../models/Medicine');
const Doctor = require ('../models/Doctor');
const Diagnose = require ('../models/Diagnose');
const sequelize = new Sequelize('new2','root', 'root',{
    dialect: 'mysql',
    host: 'localhost',
    define: {timestamps: false}

});
function createTb() {


    Doctor.hasOne(Patient, {onDelete: "cascade"});      //foreign key one_to_one
    Patient.hasMany(Medicine, {onDelete: "cascade"});   //one_to_many
    Patient.hasMany(Diagnose, {onDelete: "cascade"});   //one_to_many
    Diagnose.belongsToMany(Medicine, {through: 'diagnose_medicine'});  //one_to_many


    sequelize.sync().then(result => {
        console.log(result);
    }).catch(err => console.log(err));
}

module.exports = createTb;