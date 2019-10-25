import {DataTypes} from "sequelize";

const SCHEMA = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    specialty: {
        type: DataTypes.STRING,
        allowNull: false
    }
};
export default {
    schema: SCHEMA,
    tableName: 'doctors',
    associate(models) {
        const { Patient, Doctor } = models;
        Doctor.hasOne(Patient, { onDelete: "cascade" });
    }
}

