import { Sequelize, Model } from "sequelize";
import DiagnoseSchema from "./Diagnose";
import PatientSchema from "./Patient";
import DoctorSchema from "./Doctor";
import MedicineSchema from "./Medicine";

const sequelize = new Sequelize('new2','root', 'root',{
    dialect: 'mysql',
    host: 'localhost',
    define: { timestamps: false },
    logging: false
});

export class Diagnose extends Model {}
export class Medicine extends Model {}
export class Patient extends Model {}
export class Doctor extends Model {}

Diagnose.init(DiagnoseSchema.schema, { sequelize, tableName: DiagnoseSchema.tableName });
Medicine.init(MedicineSchema.schema, { sequelize, tableName: MedicineSchema.tableName });
Patient.init(PatientSchema.schema, { sequelize, tableName: PatientSchema.tableName });
Doctor.init(DoctorSchema.schema, { sequelize, tableName: DoctorSchema.tableName });

const models = { Diagnose, Medicine, Patient, Doctor };

DiagnoseSchema.associate(models);
MedicineSchema.associate(models);
PatientSchema.associate(models);
DoctorSchema.associate(models);

export default sequelize;