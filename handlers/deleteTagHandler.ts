import { getTags, writeTags } from "../db/sqLiteDbLayer";

export async function handleDeleteTag (msg, tagToDelete:string) {
  const existingTags = await getTags()
  const tagToDeleteIndex = existingTags.findIndex(existingTag => existingTag.name.toLowerCase() === tagToDelete.toLowerCase());
  if (tagToDeleteIndex === -1) {
    msg.reply(`Tag ${tagToDelete} could not be found.`);
  } else {
    const deletedTag = existingTags.splice(tagToDeleteIndex, 1);
    writeTags(existingTags);

    msg.reply(`Deleted tag '${deletedTag[0]}'.`)
  }
}