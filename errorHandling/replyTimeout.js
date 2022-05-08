
function followUpTimeout(waitingMessage) {
  waitingMessage.followUp("Timeout - try again when ready");
}

module.exports = {
  followUpTimeout,
}