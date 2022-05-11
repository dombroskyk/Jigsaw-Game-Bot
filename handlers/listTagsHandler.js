const { getTags } = require("../db/dbLayer.js");

async function handleListTags(msg) {
  const tags = await getTags();
  msg.reply(tags.join(", "));
}

module.exports = {
  handleListTags,
}