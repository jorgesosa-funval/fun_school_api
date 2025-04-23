import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/sequelize.js";

export class Teachers extends Model { }

Teachers.init(
    {
        id: {
            type: DataTypes.INTEGER,
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
        modelName: "teachers",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

//association
Teachers.belongsTo('User', { foreignKey: 'user_id', as: 'user' });
