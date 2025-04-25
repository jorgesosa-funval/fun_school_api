import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/sequelize.js";
import { Users } from "../Users/Model.js";
import { Courses } from "../Courses/Model.js"; 
import { Parents } from "../Parents/Model.js"; 

export class Students extends Model { }

Students.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        birthdate: {
            type: DataTypes.DATE,
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
        modelName: "students",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

Students.belongsTo(Users, {
    foreignKey: "user_id",
    as: "user",
});

Students.belongsToMany(Courses, {
    through: "Courses_Students",
    foreignKey: "student_id",
    otherKey: "course_id",
    as: "courses"
});

Students.belongsToMany(Parents, {
    through: "Parents_Students",
    foreignKey: "student_id",
    otherKey: "parent_id",
    as: "parents"
});
