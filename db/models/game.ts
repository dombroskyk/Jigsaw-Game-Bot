import { Association, CreationOptional, DataTypes, HasManyAddAssociationMixin, HasManyCountAssociationsMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, InferAttributes, InferCreationAttributes, Model, NonAttribute, Optional } from "sequelize";
import { UserPlatformMapping, Tag } from "./models";

const GamesTableDefinition = {
    id: { 
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lowerPlayerBound: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    upperPlayerBound: DataTypes.INTEGER.UNSIGNED,
    steamId: DataTypes.INTEGER.UNSIGNED,
    basicImported: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },

    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
};

class Game extends Model<InferAttributes<Game, { omit: 'Tags' | 'SteamOwners' }>, InferCreationAttributes<Game, { omit: 'Tags' | 'SteamOwners' }>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare lowerPlayerBound: number;
    declare upperPlayerBound?: number | null;
    declare steamId?: number | null;
    declare basicImported: boolean;

    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

    declare Tags?: NonAttribute<Tag[]>;
    declare SteamOwners?: NonAttribute<UserPlatformMapping[]>;

    declare getTags: HasManyGetAssociationsMixin<Tag>;
    declare addTag: HasManyAddAssociationMixin<Tag, number>;
    declare addTags: HasManyAddAssociationMixin<Tag, number>;
    declare removeTag: HasManyRemoveAssociationMixin<Tag, number>;
    declare removeTags: HasManyRemoveAssociationsMixin<Tag, number>;
    declare hasTag: HasManyHasAssociationMixin<Tag, number>;
    declare hasTags: HasManyHasAssociationsMixin<Tag, number>;
    declare setTags: HasManySetAssociationsMixin<Tag, number>;
    declare countTags: HasManyCountAssociationsMixin;

    declare hasSteamOwner: HasManyHasAssociationMixin<UserPlatformMapping, number>;
    declare addSteamOwner: HasManyAddAssociationMixin<UserPlatformMapping, number>;

    declare public static associations: {
        tags: Association<Game, Tag>;
        steamOwners: Association<Game, UserPlatformMapping>;
    };

    toString(): string {
        return `${this.name}, #: ${this.lowerPlayerBound} - ${this.upperPlayerBound}, BasicImported: ${this.basicImported}, Tags: ${this.Tags ? this.Tags.map(tag => tag.name).join(", ") : "none"}`;
    }
}

export {
    Game,
    GamesTableDefinition
}