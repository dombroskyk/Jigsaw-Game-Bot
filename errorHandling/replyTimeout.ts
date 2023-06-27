
export function followUpTimeout(waitingMessage) {
  waitingMessage.followUp("Timeout - try again when ready");
}

export const handleCollectorError = (ex, messageToReply) => {
  console.log(ex);
  if (ex.message.search("time") !== -1) {
    messageToReply.reply("Sorry, we didn't receive input in time. Please start over if you wish to continue.");
  } else {
    messageToReply.reply("Sorry, we encountered a problem. Please start over if you wish to continue.");
  }
}