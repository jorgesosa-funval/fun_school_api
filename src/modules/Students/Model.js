import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/sequelize.js";

export class Students extends Model {}

Students.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
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

Students.belongsTo("Users", {
    foreignKey: "user_id",
    as: "user",
});
