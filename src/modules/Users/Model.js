import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/sequelize.js";
import { Roles } from "../Roles/Model.js";
export class Users extends Model { }

Users.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        middlename: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        secondlastname: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        emergency_phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            get() {
                const value = this.getDataValue("status");
                return value ? 'active' : 'inactive';
            }
        },
        role_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: "roles",
                key: "id",
            },
        },
    },
    {
        sequelize,
        modelName: "users",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

// Associations 
Users.belongsTo(Roles, { foreignKey: "role_id", as: "role" });
