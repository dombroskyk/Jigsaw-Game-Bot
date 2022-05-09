
function handleHelp(msg) {
  msg.reply("Available commands:\r\nplay a game\r\nlist games\r\nlist tags\r\nadd game <game>\r\nadd tag <tag>\r\ndelete game <game>\r\ndelete tag <tag>");
}

module.exports = {
  handleHelp,
}