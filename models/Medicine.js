const Sequelize =require('sequelize');
const sequelize = new Sequelize('new2','root', 'root',{
    dialect: 'mysql',
    host: 'localhost',
    define: {timestamps: false}

});

const Medicine = sequelize.define('medicine', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    designation: {
        type: Sequelize.STRING,
        allowNull: false
    },

    purpose: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Medicine;