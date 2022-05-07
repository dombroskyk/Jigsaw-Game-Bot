

function getRawCommandArguments(messageContent, command)
{
  const commandLength = command.length;
  const commandIndex = messageContent.toLowerCase().indexOf(command.toLowerCase());
  return messageContent.slice(commandIndex + commandLength);
}

function getPlayerNumBounds(message)
{
  const messageContent = message.content.trim();
  if (!messageContent.includes('-'))
  {
    message.followUp("Invalid format supplied, expecting #-#");
    return {};
  }

  const playerSplits = messageContent.split("-");
  const leftNum = parseInt(playerSplits[0]);
  const rightNum = parseInt(playerSplits[1]);
  if (isNaN(leftNum) || isNaN(rightNum))
  {
    message.followUp("Invalid format, expecting numbers #-#");
    return {};
  }

  if (rightNum < leftNum)
    return { lowerBound: rightNum, upperBound: leftNum, };
  return { lowerBound: leftNum, upperBound: rightNum, };
}

function getTagsFromMessage(message)
{
  const messageContent = message.content.trim();
  const tagSplits = messageContent.split(",");
  const trimmedTags = tagSplits.map(tag => { return tag.trim() });

  return trimmedTags;
}

module.exports = {
  getRawCommandArguments,
  getPlayerNumBounds,
  getTagsFromMessage,
}