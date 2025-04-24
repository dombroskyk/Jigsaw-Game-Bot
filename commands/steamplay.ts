import path from "node:path";
import { SlashCommandBuilder } from "discord.js";

const USER1_ARG_KEY = "user1";
const USER2_ARG_KEY = "user2";
const USER3_ARG_KEY = "user3";
const USER4_ARG_KEY = "user4";
const USER5_ARG_KEY = "user5";
const USER6_ARG_KEY = "user6";
const USER7_ARG_KEY = "user7";
const USER8_ARG_KEY = "user8";
const USER9_ARG_KEY = "user9";
const USER10_ARG_KEY = "user10";

export default {
  helpText: "",
	data: new SlashCommandBuilder()
    .setName(path.basename(__filename, ".ts"))
    .setDescription("Let Jigsaw suggest a Steam game for you to play!")
    .addBooleanOption(option =>
      option.setName("commononly")
            .setDescription("Only show games that all users have in their library?")
            .setRequired(true))
    .addUserOption(option => 
      option.setName(USER1_ARG_KEY)
            .setDescription("First user")
            .setRequired(true))
    .addUserOption(option => 
      option.setName(USER2_ARG_KEY)
            .setDescription("Second user")
            .setRequired(false))
    .addUserOption(option => 
      option.setName(USER3_ARG_KEY)
            .setDescription("Third user")
            .setRequired(false))
    .addUserOption(option => 
      option.setName(USER4_ARG_KEY)
            .setDescription("Fourth user")
            .setRequired(false))
    .addUserOption(option => 
      option.setName(USER5_ARG_KEY)
            .setDescription("Fifth user")
            .setRequired(false))
    .addUserOption(option => 
      option.setName(USER6_ARG_KEY)
            .setDescription("Sixth user")
            .setRequired(false))
    .addUserOption(option => 
      option.setName(USER7_ARG_KEY)
            .setDescription("Seventh user")
            .setRequired(false))
    .addUserOption(option => 
      option.setName(USER8_ARG_KEY)
            .setDescription("Eighth user")
            .setRequired(false))
    .addUserOption(option => 
      option.setName(USER9_ARG_KEY)
            .setDescription("Ninth user")
            .setRequired(false))
    .addUserOption(option => 
      option.setName(USER10_ARG_KEY)
            .setDescription("Tenth and final user")
            .setRequired(false)),
  
	async execute(interaction) {
    const user1 = interaction.options.getUser(USER1_ARG_KEY);
    const inputUsers = [
      interaction.options.getUser(USER1_ARG_KEY),
      interaction.options.getUser(USER2_ARG_KEY),
      interaction.options.getUser(USER3_ARG_KEY),
      interaction.options.getUser(USER4_ARG_KEY),
      interaction.options.getUser(USER5_ARG_KEY),
      interaction.options.getUser(USER6_ARG_KEY),
      interaction.options.getUser(USER7_ARG_KEY),
      interaction.options.getUser(USER8_ARG_KEY),
      interaction.options.getUser(USER9_ARG_KEY),
      interaction.options.getUser(USER10_ARG_KEY),
    ].filter(inputUser => inputUser !== null);

    // const steamUsers = await getSteamUsers();
    // let missingUsers:string[] = [];
    // const inputToRegistrationMapping = inputUsers.map(inputUser => {
    //   const foundSteamUser = steamUsers.find(steamUser => steamUser.discordId === inputUser.id) //?
    //   if (typeof foundSteamUser === "undefined") {
    //     missingUsers.push(inputUser.username);
    //   }

    //   return { inputUser: inputUser, foundSteamUser: foundSteamUser };
    // });

    // if (missingUsers.length) {
    //   interaction.reply(`User(s) ${missingUsers.join(",")} has/have not registered their Steam Id!`);
    //   return;
    // }

    // interaction.reply("Validated all users, compiling game lists...");

    // const user1SteamId = inputToRegistrationMapping.find(mapping => mapping.foundSteamUser?.steamId === inputUsers[0].id)?.foundSteamUser?.steamId;
    // // gather all game steam ids
    // //gather each games (can be combined with above?)
    // // merge lists
    // // pre-emptive api call for game data so you can get genre
    // // start a recco session
    
    // console.log(user1SteamId);
		// const user1OwnedGamesResponse = await axios
    //   .get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${user1SteamId}&format=json`);
    // //Me: 76561198056945193
    // //AJ: 76561198031566283
    // console.log(`statusCode: ${user1OwnedGamesResponse.status}`);
    // //statusCode === 503
    // //statusMessage === "Service Unavailable"
    // const user1OwnedGameIds = user1OwnedGamesResponse.data.response.games.map(game => game.appid);

    // const firstUserGameInfo = await Promise.all(user1OwnedGameIds.map(async user1OwnedGameId => { 
    //   let steamGameDetailResponse;
    //   try {
    //     steamGameDetailResponse = await axios.get(`https://store.steampowered.com/api/appdetails?key=${process.env.STEAM_API_KEY}&appids=${user1OwnedGameId}`);
    //   } catch {
    //     console.log(steamGameDetailResponse);
    //     return;
    //   }
    //   console.log(steamGameDetailResponse.status);
    //   if (steamGameDetailResponse.status !== 200) {
    //     return;
    //   }
    //   const gameIdKey = Object.keys(steamGameDetailResponse.data)[0];
    //   // console.log(gameIdKey);
    //   const dataForGame = steamGameDetailResponse.data[gameIdKey];
    //   // console.log(dataForGame);
    //   if ("success" in dataForGame && dataForGame.success === false) {
    //     // sometimes there's just a bad response for certain games
    //     return;
    //   }
    //   const gameName = dataForGame.data.name;
    //   const gameTags = dataForGame.data.genres.map(genre => genre.description);
    //   // console.log(steamGameDetailResponse.data[gameIdKey].data);
    //   console.log(`name: ${gameName}, tags: ${gameTags.join(",")}`);
    //   return { name: gameName, tags: gameTags };
    // }));

    // const filteredFirstUserGameInfo:IGame[] = firstUserGameInfo.filter(gameInfo => typeof gameInfo !== "undefined");
    // console.log(filteredFirstUserGameInfo);
    
    // for (var i = 0; i < filteredFirstUserGameInfo.length; i++) {
    //   const gameInfo:IGame = filteredFirstUserGameInfo[i];
    //   // console.log(`${gameInfo.name}: ${gameInfo.tags?.join(",")}`);
    // }
	}
};
