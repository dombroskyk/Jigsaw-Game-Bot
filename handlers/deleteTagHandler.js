const { getTags, writeTags } = require("../db/dbLayer.js");

async function handleDeleteTag (msg, tagToDelete) {
  const existingTags = await getTags()
  const tagToDeleteIndex = existingTags.findIndex(existingTag => existingTag.toLowerCase() === tagToDelete.toLowerCase());
  if (tagToDeleteIndex === -1) {
    msg.reply(`Tag ${tagToDelete} could not be found.`);
  } else {
    const deletedTag = existingTags.splice(tagToDeleteIndex, 1);
    writeTags(existingTags);

    msg.reply(`Deleted tag '${deletedTag[0]}'.`)
  }
}

module.exports = {
  handleDeleteTag,
}