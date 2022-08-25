const fs = require("node:fs");
const path = require("node:path");

function addCommandsFromDir(subDir, callback) {
  const commandsPath = path.join(__dirname, subDir);
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    callback(command);
  }
}

module.exports = { addCommandsFromDir, }