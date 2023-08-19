import { FindOptions, IncludeOptions, Op, Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
import { Game, GamesTableDefinition, UserPlatformMapping, UserPlatformMappingsTableDefinition, Tag, TagsTableDefinition } from "../models/models";
import { GetGamesFilter } from "models/getGamesFilter";
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
UserPlatformMapping.init(UserPlatformMappingsTableDefinition, { sequelize });

Tag.belongsToMany(Game, { through: 'Games_Tags' });
Game.belongsToMany(Tag, { through: 'Games_Tags' });

Game.belongsToMany(UserPlatformMapping, { through: 'Game_SteamUserPlatformMapping', as: 'SteamOwner'});
UserPlatformMapping.belongsToMany(Game, { through: 'Game_SteamUserPlatformMapping', as: 'SteamGames'});

// sequelize.sync({force: true});
// sequelize.sync({alter: true});
sequelize.sync();

export async function insertGame(gameVals: Game, tags: Tag[]): Promise<Game> {
	const game = await gameVals.save();
	await game.setTags(tags);
	
	return await getGameById(game.id);
}

export async function getGames(getGamesFilter?: GetGamesFilter): Promise<Game[]> {
	let gameFindOptions:FindOptions = { 
		include: {
			model: Tag
		}
	};
	if (typeof getGamesFilter !== "undefined" && getGamesFilter !== null) {
		let yesTagsWhere:any = null;
		let noTagsWhere:any = null;
		if (getGamesFilter.yesTags.length) {
			yesTagsWhere = {
				'$Tags.name$': { [Op.in]: getGamesFilter.yesTags }
			}
		}

		if (getGamesFilter.noTags.length) {
			noTagsWhere = {
				'$Tags.name$': { [Op.notIn]: getGamesFilter.noTags }
			}
		}

		if (yesTagsWhere !== null && noTagsWhere !== null) {
			gameFindOptions.where = {
				[Op.and]: [
					yesTagsWhere,
					noTagsWhere
				]
			}
		} else if (yesTagsWhere !== null) {
			gameFindOptions.where = yesTagsWhere;
		} else if (noTagsWhere !== null) {
			gameFindOptions.where = noTagsWhere;
		} 
		
		if (typeof gameFindOptions.where === "undefined") {
			gameFindOptions.where = {};
		}

		gameFindOptions.where['lowerPlayerBound'] = { [Op.lte]: getGamesFilter.numPlayers };
		gameFindOptions.where['upperPlayerBound'] = { [Op.gte]: getGamesFilter.numPlayers };
	}

	const games = await Game.findAll(gameFindOptions);
	return games.filter((game) => {
		return !getGamesFilter?.games.some((gameName) => !gameName.toLocaleLowerCase().localeCompare(game.name.toLocaleLowerCase()));
	});
}

export async function getGameById(id: number): Promise<Game> {
	return await Game.findByPk(id, {include: Tag, rejectOnEmpty: true});
}

export async function getGamesByName(gameName: string): Promise<Game[]> {
	return await Game.findAll({ where: { name: { [Op.like]: gameName } }, include: Tag });
}

export async function deleteGame(game: Game): Promise<void> {
	await Game.destroy({ where: { id: game.id }});
}

export async function closeDb(): Promise<void> {
	await sequelize.close();
}

export async function getTags(): Promise<Tag[]> {
	return await Tag.findAll();
}

export async function findOrCreateTags(tags: Tag[]): Promise<Tag[]> {
	let actualTags:Tag[] = [];
	for(const tag of tags) {
		let actualTag = await Tag.findOne({ where: { name: { [Op.like]: tag.name } } });
		if (actualTag === null)
			actualTag = await tag.save();

		actualTags.push(actualTag);
	};

	return actualTags;
}

export async function getSteamUserPlatformMappings(): Promise<UserPlatformMapping[]> {
	return await UserPlatformMapping.findAll({ 
		where: { 
			steamId: { [Op.not]: null }
		}
	});
}

export async function getSteamUserPlatformMappingByDiscordId(discordId:string): Promise<UserPlatformMapping> {
	const steamUserPlatformMapping = await UserPlatformMapping.findOne({ 
		where: { 
			[Op.and]: {
				id: discordId,
				steamId: {[Op.not]: null}
			}
		}
	});
	if (steamUserPlatformMapping === null) {
		throw new Error(`Steam UserPlatformMapping with for Discord Id: '${discordId}' was not found!`);
	}
	
	return steamUserPlatformMapping;
}

export async function insertSteamUserPlatformMapping(discordId: string, steamId?: string): Promise<UserPlatformMapping> {
	return await UserPlatformMapping.create({ id: discordId, steamId: steamId});
}

export async function deleteSteamUserPlatformMappingByDiscordId(discordId:string): Promise<void> {
	const steamUserPlatformMappingToDelete = await getSteamUserPlatformMappingByDiscordId(discordId);
	
	steamUserPlatformMappingToDelete.destroy();
}

export async function getImportedSteamGames(): Promise<Game[]> {
	return await Game.findAll({where: {steamId: { [Op.not]: null}}})
}

export async function mapGameToSteamUser(steamGame:Game, userPlatformMapping:UserPlatformMapping): Promise<void> {
	if (!(await steamGame.hasSteamOwner(userPlatformMapping))) {
		steamGame.addSteamOwner(userPlatformMapping);
		steamGame.save();
	}
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
	console.log('userPlatformMappings');
	await sequelize.query("select * from userPlatformMappings").then((rows) => {
		console.log(JSON.stringify(rows));
	});
	console.log('Game_SteamUserPlatformMapping');
	await sequelize.query("select * from Game_SteamUserPlatformMapping").then((rows) => {
		console.log(JSON.stringify(rows));
	});
}