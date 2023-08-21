import { Message, MessageFlags } from "discord.js";

export function followUpTimeout(waitingMessage) {
  waitingMessage.followUp("Timeout - try again when ready");
}

export const handleCollectorError = (ex: Error, messageToReply: Message) => {
  console.log(ex);
  if (ex.message.search("time") !== -1) {
    messageToReply.reply("Sorry, we didn't receive input in time. Please start over if you wish to continue.");
  } else {
    messageToReply.reply("Sorry, we encountered a problem. Please start over if you wish to continue.");
  }
}

export const handleSteamImportCollectorError = (ex, messageToReply: Message, gameId = 0) => {
  if ((typeof ex.size !== "undefined" && ex.size === 0) || ex.message.search("time") !== -1) {
    messageToReply.reply({ content: `Sorry, we didn't receive input in time. Please start over if you wish to continue. Provide id '${gameId}' to the gameId option of steamimport to pickup where you left off.`, options: { flags: MessageFlags.Ephemeral }});
  } else {
    messageToReply.reply({ content: `Sorry, we encountered a problem. Please start over if you wish to continue. Provide id '${gameId}' to the gameId option of steamimport to pickup where you left off.`, options: { flags: MessageFlags.Ephemeral }});
  }
}