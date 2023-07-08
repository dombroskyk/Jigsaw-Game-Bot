import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";

const UserPlatformMappingsTableDefinition = {
    id: { 
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    steamId: DataTypes.STRING,

    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
};

class UserPlatformMapping extends Model<InferAttributes<UserPlatformMapping>, InferCreationAttributes<UserPlatformMapping>> {
    declare id: string;
    declare steamId?: number | null;

    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

export {
    UserPlatformMapping,
    UserPlatformMappingsTableDefinition
}