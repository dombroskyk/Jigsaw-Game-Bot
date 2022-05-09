const { getTags, writeTags } = require("../dbLayer.js");

function handleAddTag(msg, newTag) {
  addTag(msg, newTag, true);
}

function addTag (msg, newTag, replyDuplicates) {
  getTags().then(existingTags => {
    const existingTagIndex = existingTags.findIndex((existingTag) => existingTag.toLowerCase() === newTag.toLowerCase());
    if (existingTagIndex !== -1) {
      if (replyDuplicates)
        msg.reply(`${newTag} already exists as a tag.`);
    }
    else {
      existingTags.push(newTag);
      writeTags(existingTags);
      msg.reply(`Added '${newTag}' to tags.`);
    }
  });
}

//todo: move addTag to its own module
//todo: make some sort of msg reply service to gather up all the text for a reply before sending

module.exports = {
  handleAddTag,
  addTag,
}