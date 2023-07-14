

export function getRawCommandArguments(messageContent, command) {
  const commandLength = command.length;
  const commandIndex = messageContent.toLowerCase().indexOf(command.toLowerCase());
  return messageContent.slice(commandIndex + commandLength).trim();
}

export function getPlayerNumBounds(message) {
  const messageContent:string = message.content.trim();
  if (!messageContent.includes('-')) {
    message.reply("Invalid format supplied, expecting #-#");
    return {};
  }

  const playerSplits = messageContent.split("-");
  const leftNum = parseInt(playerSplits[0]);
  const rightNum = parseInt(playerSplits[1]);
  if (isNaN(leftNum) || isNaN(rightNum)) {
    message.reply("Invalid format, expecting numbers #-#");
    return {};
  }

  if (rightNum < leftNum)
    return { lowerBound: rightNum, upperBound: leftNum, };
  return { lowerBound: leftNum, upperBound: rightNum, };
}

export function getTagsFromMessage(message):string[] {
  const messageContent:string = message.content.trim();
  const tagSplits:string[] = messageContent.split(",");
  const trimmedTags = tagSplits.map((tag:string) => tag.trim()).filter((tag:string) => tag.toLocaleLowerCase() !== "none");

  return trimmedTags;
}

export function getNumPlayersFromId(id:string): number {
  return parseInt(id.split("_")[0]);
}

export function getTagAndIntentionFromId(customId:string) {
  const splitCustomId = customId.trim().split("_");
  
  return { tag: splitCustomId[0], intention: splitCustomId[1]};
}
