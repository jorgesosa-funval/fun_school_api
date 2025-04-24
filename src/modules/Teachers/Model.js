import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/sequelize.js";
import { Users } from "../Users/Model.js"; 
import { Courses } from "../Courses/Model.js";
import { Subjects } from "../Subjects/Model.js";
import {Subjects_Teachers} from "../Subjects_Teachers/Model.js";
import { Courses_Teachers } from "../Courses_Teachers/Model.js";
export class Teachers extends Model { }

Teachers.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        salary: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        user_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: "users",
                key: "id",
            },
        },
    },
    {
        sequelize,
        modelName: "teachers",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

//association
Teachers.belongsTo(Users, { foreignKey: 'user_id', as: 'user'}); 

Teachers.belongsToMany(Courses /* import */, {
    through: Courses_Teachers /* import */,
    foreignKey: 'teacher_id',
    otherKey: 'course_id',
    as: 'courses',
});

Teachers.belongsToMany(Subjects /* import */, {
    through: Subjects_Teachers /* import */,
    foreignKey: 'teacher_id',
    otherKey: 'subject_id',
    as: 'subjects',
});