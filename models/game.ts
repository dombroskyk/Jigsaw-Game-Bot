import { Association, CreationOptional, DataTypes, HasManyAddAssociationMixin, HasManyCountAssociationsMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, HasManyHasAssociationsMixin, HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManySetAssociationsMixin, InferAttributes, InferCreationAttributes, Model, NonAttribute, Optional } from "sequelize";
import { Tag } from "./models";

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
        type: DataTypes.INTEGER,
        allowNull: false
    },
    upperPlayerBound: DataTypes.INTEGER,

    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
};

class Game extends Model<InferAttributes<Game, { omit: 'Tags' }>, InferCreationAttributes<Game, { omit: 'Tags' }>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare lowerPlayerBound: number;
    declare upperPlayerBound: number;

    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

    declare Tags?: NonAttribute<Tag[]>;

    declare getTags: HasManyGetAssociationsMixin<Tag>;
    declare addTag: HasManyAddAssociationMixin<Tag, number>;
    declare addTags: HasManyAddAssociationMixin<Tag, number>;
    declare removeTag: HasManyRemoveAssociationMixin<Tag, number>;
    declare removeTags: HasManyRemoveAssociationsMixin<Tag, number>;
    declare hasTag: HasManyHasAssociationMixin<Tag, number>;
    declare hasTags: HasManyHasAssociationsMixin<Tag, number>;
    declare setTags: HasManySetAssociationsMixin<Tag, number>;
    declare countTags: HasManyCountAssociationsMixin;

    declare public static associations: { tags: Association<Game, Tag>; };
}

export {
    Game,
    GamesTableDefinition
}