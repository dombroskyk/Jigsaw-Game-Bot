const { getTags, writeTags } = require("../dbLayer.js");

function handleDeleteTag (msg, tagToDelete) {
  getTags().then(existingTags => {
    const tagToDeleteIndex = existingTags.findIndex(existingTag => existingTag.toLowerCase() === tagToDelete.toLowerCase());
    if (tagToDeleteIndex === -1) {
      msg.reply(`Tag ${tagToDelete} could not be found.`);
    } else {
      const deletedTag = existingTags.splice(tagToDeleteIndex, 1);
      writeTags(existingTags);

      msg.reply(`Deleted tag '${deletedTag[0]}'.`)
    }
  });
}

module.exports = {
  handleDeleteTag,
}