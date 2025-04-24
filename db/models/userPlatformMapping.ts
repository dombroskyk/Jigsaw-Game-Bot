import { getClient } from "../../messageContextHelper";
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import * as dotenv from 'dotenv';
import { Guild, GuildMember } from "discord.js";
dotenv.config()

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
    declare steamId?: string | null;

    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

    toString(): string {
        const client = getClient();
        return client.guilds.fetch(process.env.DISCORD_GUILD_ID).then((guild: Guild) => {
            return guild.members.fetch(this.id).then((member: GuildMember) => {
                return `User: ${member.nickname ?? member.user.username}, Steam Id: ${this.steamId}`;
            });
        });
    }
}

export {
    UserPlatformMapping,
    UserPlatformMappingsTableDefinition
}