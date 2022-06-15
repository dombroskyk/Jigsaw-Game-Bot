const Database = require("@replit/database");
const { applyGamesFilter } = require("./filterHelpers.js");

const db = new Database();

const TAGS_KEY = "tags";
const GAMES_KEY = "games";
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
  });
}

async function getGames(customFilter = {}) {
  const filter = Object.assign(getFilterObject(), customFilter);
  const games = await db.get(GAMES_KEY);
  const filteredGames = applyGamesFilter(games, filter);
  
  return filteredGames;
}

async function getTags() {
  let tags = await db.get(TAGS_KEY);
  return tags;
}

async function writeTags(tags) {
  await db.set(TAGS_KEY, tags.sort((a, b) => a.localeCompare(b)));
}

async function writeGames(games) {
  await db.set(GAMES_KEY, games.sort((a, b) => a.name.localeCompare(b.name)));
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
}