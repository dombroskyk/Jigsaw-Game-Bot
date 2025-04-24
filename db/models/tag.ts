import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, NonAttribute, Optional } from "sequelize";
import { Game } from "./models";

const TAGS_TABLE_NAME = "tags";

const TagsTableDefinition = {
    id: { 
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
};

class Tag extends Model<InferAttributes<Tag, { omit: 'games' }>, InferCreationAttributes<Tag, { omit: 'games' }>> {
    declare id: CreationOptional<number>;
    declare name: string;

    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

    declare games?: NonAttribute<Game[]>;

    declare static associations: {

    }
}

export {
    Tag,
    TagsTableDefinition,
    TAGS_TABLE_NAME
}