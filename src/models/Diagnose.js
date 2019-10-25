import { DataTypes } from "sequelize";

const SCHEMA = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
};

export default {
    schema: SCHEMA,
    tableName: 'diagnoses',
    associate(models) {
        const { Diagnose, Medicine } = models;
        Diagnose.belongsToMany(Medicine, { through: 'diagnose_medicine' });
    }
}