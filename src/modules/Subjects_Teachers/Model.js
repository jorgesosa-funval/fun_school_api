import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/sequelize.js";

export class Subjects_Teachers extends Model {}

Subjects_Teachers.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        }, 
        subject_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: "subjects",
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
        modelName: "subjects_teachers",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
); 
