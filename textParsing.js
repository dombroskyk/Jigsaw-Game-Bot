

function getRawCommandArguments(messageContent, command) {
  const commandLength = command.length;
  const commandIndex = messageContent.toLowerCase().indexOf(command.toLowerCase());
  return messageContent.slice(commandIndex + commandLength);
}

module.exports = {
  getRawCommandArguments,
}