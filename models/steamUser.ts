import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";

const SteamUsersTableDefinition = {
    id: { 
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    discordId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    steamId: {
        type: DataTypes.STRING,
        allowNull: false
    },

    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
};

class SteamUser extends Model<InferAttributes<SteamUser>, InferCreationAttributes<SteamUser>> {
    declare id: CreationOptional<number>;
    declare discordId: string;
    declare steamId: number;

    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

export {
    SteamUser,
    SteamUsersTableDefinition
}