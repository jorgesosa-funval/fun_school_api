import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/sequelize.js";

export class Levels extends Model {}

Levels.init(
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
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "levels",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);
