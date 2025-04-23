import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/sequelize.js";

export class Parents extends Model { }

Parents.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        job: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        job_phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        salary: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        profession: {
            type: DataTypes.STRING,
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
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: "parents",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);
 
Parents.belongsTo(Users, {
    foreignKey: "user_id",
    as: "user",
});

