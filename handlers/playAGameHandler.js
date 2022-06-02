const { MessageActionRow, MessageButton } = require("discord.js");
const { getGames } = require("../db/dbLayer.js");
const { gameToString } = require("../textHelpers/textFormatting.js");
const { getNumPlayers } = require("../textHelpers/textParsing.js");
const { setFilter, startMessageContext, setGame, addGameFilter, getCurrentGame, setPlayerFilter, getCurrInteraction } = require("../messageContextHelper.js");

async function handlePlayAGame(msg) {
  startMessageContext(msg);
  msg.reply("So you want to play a game... How many people want to play?").then(async () => {
    
    const authorFilter = m => msg.author.id === m.author.id;
    const messages = await msg.channel.awaitMessages({ authorFilter, time: 60 * 1000, max: 1, errors: ["time"] });
    const numPlayerMessage = messages.first();
    
    const numPlayers = getNumPlayers(numPlayerMessage);
    if (numPlayers === 0) {
      numPlayerMessage.reply("No players? Too bad.");
      return;
    }

    const filter = setPlayerFilter(numPlayers);
    const games = await getGames(filter);
    const game = games[Math.floor(Math.random()*games.length)];
    
    const row = new MessageActionRow()
      .addComponents([
        new MessageButton()
          .setCustomId("YesGame")
          .setLabel("Let's play!")
          .setStyle("SUCCESS"),
        new MessageButton()
          .setCustomId("NoGame")
          .setLabel("Nah")
          .setStyle("DANGER")
    ]);

    setGame(game);
    msg.reply({ content: `How about ${gameToString(game)}?`, components: [row] });


    // const interactionFilter = i => {
    //   i.deferUpdate();
    //   return i.user.id === interaction.user.id;
    // };
    // msg.awaitMessageComponent({ filter, componentType: "BUTTON", time: 60 * 1000 }).then(interaction => console.log(interaction));

  //   const collector = msg.createMessageComponentCollector({ componentType: 'BUTTON', time: 60 * 1000, max: 1});

  //   collector.on('collect', i => {
  //     console.log(i);
  //   });

  //   collector.on('end', collected => {
  //     console.log(collected);
  //   });
  });
}

async function handleFilterGame() {
  const filter = addGameFilter(getCurrentGame().name);

  const games = await getGames(filter);
  const game = games[Math.floor(Math.random()*games.length)];
    
  const row = new MessageActionRow()
    .addComponents([
      new MessageButton()
        .setCustomId("YesGame")
        .setLabel("Let's play!")
        .setStyle("SUCCESS"),
      new MessageButton()
        .setCustomId("NoGame")
        .setLabel("Nah")
        .setStyle("DANGER")
  ]);

  setGame(game);

  const interaction = getCurrInteraction();
  interaction.reply({ content: `How about ${gameToString(game)}?`, components: [row] });
}

module.exports = {
  handlePlayAGame,
  handleFilterGame,
}