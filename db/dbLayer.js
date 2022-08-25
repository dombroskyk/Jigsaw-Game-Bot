const Database = require("@replit/database");
const { applyGamesFilter } = require("./filterHelpers.js");

const db = new Database();

const TAGS_KEY = "tags";
const GAMES_KEY = "games";
const STEAM_USERS_KEY = "steamUsers";
const IMPORTED_STEAM_GAME_IDS_KEY = "importedSteamGameIds"
const GAMES_FILTER = { games: [], tags: [] }

function initializeDatabase() {
  console.log("Initializing Database");
  db.list().then(keys => {
    if (!keys.includes(GAMES_KEY)) {
      writeGames([]);
    }

    if (!keys.includes(TAGS_KEY)) {
      writeTags([]);
    }

    if (!keys.includes(STEAM_USERS_KEY)) {
      writeSteamUsers([])
    }

    if (!keys.includes(IMPORTED_STEAM_GAME_IDS_KEY)) {
      writeImportedSteamGameIds([]);
    }
  });
}

async function getGames(customFilter = {}) {
  const filter = Object.assign(getFilterObject(), customFilter);
  const games = await db.get(GAMES_KEY);
  const filteredGames = applyGamesFilter(games, filter);

  return filteredGames;
}

async function getTags() {
  const tags = await db.get(TAGS_KEY);
  return tags;
}

async function getSteamUsers() {
  const steamUsers = await db.get(STEAM_USERS_KEY);
  return steamUsers;
}

async function getImportedSteamGameIds() {
  const importedSteamGameIds = await db.get(IMPORTED_STEAM_GAME_IDS_KEY);
  return importedSteamGameIds;
}

async function writeTags(tags) {
  await db.set(TAGS_KEY, tags.sort((a, b) => a.localeCompare(b)));
}

async function writeGames(games) {
  await db.set(GAMES_KEY, games.sort((a, b) => a.name.localeCompare(b.name)));
}

async function writeSteamUsers(steamUsers) {
  await db.set(STEAM_USERS_KEY, steamUsers.sort((a, b) => a.userId.localeCompare(b.userId)));
}

async function writeImportedSteamGameIds(importedSteamGameIds) {
  await db.set(IMPORTED_STEAM_GAME_IDS_KEY, importedSteamGameIds.sort((a, b) => a < b));
}

function getFilterObject() {
  return { games: [], tags: { yes: [], no: [] } };
}

module.exports = {
  initializeDatabase,
  getGames,
  getTags,
  writeTags,
  writeGames,
  getSteamUsers,
  writeSteamUsers,
  getImportedSteamGameIds,
  writeImportedSteamGameIds,
}