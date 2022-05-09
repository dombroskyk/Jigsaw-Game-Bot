const Database = require("@replit/database")

const db = new Database();

const TAGS_KEY = "tags";
const GAMES_KEY = "games";

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

async function getGames() {
  let games = await db.get(GAMES_KEY);
  return games;
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

module.exports = {
  initializeDatabase,
  getGames,
  getTags,
  writeTags,
  writeGames,
}