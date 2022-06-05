const { gameToString } = require("./textHelpers/textFormatting.js");
const { MessageActionRow, MessageButton } = require("discord.js");

function formatGameSuggestion(game) {
  const gameRow = new MessageActionRow()
    .addComponents([
      new MessageButton()
        .setCustomId("YesGame")
        .setLabel("Let's play!")
        .setStyle("SUCCESS"),
      new MessageButton()
        .setCustomId("NoGame")
        .setLabel("Not this game")
        .setStyle("DANGER")
  ]);

  let tagRows = [];
  game.tags.forEach(tag => {
    const tagRow = new MessageActionRow()
      .addComponents([
        new MessageButton()
          .setCustomId(`${tag}_yes`)
          .setLabel(`Filter ${tag}`)
          .setStyle("PRIMARY"),
        new MessageButton()
          .setCustomId(`${tag}_no`)
          .setLabel(`Filter Out ${tag}`)
          .setStyle("DANGER")
    ]);
    tagRows.push(tagRow);
  });
  

  return { content: `How about '${gameToString(game)}'?`, components: [gameRow, ...tagRows] };
}

module.exports = {
  formatGameSuggestion,
}