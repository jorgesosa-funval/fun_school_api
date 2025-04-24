import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/sequelize.js";

export class Parents_Students extends Model {}

Parents_Students.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        parent_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: "parents",
                key: "id",
            },
        },
        student_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: "students",
                key: "id",
            },
        },
        relationship: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },

    },
    {
        sequelize,
        modelName: "parents_students",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);
