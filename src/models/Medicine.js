import {DataTypes} from "sequelize";

const SCHEMA = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    designation: {
        type: DataTypes.STRING,
        allowNull: false
    },

    purpose: {
        type: DataTypes.STRING,
        allowNull: false
    }
};

export default {
    schema: SCHEMA,
    tableName: 'medicines',
    associate(models) {
        const { Patient, Medicine } = models;
    }
}

