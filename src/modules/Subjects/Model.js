import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/sequelize.js";

export class Subjects extends Model {}

Subjects.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        sequelize,
        modelName: "subjects",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);
