import { gameToString } from "../textHelpers/textFormatting";
import { getGames } from "../db/sqLiteDbLayer";

export async function handleListGames(msg) {
  const games = await getGames();

  let gamesString = games.map(game => gameToString(game)).join("\n");
  if (!gamesString)
    gamesString = "No games stored... yet";

  //chunk it, 2k characters
  msg.reply(gamesString);
}