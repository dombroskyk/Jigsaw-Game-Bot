import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
import { GAMES_TABLE_NAME, IGame, GamesTableDefinition, GameCreationAttributes } from "../models/models";
dotenv.config();

const sequelize = new Sequelize('Jigsaw', process.env.SEQUELIZE_DB_USER!, process.env.SEQUELIZE_DB_PASSWORD!, {
	host: 'localhost',
	dialect: 'sqlite',
	logging: true,
	// SQLite only
	storage: 'database.sqlite',
});

export const Game = sequelize.define<IGame>(GAMES_TABLE_NAME, GamesTableDefinition);

export async function insertGame(gameVals:GameCreationAttributes): Promise<IGame> {
	console.log(gameVals);
	const game = await Game.create({
		name: gameVals.name,
		lowerPlayerBound: gameVals.lowerPlayerBound,
		upperPlayerBound: gameVals.upperPlayerBound,
	});

	return game;
}

export async function getGames(customFilter = {}): Promise<IGame[]> {
	// let whereClause = {};
	// if (customFilter !== {})
	// {

	// }
	return await Game.findAll();

	// return games;
  }


function getFilterObject() {
return { games: [], tags: { yes: [], no: [] } };
}

export async function closeDb(): Promise<void> {
	await sequelize.close();
}