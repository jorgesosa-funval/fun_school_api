import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/sequelize.js";

export class Courses_Students extends Model {}

Courses_Students.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        }, 
        course_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: "courses",
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
    },
    {
        sequelize,
        modelName: "courses_students",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);
