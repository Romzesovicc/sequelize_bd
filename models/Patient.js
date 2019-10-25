const Sequelize =require('sequelize');
const sequelize = new Sequelize('new2','root', 'root',{
    dialect: 'mysql',
    host: 'localhost',
    define: {timestamps: false}

});
const Patient = sequelize.define('patient', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    specialty: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
module.exports = Patient;