import sqlite from "sqlite3";
import { applyGamesFilter } from "./filterHelpers";
import { IGame, Tag, SteamUser, SteamGame, GAMES_TABLE_NAME } from "../models/models";

const db = new sqlite.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }

  console.log('Connected to the in-memory SQLite database.');
});

const TAGS_TABLE_NAME = "tags";
const STEAM_USERS_TABLE_NAME = "steamUsers";
const IMPORTED_STEAM_GAMES_TABLE_NAME = "importedSteamGames"
const GAMES_FILTER = { games: [], tags: [] }

export function initializeDatabase() {
  console.log("Initializing Database");
  db.exec("CREATE TABLE IF NOT EXISTS " + GAMES_TABLE_NAME + " ( \
    id INTEGER PRIMARY KEY AUTOINCREMENT, \
    name TEXT, \
    lowerPlayerBound INTEGER, \
    upperPlayerBound INTEGER \
  )");

  db.exec("CREATE TABLE IF NOT EXISTS " + TAGS_TABLE_NAME + " ( \
    id INTEGER PRIMARY KEY AUTOINCREMENT, \
    name TEXT \
  )");

  db.exec("CREATE TABLE IF NOT EXISTS " + STEAM_USERS_TABLE_NAME + " ( \
    id INTEGER PRIMARY KEY AUTOINCREMENT, \
    username TEXT \
  )");

  db.exec("CREATE TABLE IF NOT EXISTS " + IMPORTED_STEAM_GAMES_TABLE_NAME + " ( \
    id INTEGER PRIMARY KEY AUTOINCREMENT, \
    name TEXT \
  )");
}

export async function getGames(customFilter = {}): Promise<IGame[]> {
  const filter = Object.assign(getFilterObject(), customFilter);
  let games:IGame[] = [];
  db.all(
    "SELECT * FROM " + GAMES_TABLE_NAME,
    (err, resultRows:IGame[]) => {
      games = resultRows;
    }
  );
  const filteredGames = applyGamesFilter(games, filter);

  return filteredGames;
}

export async function getTags(): Promise<Tag[]> {
  let tags:Tag[] = [];
  db.all(
    "SELECT * FROM " + TAGS_TABLE_NAME,
    (err, resultRows:Tag[]) => {
      tags = resultRows;
    }
  );

  return tags;
}

export async function getSteamUsers(): Promise<SteamUser[]> {
  let steamUsers:SteamUser[] = [];
  db.all(
    "SELECT * FROM " + STEAM_USERS_TABLE_NAME,
    (err, resultRows:SteamUser[]) => {
      steamUsers = resultRows;
    }
  );

  return steamUsers;
}

export async function getImportedSteamGames(): Promise<SteamGame[]> {
  let importedSteamGames:SteamGame[] = [];
  db.all(
    "SELECT * FROM " + IMPORTED_STEAM_GAMES_TABLE_NAME,
    (err, resultRows:SteamGame[]) => {
      importedSteamGames = resultRows;
    }
  );

  return importedSteamGames;
}

export async function writeTags(tags:Tag[]): Promise<void> {
  tags.forEach((tag) => insertTag(tag));
}

export async function insertTag(tag:Tag): Promise<void> {
  const insertTagStatement = db.prepare("INSERT INTO " + TAGS_TABLE_NAME + "(name) VALUES (?)");
  insertTagStatement.run([tag.name]);
}

export async function writeGames(games:IGame[]): Promise<void> {
  games.forEach((game) => insertGame(game));
}

export async function insertGame(game:IGame): Promise<void> {
  const insertGameStatement = db.prepare("INSERT INTO " + GAMES_TABLE_NAME + "(name, lowerPlayerBound, upperPlayerBound) VALUES (?, ?, ?)");
  insertGameStatement.run([game.name, game.lowerPlayerBound, game.upperPlayerBound]);
}

export async function insertSteamUserMapping(steamUser:SteamUser): Promise<void> {
  const insertSteamUserMappingStatement = db.prepare("INSERT INTO " + STEAM_USERS_TABLE_NAME + "(steamId, discordId) VALUES (?, ?)");
  insertSteamUserMappingStatement.run([steamUser.steamId, steamUser.discordId]);
}

// async function writeImportedSteamGameIds(importedSteamGameIds) {
//   await db.set(IMPORTED_STEAM_GAME_IDS_KEY, importedSteamGameIds.sort((a, b) => a < b));
// }

function getFilterObject() {
  return { games: [], tags: { yes: [], no: [] } };
}

export function closeDb() {
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Closed the database connection.');
  });
}