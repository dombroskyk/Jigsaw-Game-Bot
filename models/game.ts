import { DataTypes, Model, Optional } from "sequelize";

const GAMES_TABLE_NAME = "games";

// interface IPlayerBounds {
//     lowerBound: number;
//     upperBound: number;
// };

interface GameAttributes {
    id?: number;
    name: string;
    lowerPlayerBound: number;
    upperPlayerBound: number;
    // tags: string[];
};

const GamesTableDefinition = {
    id: { 
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    lowerPlayerBound: DataTypes.INTEGER,
    upperPlayerBound: DataTypes.INTEGER,

    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
};

interface GameCreationAttributes extends Optional<GameAttributes, 'id'> {}
// interface GameOutput extends Required<GameAttributes> {}

interface IGame extends Model<GameAttributes, GameCreationAttributes>, GameAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

export {
    IGame,
    GamesTableDefinition,
    GameCreationAttributes,
    GameAttributes,
    GAMES_TABLE_NAME
}