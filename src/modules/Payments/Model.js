import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/sequelize.js";

export class Payments extends Model {}

Payments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        discount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "students",
                key: "id",
            },
        },
    },
    {
        sequelize,
        modelName: "payments",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);


// Define associations
Payments.belongsTo("students", {
    foreignKey: "student_id",
    as: "student",
});