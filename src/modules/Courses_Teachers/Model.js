import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/sequelize.js";

export class Courses_Teachers extends Model {}

Courses_Teachers.init(
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
        teacher_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: "teachers",
                key: "id",
            },
        },
    },
    {
        sequelize,
        modelName: "courses_teachers",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);
