import { CreationAttributes, InferCreationAttributes, Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
import { Game, GamesTableDefinition, SteamUser, SteamUsersTableDefinition, Tag, TagsTableDefinition } from "../models/models";
import { isTaggedTemplateExpression } from "typescript";
dotenv.config();

const sequelize = new Sequelize('Jigsaw', process.env.SEQUELIZE_DB_USER!, process.env.SEQUELIZE_DB_PASSWORD!, {
	host: 'localhost',
	dialect: 'sqlite',
	logging: true,
	// SQLite only
	storage: 'database.sqlite',
});

Game.init(GamesTableDefinition, { sequelize });
Tag.init(TagsTableDefinition, { sequelize });
SteamUser.init(SteamUsersTableDefinition, { sequelize });

Tag.belongsToMany(Game, { through: 'Games_Tags' });
Game.belongsToMany(Tag, { through: 'Games_Tags' });

sequelize.sync({alter: true});

export async function insertGame(gameVals:Game, tags:Tag[]): Promise<Game> {
	const game = await gameVals.save();

	await game.setTags(tags);
	
	return await getGameById(game.id);
}

export async function getGames(customFilter = {}): Promise<Game[]> {
	// let whereClause = {};
	// if (customFilter !== {})
	// {

	// }
	return await Game.findAll({ include: Tag });
}

async function getGameById(id:number): Promise<Game> {
	return await Game.findByPk(id, {include: Tag, rejectOnEmpty: true});
}

export async function getGamesByName(gameName:string): Promise<Game[]> {
	return await Game.findAll({ where: { name: gameName }, include: Tag });
}

export async function deleteGame(game:Game): Promise<void> {
	await Game.destroy({ where: { id: game.id }});
}

function getFilterObject() {
	return { games: [], tags: { yes: [], no: [] } };
}

export async function closeDb(): Promise<void> {
	await sequelize.close();
}

export async function getTags(): Promise<Tag[]> {
	return await Tag.findAll();
}

export async function findOrCreateTags(tags:Tag[]): Promise<Tag[]> {
	let actualTags:Tag[] = [];
	tags.forEach(async tag => {
		let actualTag = await Tag.findOne({ where: { name: tag.name }})
		if (actualTag === null)
			actualTag = await tag.save();

		actualTags.push(actualTag);
	});

	return actualTags;
}

export async function getSteamUsers(): Promise<SteamUser[]> {
	return await SteamUser.findAll();
}

export async function insertSteamUserMapping(discordId:string, steamId:number): Promise<SteamUser> {
	return await SteamUser.create({ discordId: discordId, steamId: steamId});
}

export async function deleteSteamUserRegistrationByDiscordId(discordId:string): Promise<void> {
	const steamUserToDelete = await SteamUser.findOne({ where: { discordId: discordId }});
	if (steamUserToDelete === null) {
		throw new Error(`SteamUser with id: ${discordId} was not found!`);
	}
	
	steamUserToDelete.destroy();
}

export async function dumpDb(): Promise<void> {
	console.log('games');
	await sequelize.query("select * from games").then((rows) => {
		console.log(JSON.stringify(rows));
	});
	console.log('tags');
	await sequelize.query("select * from tags").then((rows) => {
		console.log(JSON.stringify(rows));
	});
	console.log('games_tags');
	await sequelize.query("select * from Games_Tags").then((rows) => {
		console.log(JSON.stringify(rows));
	});
	console.log('steamUsers');
	await sequelize.query("select * from steamUsers").then((rows) => {
		console.log(JSON.stringify(rows));
	});
}