import { getTags, writeTags } from "../db/sqLiteDbLayer";

export function handleAddTag(msg, newTag) {
  addTag(msg, newTag, true);
}

export async function addTag (msg, newTag:string, replyDuplicates) {
  const existingTags = await getTags();
  const existingTagIndex = existingTags.findIndex((existingTag) => existingTag.name.toLowerCase() === newTag.toLowerCase());
  if (existingTagIndex !== -1) {
    if (replyDuplicates)
      msg.reply(`${newTag} already exists as a tag.`);
  }
  else {
    existingTags.push({ name: newTag });
    writeTags(existingTags);
    msg.reply(`Added '${newTag}' to tags.`);
  }
}

//todo: move addTag to its own module
//todo: make some sort of msg reply service to gather up all the text for a reply before sending
//todo: fuzzy matching