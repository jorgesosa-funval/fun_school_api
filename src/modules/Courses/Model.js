import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/sequelize.js";

export class Courses extends Model {}

Courses.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        schedule: {
            type: DataTypes.ENUM("morning", "afternoon", "evening"),
            allowNull: false,
        },
        term: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        level_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: "levels",
                key: "id",
            },
        },
    },
    {
        sequelize,
        modelName: "courses",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);
