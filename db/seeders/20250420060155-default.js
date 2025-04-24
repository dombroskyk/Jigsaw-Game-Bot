'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Games', [
    {
      "id": 1,
      "name": "Half-Life",
      "lowerPlayerBound": 1,
      "upperPlayerBound": 1,
      "steamId": 70,
      "basicImported": 0,
      "createdAt": "2024-03-09 07:02:23.223 +00:00",
      "updatedAt": "2024-03-09 07:20:11.688 +00:00"
    },
    {
      "id": 2,
      "name": "Garry's Mod",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 4000,
      "basicImported": 0,
      "createdAt": "2024-03-09 07:02:23.695 +00:00",
      "updatedAt": "2024-03-09 07:33:06.709 +00:00"
    },
    {
      "id": 3,
      "name": "Warhammer 40,000: Dawn of War - Dark Crusade",
      "lowerPlayerBound": 1,
      "upperPlayerBound": 8,
      "steamId": 4580,
      "basicImported": 0,
      "createdAt": "2024-03-09 07:02:23.955 +00:00",
      "updatedAt": "2024-03-09 07:36:38.550 +00:00"
    },
    {
      "id": 4,
      "name": "Warhammer 40,000: Dawn of War II",
      "lowerPlayerBound": 1,
      "upperPlayerBound": 2,
      "steamId": 15620,
      "basicImported": 0,
      "createdAt": "2024-03-09 07:02:24.371 +00:00",
      "updatedAt": "2024-03-09 07:37:53.233 +00:00"
    },
    {
      "id": 5,
      "name": "STAR WARS Battlefront II (Classic, 2005)",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 6060,
      "basicImported": 0,
      "createdAt": "2024-03-09 07:02:24.647 +00:00",
      "updatedAt": "2024-03-09 07:39:38.469 +00:00"
    },
    {
      "id": 6,
      "name": "STAR WARS Starfighter",
      "lowerPlayerBound": 1,
      "upperPlayerBound": 4,
      "steamId": 32350,
      "basicImported": 0,
      "createdAt": "2024-03-09 07:02:24.898 +00:00",
      "updatedAt": "2024-03-09 07:41:27.030 +00:00"
    },
    {
      "id": 7,
      "name": "Company of Heroes - Legacy Edition",
      "lowerPlayerBound": 1,
      "upperPlayerBound": 8,
      "steamId": 4560,
      "basicImported": 0,
      "createdAt": "2024-03-09 07:02:25.170 +00:00",
      "updatedAt": "2024-03-09 07:47:41.702 +00:00"
    },
    {
      "id": 8,
      "name": "Company of Heroes: Opposing Fronts",
      "lowerPlayerBound": 1,
      "upperPlayerBound": 8,
      "steamId": 9340,
      "basicImported": 0,
      "createdAt": "2024-03-09 07:02:25.410 +00:00",
      "updatedAt": "2024-03-09 07:48:45.290 +00:00"
    },
    {
      "id": 9,
      "name": "Company of Heroes: Tales of Valor",
      "lowerPlayerBound": 1,
      "upperPlayerBound": 6,
      "steamId": 20540,
      "basicImported": 0,
      "createdAt": "2024-03-09 07:02:25.645 +00:00",
      "updatedAt": "2024-03-09 07:52:26.544 +00:00"
    },
    {
      "id": 10,
      "name": "Company of Heroes",
      "lowerPlayerBound": 1,
      "upperPlayerBound": 8,
      "steamId": 228200,
      "basicImported": 0,
      "createdAt": "2024-03-09 07:02:26.002 +00:00",
      "updatedAt": "2024-03-09 07:52:56.911 +00:00"
    },
    {
      "id": 11,
      "name": "STAR WARS Jedi Knight - Jedi Academy",
      "lowerPlayerBound": 1,
      "upperPlayerBound": 16,
      "steamId": 6020,
      "basicImported": 0,
      "createdAt": "2024-03-09 07:02:26.263 +00:00",
      "updatedAt": "2024-03-09 07:53:43.816 +00:00"
    },
    {
      "id": 12,
      "name": "LEGO Star Wars - The Complete Saga",
      "lowerPlayerBound": 1,
      "upperPlayerBound": 2,
      "steamId": 32440,
      "basicImported": 0,
      "createdAt": "2024-03-09 07:02:26.543 +00:00",
      "updatedAt": "2024-03-09 07:54:39.082 +00:00"
    },
    {
      "id": 13,
      "name": "Left 4 Dead 2",
      "lowerPlayerBound": 2,
      "upperPlayerBound": 4,
      "steamId": 550,
      "basicImported": 0,
      "createdAt": "2024-03-09 07:02:26.844 +00:00",
      "updatedAt": "2024-03-09 07:55:58.952 +00:00"
    },
    {
      "id": 14,
      "name": "Shatter",
      "lowerPlayerBound": 1,
      "upperPlayerBound": 1,
      "steamId": 20820,
      "basicImported": 0,
      "createdAt": "2024-03-09 07:02:27.108 +00:00",
      "updatedAt": "2024-03-09 07:56:28.934 +00:00"
    },
    {
      "id": 15,
      "name": "STAR WARS Empire at War - Gold Pack",
      "lowerPlayerBound": 1,
      "upperPlayerBound": 8,
      "steamId": 32470,
      "basicImported": 0,
      "createdAt": "2024-03-09 07:02:27.338 +00:00",
      "updatedAt": "2024-03-09 07:57:10.660 +00:00"
    },
    {
      "id": 16,
      "name": "Sid Meier's Civilization V",
      "lowerPlayerBound": 1,
      "upperPlayerBound": 12,
      "steamId": 8930,
      "basicImported": 0,
      "createdAt": "2024-03-09 07:02:27.643 +00:00",
      "updatedAt": "2024-03-09 07:59:10.931 +00:00"
    },
    {
      "id": 17,
      "name": "Warhammer 40,000: Dawn of War II: Retribution",
      "lowerPlayerBound": 1,
      "upperPlayerBound": 3,
      "steamId": 56400,
      "basicImported": 0,
      "createdAt": "2024-03-09 07:02:28.020 +00:00",
      "updatedAt": "2024-03-09 08:00:42.523 +00:00"
    },
    {
      "id": 18,
      "name": "Portal 2",
      "lowerPlayerBound": 1,
      "upperPlayerBound": 2,
      "steamId": 620,
      "basicImported": 0,
      "createdAt": "2024-03-09 07:02:28.323 +00:00",
      "updatedAt": "2024-03-09 08:01:06.932 +00:00"
    },
    {
      "id": 19,
      "name": "Sid Meier's Railroads!",
      "lowerPlayerBound": 1,
      "upperPlayerBound": 1,
      "steamId": 7600,
      "basicImported": 0,
      "createdAt": "2024-03-09 07:02:28.577 +00:00",
      "updatedAt": "2024-03-09 08:02:25.487 +00:00"
    },
    {
      "id": 20,
      "name": "Magic: The Gathering - Duels of the Planeswalkers 2012",
      "lowerPlayerBound": 1,
      "upperPlayerBound": 2,
      "steamId": 49470,
      "basicImported": 0,
      "createdAt": "2024-03-09 07:02:28.833 +00:00",
      "updatedAt": "2024-03-09 08:03:15.762 +00:00"
    },
    {
      "id": 21,
      "name": "Warhammer 40,000: Space Marine - Anniversary Edition",
      "lowerPlayerBound": 1,
      "upperPlayerBound": 16,
      "steamId": 55150,
      "basicImported": 0,
      "createdAt": "2024-03-09 07:02:29.291 +00:00",
      "updatedAt": "2024-03-09 08:04:16.550 +00:00"
    },
    {
      "id": 22,
      "name": "Serious Sam 3: BFE",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 41070,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:02:29.586 +00:00",
      "updatedAt": "2024-03-09 07:02:29.586 +00:00"
    },
    {
      "id": 23,
      "name": "Serious Sam Fusion 2017 (beta)",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 564310,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:02:29.954 +00:00",
      "updatedAt": "2024-03-09 07:02:29.954 +00:00"
    },
    {
      "id": 24,
      "name": "STAR WARS Knights of the Old Republic II - The Sith Lords",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 208580,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:02:30.281 +00:00",
      "updatedAt": "2024-03-09 07:02:30.281 +00:00"
    },
    {
      "id": 25,
      "name": "Sins of a Solar Empire: Rebellion",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 204880,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:02:30.610 +00:00",
      "updatedAt": "2024-03-09 07:02:30.610 +00:00"
    },
    {
      "id": 26,
      "name": "Warlock - Master of the Arcane",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 203630,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:02:30.893 +00:00",
      "updatedAt": "2024-03-09 07:02:30.893 +00:00"
    },
    {
      "id": 27,
      "name": "ORION: Prelude",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 104900,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:02:31.198 +00:00",
      "updatedAt": "2024-03-09 07:02:31.198 +00:00"
    },
    {
      "id": 28,
      "name": "Sid Meier's Civilization IV",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 3900,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:02:31.480 +00:00",
      "updatedAt": "2024-03-09 07:02:31.480 +00:00"
    },
    {
      "id": 29,
      "name": "Civilization IV: Warlords",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 3990,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:02:31.772 +00:00",
      "updatedAt": "2024-03-09 07:02:31.772 +00:00"
    },
    {
      "id": 31,
      "name": "Sid Meier's Civilization IV: Colonization",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 16810,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:02:32.424 +00:00",
      "updatedAt": "2024-03-09 07:02:32.424 +00:00"
    },
    {
      "id": 32,
      "name": "Sid Meier's Civilization IV",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 34440,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:02:32.805 +00:00",
      "updatedAt": "2024-03-09 07:02:32.805 +00:00"
    },
    {
      "id": 33,
      "name": "Civilization IV: Warlords",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 34450,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:02:33.078 +00:00",
      "updatedAt": "2024-03-09 07:02:33.078 +00:00"
    },
    {
      "id": 35,
      "name": "Civilization IV: Beyond the Sword",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 8800,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:10:49.498 +00:00",
      "updatedAt": "2024-03-09 07:10:49.498 +00:00"
    },
    {
      "id": 36,
      "name": "STAR WARS Knights of the Old Republic",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 32370,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:32.519 +00:00",
      "updatedAt": "2024-03-09 07:15:32.519 +00:00"
    },
    {
      "id": 37,
      "name": "Magic: The Gathering - Duels of the Planeswalkers 2013",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 97330,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:33.113 +00:00",
      "updatedAt": "2024-03-09 07:15:33.113 +00:00"
    },
    {
      "id": 38,
      "name": "DARK SOULS: Prepare To Die Edition",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 211420,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:33.384 +00:00",
      "updatedAt": "2024-03-09 07:15:33.384 +00:00"
    },
    {
      "id": 39,
      "name": "Awesomenauts - the 2D moba",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 204300,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:33.727 +00:00",
      "updatedAt": "2024-03-09 07:15:33.727 +00:00"
    },
    {
      "id": 40,
      "name": "Counter-Strike",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 10,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:34.016 +00:00",
      "updatedAt": "2024-03-09 07:15:34.016 +00:00"
    },
    {
      "id": 41,
      "name": "Counter-Strike: Condition Zero",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 80,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:34.262 +00:00",
      "updatedAt": "2024-03-09 07:15:34.262 +00:00"
    },
    {
      "id": 42,
      "name": "Counter-Strike: Source",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 240,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:35.028 +00:00",
      "updatedAt": "2024-03-09 07:15:35.028 +00:00"
    },
    {
      "id": 43,
      "name": "Counter-Strike 2",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 730,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:35.319 +00:00",
      "updatedAt": "2024-03-09 07:15:35.319 +00:00"
    },
    {
      "id": 44,
      "name": "Little Inferno",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 221260,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:35.715 +00:00",
      "updatedAt": "2024-03-09 07:15:35.715 +00:00"
    },
    {
      "id": 45,
      "name": "Torchlight II",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 200710,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:36.227 +00:00",
      "updatedAt": "2024-03-09 07:15:36.227 +00:00"
    },
    {
      "id": 46,
      "name": "XCOM: Enemy Unknown",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 200510,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:36.504 +00:00",
      "updatedAt": "2024-03-09 07:15:36.504 +00:00"
    },
    {
      "id": 47,
      "name": "Hotline Miami",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 219150,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:36.797 +00:00",
      "updatedAt": "2024-03-09 07:15:36.797 +00:00"
    },
    {
      "id": 48,
      "name": "Natural Selection 2",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 4920,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:37.110 +00:00",
      "updatedAt": "2024-03-09 07:15:37.110 +00:00"
    },
    {
      "id": 49,
      "name": "Tropico 4",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 57690,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:37.454 +00:00",
      "updatedAt": "2024-03-09 07:15:37.454 +00:00"
    },
    {
      "id": 50,
      "name": "Towns",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 221020,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:37.776 +00:00",
      "updatedAt": "2024-03-09 07:15:37.776 +00:00"
    },
    {
      "id": 51,
      "name": "Primordia",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 227000,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:38.072 +00:00",
      "updatedAt": "2024-03-09 07:15:38.072 +00:00"
    },
    {
      "id": 52,
      "name": "Orcs Must Die! 2",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 201790,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:38.487 +00:00",
      "updatedAt": "2024-03-09 07:15:38.487 +00:00"
    },
    {
      "id": 53,
      "name": "Warhammer 40,000: Dawn of War - Game of the Year Edition",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 4570,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:38.833 +00:00",
      "updatedAt": "2024-03-09 07:15:38.833 +00:00"
    },
    {
      "id": 54,
      "name": "Vindictus",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 212160,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:39.243 +00:00",
      "updatedAt": "2024-03-09 07:15:39.243 +00:00"
    },
    {
      "id": 55,
      "name": "Warframe",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 230410,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:39.551 +00:00",
      "updatedAt": "2024-03-09 07:15:39.551 +00:00"
    },
    {
      "id": 56,
      "name": "Age of Empires II (Retired)",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 221380,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:40.134 +00:00",
      "updatedAt": "2024-03-09 07:15:40.134 +00:00"
    },
    {
      "id": 57,
      "name": "Prison Architect",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 233450,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:40.476 +00:00",
      "updatedAt": "2024-03-09 07:15:40.476 +00:00"
    },
    {
      "id": 58,
      "name": "Sanctum 2",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 210770,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:40.850 +00:00",
      "updatedAt": "2024-03-09 07:15:40.850 +00:00"
    },
    {
      "id": 59,
      "name": "Sid Meier's Civilization III Complete",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 3910,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:41.145 +00:00",
      "updatedAt": "2024-03-09 07:15:41.145 +00:00"
    },
    {
      "id": 60,
      "name": "Company of Heroes 2",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 231430,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:41.583 +00:00",
      "updatedAt": "2024-03-09 07:15:41.583 +00:00"
    },
    {
      "id": 61,
      "name": "Rogue Legacy",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 241600,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:41.871 +00:00",
      "updatedAt": "2024-03-09 07:15:41.871 +00:00"
    },
    {
      "id": 62,
      "name": "Magic 2014  Duels of the Planeswalkers",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 213850,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:42.565 +00:00",
      "updatedAt": "2024-03-09 07:15:42.565 +00:00"
    },
    {
      "id": 63,
      "name": "Mortal Kombat Komplete Edition",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 237110,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:42.824 +00:00",
      "updatedAt": "2024-03-09 07:15:42.824 +00:00"
    },
    {
      "id": 64,
      "name": "Divinity: Dragon Commander",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 243950,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:43.167 +00:00",
      "updatedAt": "2024-03-09 07:15:43.167 +00:00"
    },
    {
      "id": 65,
      "name": "Artemis Spaceship Bridge Simulator",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 247350,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:43.512 +00:00",
      "updatedAt": "2024-03-09 07:15:43.512 +00:00"
    },
    {
      "id": 66,
      "name": "Sid Meiers Ace Patrol",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 244070,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:43.856 +00:00",
      "updatedAt": "2024-03-09 07:15:43.856 +00:00"
    },
    {
      "id": 67,
      "name": "PAYDAY 2",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 218620,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:44.406 +00:00",
      "updatedAt": "2024-03-09 07:15:44.406 +00:00"
    },
    {
      "id": 68,
      "name": "Blackguards",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 249650,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:44.753 +00:00",
      "updatedAt": "2024-03-09 07:15:44.753 +00:00"
    },
    {
      "id": 69,
      "name": "Damned",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 251170,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:45.113 +00:00",
      "updatedAt": "2024-03-09 07:15:45.113 +00:00"
    },
    {
      "id": 70,
      "name": "Lovers in a Dangerous Spacetime",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 252110,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:45.412 +00:00",
      "updatedAt": "2024-03-09 07:15:45.412 +00:00"
    },
    {
      "id": 71,
      "name": "YOU DON'T KNOW JACK Vol. 1 XL",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 252730,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:45.685 +00:00",
      "updatedAt": "2024-03-09 07:15:45.685 +00:00"
    },
    {
      "id": 72,
      "name": "Rocket League",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 252950,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:46.008 +00:00",
      "updatedAt": "2024-03-09 07:15:46.008 +00:00"
    },
    {
      "id": 73,
      "name": "Arma 3",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 107410,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:46.447 +00:00",
      "updatedAt": "2024-03-09 07:15:46.447 +00:00"
    },
    {
      "id": 74,
      "name": "Magicka",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 42910,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:46.826 +00:00",
      "updatedAt": "2024-03-09 07:15:46.826 +00:00"
    },
    {
      "id": 75,
      "name": "YOU DON'T KNOW JACK Vol. 2",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 259940,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:47.120 +00:00",
      "updatedAt": "2024-03-09 07:15:47.120 +00:00"
    },
    {
      "id": 76,
      "name": "YOU DON'T KNOW JACK Vol. 3",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 259960,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:47.377 +00:00",
      "updatedAt": "2024-03-09 07:15:47.377 +00:00"
    },
    {
      "id": 77,
      "name": "YOU DON'T KNOW JACK Vol. 4 The Ride",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 259980,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:47.645 +00:00",
      "updatedAt": "2024-03-09 07:15:47.645 +00:00"
    },
    {
      "id": 78,
      "name": "YOU DON'T KNOW JACK MOVIES",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 260000,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:47.954 +00:00",
      "updatedAt": "2024-03-09 07:15:47.954 +00:00"
    },
    {
      "id": 79,
      "name": "YOU DON'T KNOW JACK SPORTS",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 260020,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:48.286 +00:00",
      "updatedAt": "2024-03-09 07:15:48.286 +00:00"
    },
    {
      "id": 80,
      "name": "YOU DON'T KNOW JACK TELEVISION",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 260040,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:48.606 +00:00",
      "updatedAt": "2024-03-09 07:15:48.606 +00:00"
    },
    {
      "id": 81,
      "name": "YOU DON'T KNOW JACK HEADRUSH",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 260060,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:48.872 +00:00",
      "updatedAt": "2024-03-09 07:15:48.872 +00:00"
    },
    {
      "id": 82,
      "name": "Sid Meiers Ace Patrol: Pacific Skies",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 244090,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:49.231 +00:00",
      "updatedAt": "2024-03-09 07:15:49.231 +00:00"
    },
    {
      "id": 83,
      "name": "Contagion",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 238430,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:49.532 +00:00",
      "updatedAt": "2024-03-09 07:15:49.532 +00:00"
    },
    {
      "id": 84,
      "name": "Ori and the Blind Forest",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 261570,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:49.919 +00:00",
      "updatedAt": "2024-03-09 07:15:49.919 +00:00"
    },
    {
      "id": 85,
      "name": "FINAL FANTASY XIV Online",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 39210,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:50.242 +00:00",
      "updatedAt": "2024-03-09 07:15:50.242 +00:00"
    },
    {
      "id": 86,
      "name": "One Way Heroics",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 266210,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:50.589 +00:00",
      "updatedAt": "2024-03-09 07:15:50.589 +00:00"
    },
    {
      "id": 87,
      "name": "Heat Signature",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 268130,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:50.907 +00:00",
      "updatedAt": "2024-03-09 07:15:50.907 +00:00"
    },
    {
      "id": 88,
      "name": "Cuphead",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 268910,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:51.263 +00:00",
      "updatedAt": "2024-03-09 07:15:51.263 +00:00"
    },
    {
      "id": 89,
      "name": "Hero Siege",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 269210,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:51.676 +00:00",
      "updatedAt": "2024-03-09 07:15:51.676 +00:00"
    },
    {
      "id": 90,
      "name": "The Banner Saga",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 237990,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:52.007 +00:00",
      "updatedAt": "2024-03-09 07:15:52.007 +00:00"
    },
    {
      "id": 91,
      "name": "Insurgency",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 222880,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:52.326 +00:00",
      "updatedAt": "2024-03-09 07:15:52.326 +00:00"
    },
    {
      "id": 92,
      "name": "Halo: Spartan Assault",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 277430,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:52.652 +00:00",
      "updatedAt": "2024-03-09 07:15:52.652 +00:00"
    },
    {
      "id": 93,
      "name": "RIVE: Wreck, Hack, Die, Retry!",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 278100,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:53.020 +00:00",
      "updatedAt": "2024-03-09 07:15:53.020 +00:00"
    },
    {
      "id": 94,
      "name": "The Banner Saga 2",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 281640,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:53.306 +00:00",
      "updatedAt": "2024-03-09 07:15:53.306 +00:00"
    },
    {
      "id": 95,
      "name": "Stellaris",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 281990,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:53.820 +00:00",
      "updatedAt": "2024-03-09 07:15:53.820 +00:00"
    },
    {
      "id": 96,
      "name": "Sid Meier's Starships",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 282210,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:54.134 +00:00",
      "updatedAt": "2024-03-09 07:15:54.134 +00:00"
    },
    {
      "id": 97,
      "name": "Braveland",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 285800,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:54.466 +00:00",
      "updatedAt": "2024-03-09 07:15:54.466 +00:00"
    },
    {
      "id": 98,
      "name": "Pit People",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 291860,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:54.756 +00:00",
      "updatedAt": "2024-03-09 07:15:54.756 +00:00"
    },
    {
      "id": 99,
      "name": "Child of Light",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 256290,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:55.060 +00:00",
      "updatedAt": "2024-03-09 07:15:55.060 +00:00"
    },
    {
      "id": 100,
      "name": "Valkyria Chronicles",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 294860,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:55.355 +00:00",
      "updatedAt": "2024-03-09 07:15:55.355 +00:00"
    },
    {
      "id": 101,
      "name": "Tabletop Simulator",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 286160,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:55.693 +00:00",
      "updatedAt": "2024-03-09 07:15:55.693 +00:00"
    },
    {
      "id": 102,
      "name": "Never Alone (Kisima Ingitchuna)",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 295790,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:56.075 +00:00",
      "updatedAt": "2024-03-09 07:15:56.075 +00:00"
    },
    {
      "id": 103,
      "name": "Renowned Explorers: International Society",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 296970,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:56.417 +00:00",
      "updatedAt": "2024-03-09 07:15:56.417 +00:00"
    },
    {
      "id": 104,
      "name": "BattleBlock Theater",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 238460,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:56.805 +00:00",
      "updatedAt": "2024-03-09 07:15:56.805 +00:00"
    },
    {
      "id": 105,
      "name": "Transistor",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 237930,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:57.129 +00:00",
      "updatedAt": "2024-03-09 07:15:57.129 +00:00"
    },
    {
      "id": 106,
      "name": "Dragon Fin Soup",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 299600,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:57.454 +00:00",
      "updatedAt": "2024-03-09 07:15:57.454 +00:00"
    },
    {
      "id": 107,
      "name": "Call of Duty: Advanced Warfare - Gold Edition",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 209650,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:57.856 +00:00",
      "updatedAt": "2024-03-09 07:15:57.856 +00:00"
    },
    {
      "id": 108,
      "name": "Call of Duty: Advanced Warfare - Gold Edition",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 209660,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:58.152 +00:00",
      "updatedAt": "2024-03-09 07:15:58.152 +00:00"
    },
    {
      "id": 109,
      "name": "Gauntlet Slayer Edition",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 258970,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:58.479 +00:00",
      "updatedAt": "2024-03-09 07:15:58.479 +00:00"
    },
    {
      "id": 110,
      "name": "ibb & obb",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 95400,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:58.816 +00:00",
      "updatedAt": "2024-03-09 07:15:58.816 +00:00"
    },
    {
      "id": 111,
      "name": "Sniper Elite V2",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 63380,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:59.192 +00:00",
      "updatedAt": "2024-03-09 07:15:59.192 +00:00"
    },
    {
      "id": 112,
      "name": "Rampage Knights",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 314410,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:15:59.836 +00:00",
      "updatedAt": "2024-03-09 07:15:59.836 +00:00"
    },
    {
      "id": 113,
      "name": "Crypt of the NecroDancer",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 247080,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:00.204 +00:00",
      "updatedAt": "2024-03-09 07:16:00.204 +00:00"
    },
    {
      "id": 114,
      "name": "Blackguards 2",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 314830,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:00.589 +00:00",
      "updatedAt": "2024-03-09 07:16:00.589 +00:00"
    },
    {
      "id": 115,
      "name": "Mount Your Friends",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 296470,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:00.979 +00:00",
      "updatedAt": "2024-03-09 07:16:00.979 +00:00"
    },
    {
      "id": 116,
      "name": "Sid Meier's Civilization: Beyond Earth",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 65980,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:01.302 +00:00",
      "updatedAt": "2024-03-09 07:16:01.302 +00:00"
    },
    {
      "id": 117,
      "name": "Moon Hunters",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 320040,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:01.710 +00:00",
      "updatedAt": "2024-03-09 07:16:01.710 +00:00"
    },
    {
      "id": 118,
      "name": "Primal Carnage: Extinction",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 321360,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:02.013 +00:00",
      "updatedAt": "2024-03-09 07:16:02.013 +00:00"
    },
    {
      "id": 119,
      "name": "Frostpunk",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 323190,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:02.524 +00:00",
      "updatedAt": "2024-03-09 07:16:02.524 +00:00"
    },
    {
      "id": 120,
      "name": "Grow Home",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 323320,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:02.867 +00:00",
      "updatedAt": "2024-03-09 07:16:02.867 +00:00"
    },
    {
      "id": 121,
      "name": "Stronghold Crusader 2",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 232890,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:03.225 +00:00",
      "updatedAt": "2024-03-09 07:16:03.225 +00:00"
    },
    {
      "id": 122,
      "name": "Move or Die",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 323850,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:03.648 +00:00",
      "updatedAt": "2024-03-09 07:16:03.648 +00:00"
    },
    {
      "id": 123,
      "name": "The Jackbox Party Pack",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 331670,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:04.032 +00:00",
      "updatedAt": "2024-03-09 07:16:04.032 +00:00"
    },
    {
      "id": 124,
      "name": "The Crew",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 241560,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:04.433 +00:00",
      "updatedAt": "2024-03-09 07:16:04.433 +00:00"
    },
    {
      "id": 125,
      "name": "The Long Dark",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 305620,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:04.770 +00:00",
      "updatedAt": "2024-03-09 07:16:04.770 +00:00"
    },
    {
      "id": 126,
      "name": "GRAV",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 332500,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:05.072 +00:00",
      "updatedAt": "2024-03-09 07:16:05.072 +00:00"
    },
    {
      "id": 127,
      "name": "Dying Light",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 239140,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:05.521 +00:00",
      "updatedAt": "2024-03-09 07:16:05.521 +00:00"
    },
    {
      "id": 128,
      "name": "Mortal Kombat X",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 307780,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:06.120 +00:00",
      "updatedAt": "2024-03-09 07:16:06.120 +00:00"
    },
    {
      "id": 129,
      "name": "Hand of Fate",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 266510,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:06.614 +00:00",
      "updatedAt": "2024-03-09 07:16:06.614 +00:00"
    },
    {
      "id": 130,
      "name": "Quiplash",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 351510,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:06.927 +00:00",
      "updatedAt": "2024-03-09 07:16:06.927 +00:00"
    },
    {
      "id": 131,
      "name": "Cities: Skylines",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 255710,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:07.500 +00:00",
      "updatedAt": "2024-03-09 07:16:07.500 +00:00"
    },
    {
      "id": 132,
      "name": "Warhammer: End Times - Vermintide",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 235540,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:07.828 +00:00",
      "updatedAt": "2024-03-09 07:16:07.828 +00:00"
    },
    {
      "id": 133,
      "name": "The Elder Scrolls Online",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 306130,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:08.349 +00:00",
      "updatedAt": "2024-03-09 07:16:08.349 +00:00"
    },
    {
      "id": 134,
      "name": "Telepath Tactics",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 357940,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:08.713 +00:00",
      "updatedAt": "2024-03-09 07:16:08.713 +00:00"
    },
    {
      "id": 135,
      "name": "Telepath Tactics Liberated",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 1849820,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:09.059 +00:00",
      "updatedAt": "2024-03-09 07:16:09.059 +00:00"
    },
    {
      "id": 136,
      "name": "Shift Happens",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 359840,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:09.341 +00:00",
      "updatedAt": "2024-03-09 07:16:09.341 +00:00"
    },
    {
      "id": 137,
      "name": "Door Kickers",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 248610,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:09.769 +00:00",
      "updatedAt": "2024-03-09 07:16:09.769 +00:00"
    },
    {
      "id": 138,
      "name": "Hacknet",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 365450,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:10.158 +00:00",
      "updatedAt": "2024-03-09 07:16:10.158 +00:00"
    },
    {
      "id": 139,
      "name": "Poly Bridge",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 367450,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:10.492 +00:00",
      "updatedAt": "2024-03-09 07:16:10.492 +00:00"
    },
    {
      "id": 140,
      "name": "Gremlins, Inc.",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 369990,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:10.845 +00:00",
      "updatedAt": "2024-03-09 07:16:10.845 +00:00"
    },
    {
      "id": 141,
      "name": "Divinity: Original Sin (Classic)",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 230230,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:11.294 +00:00",
      "updatedAt": "2024-03-09 07:16:11.294 +00:00"
    },
    {
      "id": 142,
      "name": "Divinity: Original Sin - Enhanced Edition",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 373420,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:11.655 +00:00",
      "updatedAt": "2024-03-09 07:16:11.655 +00:00"
    },
    {
      "id": 143,
      "name": "Fallout 4",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 377160,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:11.984 +00:00",
      "updatedAt": "2024-03-09 07:16:11.984 +00:00"
    },
    {
      "id": 144,
      "name": "Ultimate Chicken Horse",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 386940,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:12.423 +00:00",
      "updatedAt": "2024-03-09 07:16:12.423 +00:00"
    },
    {
      "id": 145,
      "name": "Armello",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 290340,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:12.763 +00:00",
      "updatedAt": "2024-03-09 07:16:12.763 +00:00"
    },
    {
      "id": 146,
      "name": "Brawlhalla",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 291550,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:13.188 +00:00",
      "updatedAt": "2024-03-09 07:16:13.188 +00:00"
    },
    {
      "id": 147,
      "name": "The Jackbox Party Pack 2",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 397460,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:13.486 +00:00",
      "updatedAt": "2024-03-09 07:16:13.486 +00:00"
    },
    {
      "id": 148,
      "name": "One Piece Pirate Warriors 3",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 331600,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:13.889 +00:00",
      "updatedAt": "2024-03-09 07:16:13.889 +00:00"
    },
    {
      "id": 149,
      "name": "Refunct",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 406150,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:14.224 +00:00",
      "updatedAt": "2024-03-09 07:16:14.224 +00:00"
    },
    {
      "id": 150,
      "name": "HELLDIVERS Dive Harder Edition",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 394510,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:14.527 +00:00",
      "updatedAt": "2024-03-09 07:16:14.527 +00:00"
    },
    {
      "id": 151,
      "name": "Stardew Valley",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 413150,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:14.819 +00:00",
      "updatedAt": "2024-03-09 07:16:14.819 +00:00"
    },
    {
      "id": 152,
      "name": "XCOM 2",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 268500,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:15.200 +00:00",
      "updatedAt": "2024-03-09 07:16:15.200 +00:00"
    },
    {
      "id": 153,
      "name": "The Jackbox Party Pack 3",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 434170,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:15.852 +00:00",
      "updatedAt": "2024-03-09 07:16:15.852 +00:00"
    },
    {
      "id": 154,
      "name": "Tricky Towers",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 437920,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:16.254 +00:00",
      "updatedAt": "2024-03-09 07:16:16.254 +00:00"
    },
    {
      "id": 155,
      "name": "Total War: WARHAMMER",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 364360,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:16.635 +00:00",
      "updatedAt": "2024-03-09 07:16:16.635 +00:00"
    },
    {
      "id": 156,
      "name": "Niche - a genetics survival game",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 440650,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:16.924 +00:00",
      "updatedAt": "2024-03-09 07:16:16.924 +00:00"
    },
    {
      "id": 157,
      "name": "Mount Your Friends 3D: A Hard Man is Good to Climb",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 441010,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:17.285 +00:00",
      "updatedAt": "2024-03-09 07:16:17.285 +00:00"
    },
    {
      "id": 158,
      "name": "Drawful 2",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 442070,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:17.594 +00:00",
      "updatedAt": "2024-03-09 07:16:17.594 +00:00"
    },
    {
      "id": 159,
      "name": "This Is the Police",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 443810,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:17.954 +00:00",
      "updatedAt": "2024-03-09 07:16:17.954 +00:00"
    },
    {
      "id": 160,
      "name": "Avorion",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 445220,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:18.307 +00:00",
      "updatedAt": "2024-03-09 07:16:18.307 +00:00"
    },
    {
      "id": 161,
      "name": "Fibbage XL",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 448080,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:18.908 +00:00",
      "updatedAt": "2024-03-09 07:16:18.908 +00:00"
    },
    {
      "id": 162,
      "name": "Overcooked",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 448510,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:19.394 +00:00",
      "updatedAt": "2024-03-09 07:16:19.394 +00:00"
    },
    {
      "id": 163,
      "name": "No Man's Sky",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 275850,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:19.736 +00:00",
      "updatedAt": "2024-03-09 07:16:19.736 +00:00"
    },
    {
      "id": 164,
      "name": "Omensight: Definitive Edition",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 455820,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:20.042 +00:00",
      "updatedAt": "2024-03-09 07:16:20.042 +00:00"
    },
    {
      "id": 165,
      "name": "Zenge",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 461840,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:20.344 +00:00",
      "updatedAt": "2024-03-09 07:16:20.344 +00:00"
    },
    {
      "id": 166,
      "name": "SpeedRunners",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 207140,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:20.658 +00:00",
      "updatedAt": "2024-03-09 07:16:20.658 +00:00"
    },
    {
      "id": 167,
      "name": "Sid Meiers Civilization VI",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 289070,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:21.007 +00:00",
      "updatedAt": "2024-03-09 07:16:21.007 +00:00"
    },
    {
      "id": 168,
      "name": "Reigns",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 474750,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:21.441 +00:00",
      "updatedAt": "2024-03-09 07:16:21.441 +00:00"
    },
    {
      "id": 169,
      "name": "Eon Altar",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 382050,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:21.734 +00:00",
      "updatedAt": "2024-03-09 07:16:21.734 +00:00"
    },
    {
      "id": 170,
      "name": "Space Run Galaxy",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 355800,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:22.146 +00:00",
      "updatedAt": "2024-03-09 07:16:22.146 +00:00"
    },
    {
      "id": 171,
      "name": "GTFO",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 493520,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:22.437 +00:00",
      "updatedAt": "2024-03-09 07:16:22.437 +00:00"
    },
    {
      "id": 172,
      "name": "Morphblade",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 494720,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:22.694 +00:00",
      "updatedAt": "2024-03-09 07:16:22.694 +00:00"
    },
    {
      "id": 173,
      "name": "Foxhole",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 505460,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:23.013 +00:00",
      "updatedAt": "2024-03-09 07:16:23.013 +00:00"
    },
    {
      "id": 174,
      "name": "Flat Heroes",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 508790,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:23.346 +00:00",
      "updatedAt": "2024-03-09 07:16:23.346 +00:00"
    },
    {
      "id": 175,
      "name": "The Witcher 3: Wild Hunt",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 292030,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:23.801 +00:00",
      "updatedAt": "2024-03-09 07:16:23.801 +00:00"
    },
    {
      "id": 176,
      "name": "Satisfactory",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 526870,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:24.134 +00:00",
      "updatedAt": "2024-03-09 07:16:24.134 +00:00"
    },
    {
      "id": 177,
      "name": "For The King",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 527230,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:24.500 +00:00",
      "updatedAt": "2024-03-09 07:16:24.500 +00:00"
    },
    {
      "id": 178,
      "name": "Eternal Card Game",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 531640,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:24.785 +00:00",
      "updatedAt": "2024-03-09 07:16:24.785 +00:00"
    },
    {
      "id": 179,
      "name": "Bomber Crew",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 537800,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:25.144 +00:00",
      "updatedAt": "2024-03-09 07:16:25.144 +00:00"
    },
    {
      "id": 180,
      "name": "Rocksmith 2014 Edition - Remastered",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 221680,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:26.530 +00:00",
      "updatedAt": "2024-03-09 07:16:26.530 +00:00"
    },
    {
      "id": 181,
      "name": "Tyranny",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 362960,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:26.902 +00:00",
      "updatedAt": "2024-03-09 07:16:26.902 +00:00"
    },
    {
      "id": 182,
      "name": "Deep Rock Galactic",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 548430,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:27.307 +00:00",
      "updatedAt": "2024-03-09 07:16:27.307 +00:00"
    },
    {
      "id": 183,
      "name": "Planet Coaster",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 493340,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:27.656 +00:00",
      "updatedAt": "2024-03-09 07:16:27.656 +00:00"
    },
    {
      "id": 184,
      "name": "Tabletopia",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 402560,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:28.028 +00:00",
      "updatedAt": "2024-03-09 07:16:28.028 +00:00"
    },
    {
      "id": 185,
      "name": "Warstone TD",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 562500,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:28.394 +00:00",
      "updatedAt": "2024-03-09 07:16:28.394 +00:00"
    },
    {
      "id": 186,
      "name": "Soda Dungeon",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 564710,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:28.696 +00:00",
      "updatedAt": "2024-03-09 07:16:28.696 +00:00"
    },
    {
      "id": 187,
      "name": "Golf It!",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 571740,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:29.064 +00:00",
      "updatedAt": "2024-03-09 07:16:29.064 +00:00"
    },
    {
      "id": 188,
      "name": "PUBG: BATTLEGROUNDS",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 578080,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:29.456 +00:00",
      "updatedAt": "2024-03-09 07:16:29.456 +00:00"
    },
    {
      "id": 189,
      "name": "Shardbound",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 586030,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:29.932 +00:00",
      "updatedAt": "2024-03-09 07:16:29.932 +00:00"
    },
    {
      "id": 190,
      "name": "Parkasaurus",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 591460,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:30.238 +00:00",
      "updatedAt": "2024-03-09 07:16:30.238 +00:00"
    },
    {
      "id": 191,
      "name": "Tom Clancy's Ghost Recon Wildlands",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 460930,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:30.651 +00:00",
      "updatedAt": "2024-03-09 07:16:30.651 +00:00"
    },
    {
      "id": 192,
      "name": "Wulverblade",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 587180,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:31.055 +00:00",
      "updatedAt": "2024-03-09 07:16:31.055 +00:00"
    },
    {
      "id": 193,
      "name": "FAR: Lone Sails",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 609320,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:31.374 +00:00",
      "updatedAt": "2024-03-09 07:16:31.374 +00:00"
    },
    {
      "id": 194,
      "name": "The Jackbox Party Pack 4",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 610180,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:31.735 +00:00",
      "updatedAt": "2024-03-09 07:16:31.735 +00:00"
    },
    {
      "id": 195,
      "name": "Slay the Spire",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 646570,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:32.068 +00:00",
      "updatedAt": "2024-03-09 07:16:32.068 +00:00"
    },
    {
      "id": 196,
      "name": "Mechabellum",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 669330,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:32.467 +00:00",
      "updatedAt": "2024-03-09 07:16:32.467 +00:00"
    },
    {
      "id": 197,
      "name": "0N 0W",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 670750,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:32.808 +00:00",
      "updatedAt": "2024-03-09 07:16:32.808 +00:00"
    },
    {
      "id": 198,
      "name": "Stick Fight: The Game",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 674940,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:33.148 +00:00",
      "updatedAt": "2024-03-09 07:16:33.148 +00:00"
    },
    {
      "id": 199,
      "name": "GRIS",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 683320,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:33.498 +00:00",
      "updatedAt": "2024-03-09 07:16:33.498 +00:00"
    },
    {
      "id": 200,
      "name": "Foundation",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 690830,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:33.887 +00:00",
      "updatedAt": "2024-03-09 07:16:33.887 +00:00"
    },
    {
      "id": 201,
      "name": "Planet Zoo",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 703080,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:34.197 +00:00",
      "updatedAt": "2024-03-09 07:16:34.197 +00:00"
    },
    {
      "id": 202,
      "name": "Lonely Mountains: Downhill",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 711540,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:34.587 +00:00",
      "updatedAt": "2024-03-09 07:16:34.587 +00:00"
    },
    {
      "id": 203,
      "name": "Reigns: Her Majesty",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 717640,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:35.025 +00:00",
      "updatedAt": "2024-03-09 07:16:35.025 +00:00"
    },
    {
      "id": 204,
      "name": "Hob",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 404680,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:35.364 +00:00",
      "updatedAt": "2024-03-09 07:16:35.364 +00:00"
    },
    {
      "id": 205,
      "name": "Total War: WARHAMMER II",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 594570,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:35.681 +00:00",
      "updatedAt": "2024-03-09 07:16:35.681 +00:00"
    },
    {
      "id": 206,
      "name": "Black Future '88",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 751820,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:36.190 +00:00",
      "updatedAt": "2024-03-09 07:16:36.190 +00:00"
    },
    {
      "id": 207,
      "name": "Battlerite",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 504370,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:36.579 +00:00",
      "updatedAt": "2024-03-09 07:16:36.579 +00:00"
    },
    {
      "id": 208,
      "name": "Kingdom Come: Deliverance",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 379430,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:36.905 +00:00",
      "updatedAt": "2024-03-09 07:16:36.905 +00:00"
    },
    {
      "id": 209,
      "name": "Crayola Scoot",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 772530,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:37.263 +00:00",
      "updatedAt": "2024-03-09 07:16:37.263 +00:00"
    },
    {
      "id": 210,
      "name": "The Jackbox Party Pack 5",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 774461,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:37.611 +00:00",
      "updatedAt": "2024-03-09 07:16:37.611 +00:00"
    },
    {
      "id": 211,
      "name": "Longsword - Tabletop Tactics",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 428610,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:37.884 +00:00",
      "updatedAt": "2024-03-09 07:16:37.884 +00:00"
    },
    {
      "id": 212,
      "name": "WHAT THE GOLF?",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 785790,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:38.320 +00:00",
      "updatedAt": "2024-03-09 07:16:38.320 +00:00"
    },
    {
      "id": 213,
      "name": "Terraforming Mars",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 800270,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:38.678 +00:00",
      "updatedAt": "2024-03-09 07:16:38.678 +00:00"
    },
    {
      "id": 214,
      "name": "Cortex Command",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 209670,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:38.944 +00:00",
      "updatedAt": "2024-03-09 07:16:38.944 +00:00"
    },
    {
      "id": 215,
      "name": "Sentinels of Freedom",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 812870,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:39.354 +00:00",
      "updatedAt": "2024-03-09 07:16:39.354 +00:00"
    },
    {
      "id": 216,
      "name": "Realm Royale Reforged",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 813820,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:39.708 +00:00",
      "updatedAt": "2024-03-09 07:16:39.708 +00:00"
    },
    {
      "id": 217,
      "name": "Totally Accurate Battlegrounds",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 823130,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:40.208 +00:00",
      "updatedAt": "2024-03-09 07:16:40.208 +00:00"
    },
    {
      "id": 218,
      "name": "Iron Harvest",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 826630,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:40.551 +00:00",
      "updatedAt": "2024-03-09 07:16:40.551 +00:00"
    },
    {
      "id": 219,
      "name": "Circle Empires",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 834740,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:40.864 +00:00",
      "updatedAt": "2024-03-09 07:16:40.864 +00:00"
    },
    {
      "id": 220,
      "name": "Warhammer: Vermintide 2",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 552500,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:41.216 +00:00",
      "updatedAt": "2024-03-09 07:16:41.216 +00:00"
    },
    {
      "id": 221,
      "name": "Untitled Goose Game",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 837470,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:41.484 +00:00",
      "updatedAt": "2024-03-09 07:16:41.484 +00:00"
    },
    {
      "id": 222,
      "name": "You Suck at Parking - Complete Edition",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 837880,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:41.795 +00:00",
      "updatedAt": "2024-03-09 07:16:41.795 +00:00"
    },
    {
      "id": 223,
      "name": "Tribes of Midgard",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 858820,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:42.224 +00:00",
      "updatedAt": "2024-03-09 07:16:42.224 +00:00"
    },
    {
      "id": 224,
      "name": "Overcooked! 2",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 728880,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:42.641 +00:00",
      "updatedAt": "2024-03-09 07:16:42.641 +00:00"
    },
    {
      "id": 225,
      "name": "Valheim",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 892970,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:42.964 +00:00",
      "updatedAt": "2024-03-09 07:16:42.964 +00:00"
    },
    {
      "id": 226,
      "name": "Project Warlock",
      "lowerPlayerBound": 1,
      "upperPlayerBound": null,
      "steamId": 893680,
      "basicImported": 1,
      "createdAt": "2024-03-09 07:16:43.266 +00:00",
      "updatedAt": "2024-03-09 07:16:43.266 +00:00"
    }
  ]);

  await queryInterface.bulkInsert('Tags', [
    {
      "id": 1,
      "name": "Action",
      "createdAt": "2024-03-09 07:02:23.197 +00:00",
      "updatedAt": "2024-03-09 07:02:23.197 +00:00"
    },
    {
      "id": 2,
      "name": "Casual",
      "createdAt": "2024-03-09 07:02:23.525 +00:00",
      "updatedAt": "2024-03-09 07:02:23.525 +00:00"
    },
    {
      "id": 3,
      "name": "Indie",
      "createdAt": "2024-03-09 07:02:23.547 +00:00",
      "updatedAt": "2024-03-09 07:02:23.547 +00:00"
    },
    {
      "id": 4,
      "name": "Simulation",
      "createdAt": "2024-03-09 07:02:23.591 +00:00",
      "updatedAt": "2024-03-09 07:02:23.591 +00:00"
    },
    {
      "id": 5,
      "name": "Strategy",
      "createdAt": "2024-03-09 07:02:23.939 +00:00",
      "updatedAt": "2024-03-09 07:02:23.939 +00:00"
    },
    {
      "id": 6,
      "name": "Adventure",
      "createdAt": "2024-03-09 07:02:26.524 +00:00",
      "updatedAt": "2024-03-09 07:02:26.524 +00:00"
    },
    {
      "id": 7,
      "name": "RPG",
      "createdAt": "2024-03-09 07:02:30.227 +00:00",
      "updatedAt": "2024-03-09 07:02:30.227 +00:00"
    },
    {
      "id": 8,
      "name": "Free to Play",
      "createdAt": "2024-03-09 07:15:33.660 +00:00",
      "updatedAt": "2024-03-09 07:15:33.660 +00:00"
    },
    {
      "id": 9,
      "name": "Massively Multiplayer",
      "createdAt": "2024-03-09 07:15:39.214 +00:00",
      "updatedAt": "2024-03-09 07:15:39.214 +00:00"
    },
    {
      "id": 10,
      "name": "Racing",
      "createdAt": "2024-03-09 07:15:45.971 +00:00",
      "updatedAt": "2024-03-09 07:15:45.971 +00:00"
    },
    {
      "id": 11,
      "name": "Sports",
      "createdAt": "2024-03-09 07:15:45.984 +00:00",
      "updatedAt": "2024-03-09 07:15:45.984 +00:00"
    },
    {
      "id": 12,
      "name": "Early Access",
      "createdAt": "2024-03-09 07:16:05.043 +00:00",
      "updatedAt": "2024-03-09 07:16:05.043 +00:00"
    },
    {
      "id": 13,
      "name": "Party",
      "createdAt": "2024-03-09 07:21:21.180 +00:00",
      "updatedAt": "2024-03-09 07:21:21.180 +00:00"
    },
    {
      "id": 14,
      "name": "Warhammer",
      "createdAt": "2024-03-09 07:36:38.408 +00:00",
      "updatedAt": "2024-03-09 07:36:38.408 +00:00"
    },
    {
      "id": 15,
      "name": "RTS",
      "createdAt": "2024-03-09 07:36:38.434 +00:00",
      "updatedAt": "2024-03-09 07:36:38.434 +00:00"
    },
    {
      "id": 16,
      "name": "RTW",
      "createdAt": "2024-03-09 07:37:53.155 +00:00",
      "updatedAt": "2024-03-09 07:37:53.155 +00:00"
    },
    {
      "id": 17,
      "name": "Shooter",
      "createdAt": "2024-03-09 07:39:38.377 +00:00",
      "updatedAt": "2024-03-09 07:39:38.377 +00:00"
    },
    {
      "id": 18,
      "name": "Star Wars",
      "createdAt": "2024-03-09 07:39:38.400 +00:00",
      "updatedAt": "2024-03-09 07:39:38.400 +00:00"
    },
    {
      "id": 19,
      "name": "Flight Simulator",
      "createdAt": "2024-03-09 07:45:25.594 +00:00",
      "updatedAt": "2024-03-09 07:45:25.594 +00:00"
    },
    {
      "id": 20,
      "name": "WW2",
      "createdAt": "2024-03-09 07:47:41.593 +00:00",
      "updatedAt": "2024-03-09 07:47:41.593 +00:00"
    },
    {
      "id": 21,
      "name": "LEGO",
      "createdAt": "2024-03-09 07:54:38.926 +00:00",
      "updatedAt": "2024-03-09 07:54:38.926 +00:00"
    },
    {
      "id": 22,
      "name": "Co-op",
      "createdAt": "2024-03-09 07:54:38.946 +00:00",
      "updatedAt": "2024-03-09 07:54:38.946 +00:00"
    },
    {
      "id": 23,
      "name": "Survival",
      "createdAt": "2024-03-09 07:55:58.800 +00:00",
      "updatedAt": "2024-03-09 07:55:58.800 +00:00"
    },
    {
      "id": 24,
      "name": "Zombies",
      "createdAt": "2024-03-09 07:55:58.819 +00:00",
      "updatedAt": "2024-03-09 07:55:58.819 +00:00"
    },
    {
      "id": 25,
      "name": "Turn Based",
      "createdAt": "2024-03-09 07:59:10.766 +00:00",
      "updatedAt": "2024-03-09 07:59:10.766 +00:00"
    },
    {
      "id": 26,
      "name": "Civilization",
      "createdAt": "2024-03-09 07:59:10.786 +00:00",
      "updatedAt": "2024-03-09 07:59:10.786 +00:00"
    },
    {
      "id": 27,
      "name": "Board Game",
      "createdAt": "2024-03-09 07:59:10.863 +00:00",
      "updatedAt": "2024-03-09 07:59:10.863 +00:00"
    },
    {
      "id": 28,
      "name": "Puzzle",
      "createdAt": "2024-03-09 08:01:06.791 +00:00",
      "updatedAt": "2024-03-09 08:01:06.791 +00:00"
    },
    {
      "id": 29,
      "name": "Funny",
      "createdAt": "2024-03-09 08:01:06.806 +00:00",
      "updatedAt": "2024-03-09 08:01:06.806 +00:00"
    },
    {
      "id": 30,
      "name": "Management",
      "createdAt": "2024-03-09 08:02:25.327 +00:00",
      "updatedAt": "2024-03-09 08:02:25.327 +00:00"
    },
    {
      "id": 31,
      "name": "Trains",
      "createdAt": "2024-03-09 08:02:25.376 +00:00",
      "updatedAt": "2024-03-09 08:02:25.376 +00:00"
    },
    {
      "id": 32,
      "name": "MTG",
      "createdAt": "2024-03-09 08:03:15.617 +00:00",
      "updatedAt": "2024-03-09 08:03:15.617 +00:00"
    },
    {
      "id": 33,
      "name": "Card",
      "createdAt": "2024-03-09 08:03:15.665 +00:00",
      "updatedAt": "2024-03-09 08:03:15.665 +00:00"
    },
    {
      "id": 34,
      "name": "TPS",
      "createdAt": "2024-03-09 08:04:16.487 +00:00",
      "updatedAt": "2024-03-09 08:04:16.487 +00:00"
    }
  ]);
  await queryInterface.bulkInsert('UserPlatformMappings', [{"id":"233376573514842112","steamId":"76561198056945193","createdAt":"2024-03-09 06:57:56.701 +00:00","updatedAt":"2024-03-09 06:57:56.701 +00:00"}]);
// tags
// Executing (default): select * from tags
// [,{}]
// games_tags
// Executing (default): select * from Games_Tags
// [[{"createdAt":"2024-03-09 07:02:23.298 +00:00","updatedAt":"2024-03-09 07:02:23.298 +00:00","TagId":1,"GameId":1},{"createdAt":"2024-03-09 07:02:23.716 +00:00","updatedAt":"2024-03-09 07:02:23.716 +00:00","TagId":2,"GameId":2},{"createdAt":"2024-03-09 07:02:23.716 +00:00","updatedAt":"2024-03-09 07:02:23.716 +00:00","TagId":3,"GameId":2},{"createdAt":"2024-03-09 07:02:23.716 +00:00","updatedAt":"2024-03-09 07:02:23.716 +00:00","TagId":4,"GameId":2},{"createdAt":"2024-03-09 07:02:24.025 +00:00","updatedAt":"2024-03-09 07:02:24.025 +00:00","TagId":5,"GameId":3},{"createdAt":"2024-03-09 07:02:24.386 +00:00","updatedAt":"2024-03-09 07:02:24.386 +00:00","TagId":5,"GameId":4},{"createdAt":"2024-03-09 07:02:24.660 +00:00","updatedAt":"2024-03-09 07:02:24.660 +00:00","TagId":1,"GameId":5},{"createdAt":"2024-03-09 07:02:24.912 +00:00","updatedAt":"2024-03-09 07:02:24.912 +00:00","TagId":1,"GameId":6},{"createdAt":"2024-03-09 07:02:24.912 +00:00","updatedAt":"2024-03-09 07:02:24.912 +00:00","TagId":4,"GameId":6},{"createdAt":"2024-03-09 07:02:25.183 +00:00","updatedAt":"2024-03-09 07:02:25.183 +00:00","TagId":1,"GameId":7},{"createdAt":"2024-03-09 07:02:25.183 +00:00","updatedAt":"2024-03-09 07:02:25.183 +00:00","TagId":5,"GameId":7},{"createdAt":"2024-03-09 07:02:25.428 +00:00","updatedAt":"2024-03-09 07:02:25.428 +00:00","TagId":1,"GameId":8},{"createdAt":"2024-03-09 07:02:25.428 +00:00","updatedAt":"2024-03-09 07:02:25.428 +00:00","TagId":5,"GameId":8},{"createdAt":"2024-03-09 07:02:25.705 +00:00","updatedAt":"2024-03-09 07:02:25.705 +00:00","TagId":5,"GameId":9},{"createdAt":"2024-03-09 07:02:26.039 +00:00","updatedAt":"2024-03-09 07:02:26.039 +00:00","TagId":1,"GameId":10},{"createdAt":"2024-03-09 07:02:26.039 +00:00","updatedAt":"2024-03-09 07:02:26.039 +00:00","TagId":5,"GameId":10},{"createdAt":"2024-03-09 07:02:26.276 +00:00","updatedAt":"2024-03-09 07:02:26.276 +00:00","TagId":1,"GameId":11},{"createdAt":"2024-03-09 07:02:26.561 +00:00","updatedAt":"2024-03-09 07:02:26.561 +00:00","TagId":6,"GameId":12},{"createdAt":"2024-03-09 07:02:26.877 +00:00","updatedAt":"2024-03-09 07:02:26.877 +00:00","TagId":1,"GameId":13},{"createdAt":"2024-03-09 07:02:27.127 +00:00","updatedAt":"2024-03-09 07:02:27.127 +00:00","TagId":1,"GameId":14},{"createdAt":"2024-03-09 07:02:27.127 +00:00","updatedAt":"2024-03-09 07:02:27.127 +00:00","TagId":3,"GameId":14},{"createdAt":"2024-03-09 07:02:27.400 +00:00","updatedAt":"2024-03-09 07:02:27.400 +00:00","TagId":5,"GameId":15},{"createdAt":"2024-03-09 07:02:27.690 +00:00","updatedAt":"2024-03-09 07:02:27.690 +00:00","TagId":5,"GameId":16},{"createdAt":"2024-03-09 07:02:28.033 +00:00","updatedAt":"2024-03-09 07:02:28.033 +00:00","TagId":5,"GameId":17},{"createdAt":"2024-03-09 07:02:28.336 +00:00","updatedAt":"2024-03-09 07:02:28.336 +00:00","TagId":1,"GameId":18},{"createdAt":"2024-03-09 07:02:28.336 +00:00","updatedAt":"2024-03-09 07:02:28.336 +00:00","TagId":6,"GameId":18},{"createdAt":"2024-03-09 07:02:28.593 +00:00","updatedAt":"2024-03-09 07:02:28.593 +00:00","TagId":5,"GameId":19},{"createdAt":"2024-03-09 07:02:28.846 +00:00","updatedAt":"2024-03-09 07:02:28.846 +00:00","TagId":5,"GameId":20},{"createdAt":"2024-03-09 07:02:29.322 +00:00","updatedAt":"2024-03-09 07:02:29.322 +00:00","TagId":1,"GameId":21},{"createdAt":"2024-03-09 07:02:29.629 +00:00","updatedAt":"2024-03-09 07:02:29.629 +00:00","TagId":1,"GameId":22},{"createdAt":"2024-03-09 07:02:29.629 +00:00","updatedAt":"2024-03-09 07:02:29.629 +00:00","TagId":3,"GameId":22},{"createdAt":"2024-03-09 07:02:29.979 +00:00","updatedAt":"2024-03-09 07:02:29.979 +00:00","TagId":1,"GameId":23},{"createdAt":"2024-03-09 07:02:29.979 +00:00","updatedAt":"2024-03-09 07:02:29.979 +00:00","TagId":3,"GameId":23},{"createdAt":"2024-03-09 07:02:30.325 +00:00","updatedAt":"2024-03-09 07:02:30.325 +00:00","TagId":7,"GameId":24},{"createdAt":"2024-03-09 07:02:30.633 +00:00","updatedAt":"2024-03-09 07:02:30.633 +00:00","TagId":1,"GameId":25},{"createdAt":"2024-03-09 07:02:30.633 +00:00","updatedAt":"2024-03-09 07:02:30.633 +00:00","TagId":3,"GameId":25},{"createdAt":"2024-03-09 07:02:30.633 +00:00","updatedAt":"2024-03-09 07:02:30.633 +00:00","TagId":4,"GameId":25},{"createdAt":"2024-03-09 07:02:30.633 +00:00","updatedAt":"2024-03-09 07:02:30.633 +00:00","TagId":5,"GameId":25},{"createdAt":"2024-03-09 07:02:30.910 +00:00","updatedAt":"2024-03-09 07:02:30.910 +00:00","TagId":5,"GameId":26},{"createdAt":"2024-03-09 07:02:31.267 +00:00","updatedAt":"2024-03-09 07:02:31.267 +00:00","TagId":1,"GameId":27},{"createdAt":"2024-03-09 07:02:31.267 +00:00","updatedAt":"2024-03-09 07:02:31.267 +00:00","TagId":6,"GameId":27},{"createdAt":"2024-03-09 07:02:31.267 +00:00","updatedAt":"2024-03-09 07:02:31.267 +00:00","TagId":3,"GameId":27},{"createdAt":"2024-03-09 07:02:31.267 +00:00","updatedAt":"2024-03-09 07:02:31.267 +00:00","TagId":7,"GameId":27},{"createdAt":"2024-03-09 07:02:31.508 +00:00","updatedAt":"2024-03-09 07:02:31.508 +00:00","TagId":5,"GameId":28},{"createdAt":"2024-03-09 07:02:31.799 +00:00","updatedAt":"2024-03-09 07:02:31.799 +00:00","TagId":5,"GameId":29},{"createdAt":"2024-03-09 07:02:32.451 +00:00","updatedAt":"2024-03-09 07:02:32.451 +00:00","TagId":5,"GameId":31},{"createdAt":"2024-03-09 07:02:32.833 +00:00","updatedAt":"2024-03-09 07:02:32.833 +00:00","TagId":5,"GameId":32},{"createdAt":"2024-03-09 07:02:33.104 +00:00","updatedAt":"2024-03-09 07:02:33.104 +00:00","TagId":5,"GameId":33},{"createdAt":"2024-03-09 07:10:49.513 +00:00","updatedAt":"2024-03-09 07:10:49.513 +00:00","TagId":5,"GameId":35},{"createdAt":"2024-03-09 07:15:32.546 +00:00","updatedAt":"2024-03-09 07:15:32.546 +00:00","TagId":6,"GameId":36},{"createdAt":"2024-03-09 07:15:32.546 +00:00","updatedAt":"2024-03-09 07:15:32.546 +00:00","TagId":7,"GameId":36},{"createdAt":"2024-03-09 07:15:33.133 +00:00","updatedAt":"2024-03-09 07:15:33.133 +00:00","TagId":5,"GameId":37},{"createdAt":"2024-03-09 07:15:33.409 +00:00","updatedAt":"2024-03-09 07:15:33.409 +00:00","TagId":1,"GameId":38},{"createdAt":"2024-03-09 07:15:33.409 +00:00","updatedAt":"2024-03-09 07:15:33.409 +00:00","TagId":7,"GameId":38},{"createdAt":"2024-03-09 07:15:33.745 +00:00","updatedAt":"2024-03-09 07:15:33.745 +00:00","TagId":1,"GameId":39},{"createdAt":"2024-03-09 07:15:33.745 +00:00","updatedAt":"2024-03-09 07:15:33.745 +00:00","TagId":8,"GameId":39},{"createdAt":"2024-03-09 07:15:33.745 +00:00","updatedAt":"2024-03-09 07:15:33.745 +00:00","TagId":3,"GameId":39},{"createdAt":"2024-03-09 07:15:33.745 +00:00","updatedAt":"2024-03-09 07:15:33.745 +00:00","TagId":5,"GameId":39},{"createdAt":"2024-03-09 07:15:34.033 +00:00","updatedAt":"2024-03-09 07:15:34.033 +00:00","TagId":1,"GameId":40},{"createdAt":"2024-03-09 07:15:34.324 +00:00","updatedAt":"2024-03-09 07:15:34.324 +00:00","TagId":1,"GameId":41},{"createdAt":"2024-03-09 07:15:35.043 +00:00","updatedAt":"2024-03-09 07:15:35.043 +00:00","TagId":1,"GameId":42},{"createdAt":"2024-03-09 07:15:35.334 +00:00","updatedAt":"2024-03-09 07:15:35.334 +00:00","TagId":1,"GameId":43},{"createdAt":"2024-03-09 07:15:35.334 +00:00","updatedAt":"2024-03-09 07:15:35.334 +00:00","TagId":8,"GameId":43},{"createdAt":"2024-03-09 07:15:35.729 +00:00","updatedAt":"2024-03-09 07:15:35.729 +00:00","TagId":6,"GameId":44},{"createdAt":"2024-03-09 07:15:35.729 +00:00","updatedAt":"2024-03-09 07:15:35.729 +00:00","TagId":2,"GameId":44},{"createdAt":"2024-03-09 07:15:35.729 +00:00","updatedAt":"2024-03-09 07:15:35.729 +00:00","TagId":3,"GameId":44},{"createdAt":"2024-03-09 07:15:36.268 +00:00","updatedAt":"2024-03-09 07:15:36.268 +00:00","TagId":1,"GameId":45},{"createdAt":"2024-03-09 07:15:36.268 +00:00","updatedAt":"2024-03-09 07:15:36.268 +00:00","TagId":6,"GameId":45},{"createdAt":"2024-03-09 07:15:36.268 +00:00","updatedAt":"2024-03-09 07:15:36.268 +00:00","TagId":3,"GameId":45},{"createdAt":"2024-03-09 07:15:36.268 +00:00","updatedAt":"2024-03-09 07:15:36.268 +00:00","TagId":7,"GameId":45},{"createdAt":"2024-03-09 07:15:36.522 +00:00","updatedAt":"2024-03-09 07:15:36.522 +00:00","TagId":5,"GameId":46},{"createdAt":"2024-03-09 07:15:36.824 +00:00","updatedAt":"2024-03-09 07:15:36.824 +00:00","TagId":1,"GameId":47},{"createdAt":"2024-03-09 07:15:36.824 +00:00","updatedAt":"2024-03-09 07:15:36.824 +00:00","TagId":3,"GameId":47},{"createdAt":"2024-03-09 07:15:37.128 +00:00","updatedAt":"2024-03-09 07:15:37.128 +00:00","TagId":1,"GameId":48},{"createdAt":"2024-03-09 07:15:37.128 +00:00","updatedAt":"2024-03-09 07:15:37.128 +00:00","TagId":3,"GameId":48},{"createdAt":"2024-03-09 07:15:37.128 +00:00","updatedAt":"2024-03-09 07:15:37.128 +00:00","TagId":5,"GameId":48},{"createdAt":"2024-03-09 07:15:37.526 +00:00","updatedAt":"2024-03-09 07:15:37.526 +00:00","TagId":4,"GameId":49},{"createdAt":"2024-03-09 07:15:37.526 +00:00","updatedAt":"2024-03-09 07:15:37.526 +00:00","TagId":5,"GameId":49},{"createdAt":"2024-03-09 07:15:37.793 +00:00","updatedAt":"2024-03-09 07:15:37.793 +00:00","TagId":3,"GameId":50},{"createdAt":"2024-03-09 07:15:37.793 +00:00","updatedAt":"2024-03-09 07:15:37.793 +00:00","TagId":7,"GameId":50},{"createdAt":"2024-03-09 07:15:37.793 +00:00","updatedAt":"2024-03-09 07:15:37.793 +00:00","TagId":4,"GameId":50},{"createdAt":"2024-03-09 07:15:37.793 +00:00","updatedAt":"2024-03-09 07:15:37.793 +00:00","TagId":5,"GameId":50},{"createdAt":"2024-03-09 07:15:38.091 +00:00","updatedAt":"2024-03-09 07:15:38.091 +00:00","TagId":6,"GameId":51},{"createdAt":"2024-03-09 07:15:38.091 +00:00","updatedAt":"2024-03-09 07:15:38.091 +00:00","TagId":3,"GameId":51},{"createdAt":"2024-03-09 07:15:38.506 +00:00","updatedAt":"2024-03-09 07:15:38.506 +00:00","TagId":1,"GameId":52},{"createdAt":"2024-03-09 07:15:38.506 +00:00","updatedAt":"2024-03-09 07:15:38.506 +00:00","TagId":6,"GameId":52},{"createdAt":"2024-03-09 07:15:38.506 +00:00","updatedAt":"2024-03-09 07:15:38.506 +00:00","TagId":3,"GameId":52},{"createdAt":"2024-03-09 07:15:38.506 +00:00","updatedAt":"2024-03-09 07:15:38.506 +00:00","TagId":7,"GameId":52},{"createdAt":"2024-03-09 07:15:38.506 +00:00","updatedAt":"2024-03-09 07:15:38.506 +00:00","TagId":5,"GameId":52},{"createdAt":"2024-03-09 07:15:38.873 +00:00","updatedAt":"2024-03-09 07:15:38.873 +00:00","TagId":5,"GameId":53},{"createdAt":"2024-03-09 07:15:39.261 +00:00","updatedAt":"2024-03-09 07:15:39.261 +00:00","TagId":1,"GameId":54},{"createdAt":"2024-03-09 07:15:39.261 +00:00","updatedAt":"2024-03-09 07:15:39.261 +00:00","TagId":6,"GameId":54},{"createdAt":"2024-03-09 07:15:39.261 +00:00","updatedAt":"2024-03-09 07:15:39.261 +00:00","TagId":9,"GameId":54},{"createdAt":"2024-03-09 07:15:39.261 +00:00","updatedAt":"2024-03-09 07:15:39.261 +00:00","TagId":7,"GameId":54},{"createdAt":"2024-03-09 07:15:39.261 +00:00","updatedAt":"2024-03-09 07:15:39.261 +00:00","TagId":8,"GameId":54},{"createdAt":"2024-03-09 07:15:39.617 +00:00","updatedAt":"2024-03-09 07:15:39.617 +00:00","TagId":1,"GameId":55},{"createdAt":"2024-03-09 07:15:39.617 +00:00","updatedAt":"2024-03-09 07:15:39.617 +00:00","TagId":7,"GameId":55},{"createdAt":"2024-03-09 07:15:39.617 +00:00","updatedAt":"2024-03-09 07:15:39.617 +00:00","TagId":8,"GameId":55},{"createdAt":"2024-03-09 07:15:40.150 +00:00","updatedAt":"2024-03-09 07:15:40.150 +00:00","TagId":5,"GameId":56},{"createdAt":"2024-03-09 07:15:40.493 +00:00","updatedAt":"2024-03-09 07:15:40.493 +00:00","TagId":3,"GameId":57},{"createdAt":"2024-03-09 07:15:40.493 +00:00","updatedAt":"2024-03-09 07:15:40.493 +00:00","TagId":4,"GameId":57},{"createdAt":"2024-03-09 07:15:40.493 +00:00","updatedAt":"2024-03-09 07:15:40.493 +00:00","TagId":5,"GameId":57},{"createdAt":"2024-03-09 07:15:40.867 +00:00","updatedAt":"2024-03-09 07:15:40.867 +00:00","TagId":1,"GameId":58},{"createdAt":"2024-03-09 07:15:40.867 +00:00","updatedAt":"2024-03-09 07:15:40.867 +00:00","TagId":3,"GameId":58},{"createdAt":"2024-03-09 07:15:40.867 +00:00","updatedAt":"2024-03-09 07:15:40.867 +00:00","TagId":5,"GameId":58},{"createdAt":"2024-03-09 07:15:41.168 +00:00","updatedAt":"2024-03-09 07:15:41.168 +00:00","TagId":5,"GameId":59},{"createdAt":"2024-03-09 07:15:41.596 +00:00","updatedAt":"2024-03-09 07:15:41.596 +00:00","TagId":5,"GameId":60},{"createdAt":"2024-03-09 07:15:41.893 +00:00","updatedAt":"2024-03-09 07:15:41.893 +00:00","TagId":1,"GameId":61},{"createdAt":"2024-03-09 07:15:41.893 +00:00","updatedAt":"2024-03-09 07:15:41.893 +00:00","TagId":6,"GameId":61},{"createdAt":"2024-03-09 07:15:41.893 +00:00","updatedAt":"2024-03-09 07:15:41.893 +00:00","TagId":3,"GameId":61},{"createdAt":"2024-03-09 07:15:41.893 +00:00","updatedAt":"2024-03-09 07:15:41.893 +00:00","TagId":7,"GameId":61},{"createdAt":"2024-03-09 07:15:42.578 +00:00","updatedAt":"2024-03-09 07:15:42.578 +00:00","TagId":5,"GameId":62},{"createdAt":"2024-03-09 07:15:42.858 +00:00","updatedAt":"2024-03-09 07:15:42.858 +00:00","TagId":1,"GameId":63},{"createdAt":"2024-03-09 07:15:43.185 +00:00","updatedAt":"2024-03-09 07:15:43.185 +00:00","TagId":1,"GameId":64},{"createdAt":"2024-03-09 07:15:43.185 +00:00","updatedAt":"2024-03-09 07:15:43.185 +00:00","TagId":7,"GameId":64},{"createdAt":"2024-03-09 07:15:43.185 +00:00","updatedAt":"2024-03-09 07:15:43.185 +00:00","TagId":5,"GameId":64},{"createdAt":"2024-03-09 07:15:43.558 +00:00","updatedAt":"2024-03-09 07:15:43.558 +00:00","TagId":1,"GameId":65},{"createdAt":"2024-03-09 07:15:43.558 +00:00","updatedAt":"2024-03-09 07:15:43.558 +00:00","TagId":3,"GameId":65},{"createdAt":"2024-03-09 07:15:43.558 +00:00","updatedAt":"2024-03-09 07:15:43.558 +00:00","TagId":4,"GameId":65},{"createdAt":"2024-03-09 07:15:43.875 +00:00","updatedAt":"2024-03-09 07:15:43.875 +00:00","TagId":2,"GameId":66},{"createdAt":"2024-03-09 07:15:43.875 +00:00","updatedAt":"2024-03-09 07:15:43.875 +00:00","TagId":5,"GameId":66},{"createdAt":"2024-03-09 07:15:44.423 +00:00","updatedAt":"2024-03-09 07:15:44.423 +00:00","TagId":1,"GameId":67},{"createdAt":"2024-03-09 07:15:44.423 +00:00","updatedAt":"2024-03-09 07:15:44.423 +00:00","TagId":7,"GameId":67},{"createdAt":"2024-03-09 07:15:44.775 +00:00","updatedAt":"2024-03-09 07:15:44.775 +00:00","TagId":1,"GameId":68},{"createdAt":"2024-03-09 07:15:44.775 +00:00","updatedAt":"2024-03-09 07:15:44.775 +00:00","TagId":6,"GameId":68},{"createdAt":"2024-03-09 07:15:44.775 +00:00","updatedAt":"2024-03-09 07:15:44.775 +00:00","TagId":3,"GameId":68},{"createdAt":"2024-03-09 07:15:44.775 +00:00","updatedAt":"2024-03-09 07:15:44.775 +00:00","TagId":7,"GameId":68},{"createdAt":"2024-03-09 07:15:44.775 +00:00","updatedAt":"2024-03-09 07:15:44.775 +00:00","TagId":5,"GameId":68},{"createdAt":"2024-03-09 07:15:45.141 +00:00","updatedAt":"2024-03-09 07:15:45.141 +00:00","TagId":6,"GameId":69},{"createdAt":"2024-03-09 07:15:45.429 +00:00","updatedAt":"2024-03-09 07:15:45.429 +00:00","TagId":1,"GameId":70},{"createdAt":"2024-03-09 07:15:45.429 +00:00","updatedAt":"2024-03-09 07:15:45.429 +00:00","TagId":3,"GameId":70},{"createdAt":"2024-03-09 07:15:45.429 +00:00","updatedAt":"2024-03-09 07:15:45.429 +00:00","TagId":4,"GameId":70},{"createdAt":"2024-03-09 07:15:45.706 +00:00","updatedAt":"2024-03-09 07:15:45.706 +00:00","TagId":2,"GameId":71},{"createdAt":"2024-03-09 07:15:45.706 +00:00","updatedAt":"2024-03-09 07:15:45.706 +00:00","TagId":3,"GameId":71},{"createdAt":"2024-03-09 07:15:45.706 +00:00","updatedAt":"2024-03-09 07:15:45.706 +00:00","TagId":5,"GameId":71},{"createdAt":"2024-03-09 07:15:46.082 +00:00","updatedAt":"2024-03-09 07:15:46.082 +00:00","TagId":1,"GameId":72},{"createdAt":"2024-03-09 07:15:46.082 +00:00","updatedAt":"2024-03-09 07:15:46.082 +00:00","TagId":3,"GameId":72},{"createdAt":"2024-03-09 07:15:46.082 +00:00","updatedAt":"2024-03-09 07:15:46.082 +00:00","TagId":10,"GameId":72},{"createdAt":"2024-03-09 07:15:46.082 +00:00","updatedAt":"2024-03-09 07:15:46.082 +00:00","TagId":11,"GameId":72},{"createdAt":"2024-03-09 07:15:46.472 +00:00","updatedAt":"2024-03-09 07:15:46.472 +00:00","TagId":1,"GameId":73},{"createdAt":"2024-03-09 
// 07:15:46.472 +00:00","updatedAt":"2024-03-09 07:15:46.472 +00:00","TagId":4,"GameId":73},{"createdAt":"2024-03-09 07:15:46.472 +00:00","updatedAt":"2024-03-09 07:15:46.472 +00:00","TagId":5,"GameId":73},{"createdAt":"2024-03-09 07:15:46.843 +00:00","updatedAt":"2024-03-09 07:15:46.843 +00:00","TagId":1,"GameId":74},{"createdAt":"2024-03-09 07:15:46.843 +00:00","updatedAt":"2024-03-09 07:15:46.843 +00:00","TagId":7,"GameId":74},{"createdAt":"2024-03-09 07:15:47.143 +00:00","updatedAt":"2024-03-09 07:15:47.143 +00:00","TagId":2,"GameId":75},{"createdAt":"2024-03-09 07:15:47.143 +00:00","updatedAt":"2024-03-09 07:15:47.143 +00:00","TagId":3,"GameId":75},{"createdAt":"2024-03-09 07:15:47.143 +00:00","updatedAt":"2024-03-09 07:15:47.143 +00:00","TagId":5,"GameId":75},{"createdAt":"2024-03-09 07:15:47.394 +00:00","updatedAt":"2024-03-09 07:15:47.394 +00:00","TagId":2,"GameId":76},{"createdAt":"2024-03-09 07:15:47.394 +00:00","updatedAt":"2024-03-09 07:15:47.394 +00:00","TagId":3,"GameId":76},{"createdAt":"2024-03-09 07:15:47.394 +00:00","updatedAt":"2024-03-09 07:15:47.394 +00:00","TagId":5,"GameId":76},{"createdAt":"2024-03-09 07:15:47.659 +00:00","updatedAt":"2024-03-09 07:15:47.659 +00:00","TagId":2,"GameId":77},{"createdAt":"2024-03-09 07:15:47.659 +00:00","updatedAt":"2024-03-09 07:15:47.659 +00:00","TagId":3,"GameId":77},{"createdAt":"2024-03-09 07:15:47.659 +00:00","updatedAt":"2024-03-09 07:15:47.659 +00:00","TagId":5,"GameId":77},{"createdAt":"2024-03-09 07:15:47.967 +00:00","updatedAt":"2024-03-09 07:15:47.967 +00:00","TagId":2,"GameId":78},{"createdAt":"2024-03-09 07:15:47.967 +00:00","updatedAt":"2024-03-09 07:15:47.967 +00:00","TagId":3,"GameId":78},{"createdAt":"2024-03-09 07:15:47.967 +00:00","updatedAt":"2024-03-09 07:15:47.967 +00:00","TagId":5,"GameId":78},{"createdAt":"2024-03-09 07:15:48.316 +00:00","updatedAt":"2024-03-09 07:15:48.316 +00:00","TagId":2,"GameId":79},{"createdAt":"2024-03-09 07:15:48.316 +00:00","updatedAt":"2024-03-09 07:15:48.316 +00:00","TagId":3,"GameId":79},{"createdAt":"2024-03-09 07:15:48.316 +00:00","updatedAt":"2024-03-09 07:15:48.316 +00:00","TagId":5,"GameId":79},{"createdAt":"2024-03-09 07:15:48.619 +00:00","updatedAt":"2024-03-09 07:15:48.619 +00:00","TagId":2,"GameId":80},{"createdAt":"2024-03-09 07:15:48.619 +00:00","updatedAt":"2024-03-09 07:15:48.619 +00:00","TagId":3,"GameId":80},{"createdAt":"2024-03-09 07:15:48.619 +00:00","updatedAt":"2024-03-09 07:15:48.619 +00:00","TagId":5,"GameId":80},{"createdAt":"2024-03-09 07:15:48.891 +00:00","updatedAt":"2024-03-09 07:15:48.891 +00:00","TagId":2,"GameId":81},{"createdAt":"2024-03-09 07:15:48.891 +00:00","updatedAt":"2024-03-09 07:15:48.891 +00:00","TagId":3,"GameId":81},{"createdAt":"2024-03-09 07:15:48.891 +00:00","updatedAt":"2024-03-09 07:15:48.891 +00:00","TagId":5,"GameId":81},{"createdAt":"2024-03-09 07:15:49.261 +00:00","updatedAt":"2024-03-09 07:15:49.261 +00:00","TagId":2,"GameId":82},{"createdAt":"2024-03-09 07:15:49.261 +00:00","updatedAt":"2024-03-09 07:15:49.261 +00:00","TagId":5,"GameId":82},{"createdAt":"2024-03-09 07:15:49.620 +00:00","updatedAt":"2024-03-09 07:15:49.620 +00:00","TagId":1,"GameId":83},{"createdAt":"2024-03-09 07:15:49.620 +00:00","updatedAt":"2024-03-09 07:15:49.620 +00:00","TagId":6,"GameId":83},{"createdAt":"2024-03-09 07:15:49.620 +00:00","updatedAt":"2024-03-09 07:15:49.620 +00:00","TagId":3,"GameId":83},{"createdAt":"2024-03-09 07:15:49.941 +00:00","updatedAt":"2024-03-09 07:15:49.941 +00:00","TagId":1,"GameId":84},{"createdAt":"2024-03-09 07:15:50.259 +00:00","updatedAt":"2024-03-09 07:15:50.259 +00:00","TagId":9,"GameId":85},{"createdAt":"2024-03-09 07:15:50.259 +00:00","updatedAt":"2024-03-09 07:15:50.259 +00:00","TagId":7,"GameId":85},{"createdAt":"2024-03-09 07:15:50.607 +00:00","updatedAt":"2024-03-09 07:15:50.607 +00:00","TagId":3,"GameId":86},{"createdAt":"2024-03-09 07:15:50.607 +00:00","updatedAt":"2024-03-09 07:15:50.607 +00:00","TagId":7,"GameId":86},{"createdAt":"2024-03-09 07:15:50.923 +00:00","updatedAt":"2024-03-09 07:15:50.923 +00:00","TagId":1,"GameId":87},{"createdAt":"2024-03-09 07:15:50.923 +00:00","updatedAt":"2024-03-09 07:15:50.923 +00:00","TagId":6,"GameId":87},{"createdAt":"2024-03-09 07:15:50.923 +00:00","updatedAt":"2024-03-09 07:15:50.923 +00:00","TagId":3,"GameId":87},{"createdAt":"2024-03-09 07:15:50.923 +00:00","updatedAt":"2024-03-09 07:15:50.923 +00:00","TagId":5,"GameId":87},{"createdAt":"2024-03-09 07:15:51.284 +00:00","updatedAt":"2024-03-09 07:15:51.284 +00:00","TagId":1,"GameId":88},{"createdAt":"2024-03-09 07:15:51.284 +00:00","updatedAt":"2024-03-09 07:15:51.284 +00:00","TagId":3,"GameId":88},{"createdAt":"2024-03-09 07:15:51.701 +00:00","updatedAt":"2024-03-09 07:15:51.701 +00:00","TagId":1,"GameId":89},{"createdAt":"2024-03-09 07:15:51.701 +00:00","updatedAt":"2024-03-09 07:15:51.701 +00:00","TagId":6,"GameId":89},{"createdAt":"2024-03-09 07:15:51.701 +00:00","updatedAt":"2024-03-09 07:15:51.701 +00:00","TagId":3,"GameId":89},{"createdAt":"2024-03-09 07:15:51.701 +00:00","updatedAt":"2024-03-09 07:15:51.701 +00:00","TagId":9,"GameId":89},{"createdAt":"2024-03-09 07:15:51.701 +00:00","updatedAt":"2024-03-09 
// 07:15:51.701 +00:00","TagId":7,"GameId":89},{"createdAt":"2024-03-09 07:15:52.031 +00:00","updatedAt":"2024-03-09 07:15:52.031 +00:00","TagId":3,"GameId":90},{"createdAt":"2024-03-09 07:15:52.031 +00:00","updatedAt":"2024-03-09 07:15:52.031 +00:00","TagId":7,"GameId":90},{"createdAt":"2024-03-09 07:15:52.031 +00:00","updatedAt":"2024-03-09 07:15:52.031 +00:00","TagId":5,"GameId":90},{"createdAt":"2024-03-09 07:15:52.345 +00:00","updatedAt":"2024-03-09 07:15:52.345 +00:00","TagId":1,"GameId":91},{"createdAt":"2024-03-09 07:15:52.345 +00:00","updatedAt":"2024-03-09 07:15:52.345 +00:00","TagId":3,"GameId":91},{"createdAt":"2024-03-09 07:15:52.345 +00:00","updatedAt":"2024-03-09 07:15:52.345 +00:00","TagId":5,"GameId":91},{"createdAt":"2024-03-09 07:15:52.667 +00:00","updatedAt":"2024-03-09 07:15:52.667 +00:00","TagId":1,"GameId":92},{"createdAt":"2024-03-09 07:15:53.036 +00:00","updatedAt":"2024-03-09 07:15:53.036 +00:00","TagId":1,"GameId":93},{"createdAt":"2024-03-09 07:15:53.372 +00:00","updatedAt":"2024-03-09 07:15:53.372 +00:00","TagId":3,"GameId":94},{"createdAt":"2024-03-09 07:15:53.372 +00:00","updatedAt":"2024-03-09 07:15:53.372 +00:00","TagId":7,"GameId":94},{"createdAt":"2024-03-09 07:15:53.372 +00:00","updatedAt":"2024-03-09 07:15:53.372 +00:00","TagId":5,"GameId":94},{"createdAt":"2024-03-09 07:15:53.845 +00:00","updatedAt":"2024-03-09 07:15:53.845 +00:00","TagId":4,"GameId":95},{"createdAt":"2024-03-09 07:15:53.845 +00:00","updatedAt":"2024-03-09 07:15:53.845 +00:00","TagId":5,"GameId":95},{"createdAt":"2024-03-09 07:15:54.150 +00:00","updatedAt":"2024-03-09 07:15:54.150 +00:00","TagId":5,"GameId":96},{"createdAt":"2024-03-09 07:15:54.478 +00:00","updatedAt":"2024-03-09 07:15:54.478 +00:00","TagId":6,"GameId":97},{"createdAt":"2024-03-09 07:15:54.478 +00:00","updatedAt":"2024-03-09 07:15:54.478 +00:00","TagId":2,"GameId":97},{"createdAt":"2024-03-09 07:15:54.478 +00:00","updatedAt":"2024-03-09 07:15:54.478 +00:00","TagId":3,"GameId":97},{"createdAt":"2024-03-09 07:15:54.478 +00:00","updatedAt":"2024-03-09 07:15:54.478 +00:00","TagId":7,"GameId":97},{"createdAt":"2024-03-09 07:15:54.478 +00:00","updatedAt":"2024-03-09 07:15:54.478 +00:00","TagId":5,"GameId":97},{"createdAt":"2024-03-09 07:15:54.775 +00:00","updatedAt":"2024-03-09 07:15:54.775 +00:00","TagId":1,"GameId":98},{"createdAt":"2024-03-09 07:15:54.775 +00:00","updatedAt":"2024-03-09 07:15:54.775 +00:00","TagId":3,"GameId":98},{"createdAt":"2024-03-09 07:15:54.775 +00:00","updatedAt":"2024-03-09 07:15:54.775 +00:00","TagId":7,"GameId":98},{"createdAt":"2024-03-09 07:15:54.775 +00:00","updatedAt":"2024-03-09 07:15:54.775 +00:00","TagId":5,"GameId":98},{"createdAt":"2024-03-09 07:15:55.074 +00:00","updatedAt":"2024-03-09 07:15:55.074 +00:00","TagId":7,"GameId":99},{"createdAt":"2024-03-09 07:15:55.374 +00:00","updatedAt":"2024-03-09 07:15:55.374 +00:00","TagId":1,"GameId":100},{"createdAt":"2024-03-09 07:15:55.374 +00:00","updatedAt":"2024-03-09 07:15:55.374 +00:00","TagId":7,"GameId":100},{"createdAt":"2024-03-09 07:15:55.374 +00:00","updatedAt":"2024-03-09 07:15:55.374 +00:00","TagId":5,"GameId":100},{"createdAt":"2024-03-09 
// 07:15:55.743 +00:00","updatedAt":"2024-03-09 07:15:55.743 +00:00","TagId":2,"GameId":101},{"createdAt":"2024-03-09 07:15:55.743 +00:00","updatedAt":"2024-03-09 07:15:55.743 +00:00","TagId":3,"GameId":101},{"createdAt":"2024-03-09 07:15:55.743 +00:00","updatedAt":"2024-03-09 07:15:55.743 +00:00","TagId":7,"GameId":101},{"createdAt":"2024-03-09 07:15:55.743 +00:00","updatedAt":"2024-03-09 07:15:55.743 +00:00","TagId":4,"GameId":101},{"createdAt":"2024-03-09 07:15:55.743 +00:00","updatedAt":"2024-03-09 07:15:55.743 +00:00","TagId":5,"GameId":101},{"createdAt":"2024-03-09 07:15:56.098 +00:00","updatedAt":"2024-03-09 07:15:56.098 +00:00","TagId":1,"GameId":102},{"createdAt":"2024-03-09 07:15:56.098 +00:00","updatedAt":"2024-03-09 07:15:56.098 +00:00","TagId":6,"GameId":102},{"createdAt":"2024-03-09 07:15:56.098 +00:00","updatedAt":"2024-03-09 07:15:56.098 +00:00","TagId":2,"GameId":102},{"createdAt":"2024-03-09 07:15:56.098 +00:00","updatedAt":"2024-03-09 07:15:56.098 +00:00","TagId":3,"GameId":102},{"createdAt":"2024-03-09 07:15:56.437 +00:00","updatedAt":"2024-03-09 07:15:56.437 +00:00","TagId":6,"GameId":103},{"createdAt":"2024-03-09 07:15:56.437 +00:00","updatedAt":"2024-03-09 07:15:56.437 +00:00","TagId":3,"GameId":103},{"createdAt":"2024-03-09 07:15:56.437 +00:00","updatedAt":"2024-03-09 07:15:56.437 +00:00","TagId":7,"GameId":103},{"createdAt":"2024-03-09 07:15:56.437 +00:00","updatedAt":"2024-03-09 07:15:56.437 +00:00","TagId":5,"GameId":103},{"createdAt":"2024-03-09 07:15:56.824 +00:00","updatedAt":"2024-03-09 07:15:56.824 +00:00","TagId":1,"GameId":104},{"createdAt":"2024-03-09 07:15:56.824 +00:00","updatedAt":"2024-03-09 07:15:56.824 +00:00","TagId":6,"GameId":104},{"createdAt":"2024-03-09 07:15:56.824 +00:00","updatedAt":"2024-03-09 07:15:56.824 +00:00","TagId":2,"GameId":104},{"createdAt":"2024-03-09 07:15:56.824 +00:00","updatedAt":"2024-03-09 07:15:56.824 +00:00","TagId":3,"GameId":104},{"createdAt":"2024-03-09 07:15:57.159 +00:00","updatedAt":"2024-03-09 07:15:57.159 +00:00","TagId":1,"GameId":105},{"createdAt":"2024-03-09 07:15:57.159 +00:00","updatedAt":"2024-03-09 07:15:57.159 +00:00","TagId":3,"GameId":105},{"createdAt":"2024-03-09 07:15:57.159 +00:00","updatedAt":"2024-03-09 07:15:57.159 +00:00","TagId":7,"GameId":105},{"createdAt":"2024-03-09 07:15:57.476 +00:00","updatedAt":"2024-03-09 07:15:57.476 +00:00","TagId":3,"GameId":106},{"createdAt":"2024-03-09 07:15:57.476 +00:00","updatedAt":"2024-03-09 07:15:57.476 +00:00","TagId":7,"GameId":106},{"createdAt":"2024-03-09 07:15:57.874 +00:00","updatedAt":"2024-03-09 07:15:57.874 +00:00","TagId":1,"GameId":107},{"createdAt":"2024-03-09 07:15:58.165 +00:00","updatedAt":"2024-03-09 07:15:58.165 +00:00","TagId":1,"GameId":108},{"createdAt":"2024-03-09 07:15:58.492 +00:00","updatedAt":"2024-03-09 07:15:58.492 +00:00","TagId":1,"GameId":109},{"createdAt":"2024-03-09 07:15:58.492 +00:00","updatedAt":"2024-03-09 07:15:58.492 +00:00","TagId":6,"GameId":109},{"createdAt":"2024-03-09 07:15:58.492 +00:00","updatedAt":"2024-03-09 07:15:58.492 +00:00","TagId":7,"GameId":109},{"createdAt":"2024-03-09 07:15:58.880 +00:00","updatedAt":"2024-03-09 
// 07:15:58.880 +00:00","TagId":1,"GameId":110},{"createdAt":"2024-03-09 07:15:58.880 +00:00","updatedAt":"2024-03-09 07:15:58.880 +00:00","TagId":6,"GameId":110},{"createdAt":"2024-03-09 07:15:58.880 +00:00","updatedAt":"2024-03-09 07:15:58.880 +00:00","TagId":3,"GameId":110},{"createdAt":"2024-03-09 07:15:59.211 +00:00","updatedAt":"2024-03-09 07:15:59.211 +00:00","TagId":1,"GameId":111},{"createdAt":"2024-03-09 07:15:59.885 +00:00","updatedAt":"2024-03-09 07:15:59.885 +00:00","TagId":1,"GameId":112},{"createdAt":"2024-03-09 07:15:59.885 +00:00","updatedAt":"2024-03-09 07:15:59.885 +00:00","TagId":6,"GameId":112},{"createdAt":"2024-03-09 07:15:59.885 +00:00","updatedAt":"2024-03-09 07:15:59.885 +00:00","TagId":3,"GameId":112},{"createdAt":"2024-03-09 07:15:59.885 +00:00","updatedAt":"2024-03-09 07:15:59.885 +00:00","TagId":7,"GameId":112},{"createdAt":"2024-03-09 07:16:00.228 +00:00","updatedAt":"2024-03-09 07:16:00.228 +00:00","TagId":1,"GameId":113},{"createdAt":"2024-03-09 07:16:00.228 +00:00","updatedAt":"2024-03-09 07:16:00.228 +00:00","TagId":3,"GameId":113},{"createdAt":"2024-03-09 07:16:00.228 +00:00","updatedAt":"2024-03-09 07:16:00.228 +00:00","TagId":7,"GameId":113},{"createdAt":"2024-03-09 07:16:00.607 +00:00","updatedAt":"2024-03-09 07:16:00.607 +00:00","TagId":6,"GameId":114},{"createdAt":"2024-03-09 07:16:00.607 +00:00","updatedAt":"2024-03-09 07:16:00.607 +00:00","TagId":3,"GameId":114},{"createdAt":"2024-03-09 07:16:00.607 +00:00","updatedAt":"2024-03-09 07:16:00.607 +00:00","TagId":7,"GameId":114},{"createdAt":"2024-03-09 07:16:00.607 +00:00","updatedAt":"2024-03-09 07:16:00.607 +00:00","TagId":5,"GameId":114},{"createdAt":"2024-03-09 07:16:00.997 +00:00","updatedAt":"2024-03-09 07:16:00.997 +00:00","TagId":3,"GameId":115},{"createdAt":"2024-03-09 07:16:00.997 +00:00","updatedAt":"2024-03-09 07:16:00.997 +00:00","TagId":4,"GameId":115},{"createdAt":"2024-03-09 07:16:00.997 +00:00","updatedAt":"2024-03-09 07:16:00.997 +00:00","TagId":11,"GameId":115},{"createdAt":"2024-03-09 07:16:01.315 +00:00","updatedAt":"2024-03-09 07:16:01.315 +00:00","TagId":5,"GameId":116},{"createdAt":"2024-03-09 07:16:01.725 +00:00","updatedAt":"2024-03-09 07:16:01.725 +00:00","TagId":6,"GameId":117},{"createdAt":"2024-03-09 07:16:01.725 +00:00","updatedAt":"2024-03-09 07:16:01.725 +00:00","TagId":3,"GameId":117},{"createdAt":"2024-03-09 07:16:01.725 +00:00","updatedAt":"2024-03-09 07:16:01.725 +00:00","TagId":7,"GameId":117},{"createdAt":"2024-03-09 07:16:02.025 +00:00","updatedAt":"2024-03-09 07:16:02.025 +00:00","TagId":1,"GameId":118},{"createdAt":"2024-03-09 07:16:02.025 +00:00","updatedAt":"2024-03-09 07:16:02.025 +00:00","TagId":3,"GameId":118},{"createdAt":"2024-03-09 07:16:02.547 +00:00","updatedAt":"2024-03-09 07:16:02.547 +00:00","TagId":4,"GameId":119},{"createdAt":"2024-03-09 07:16:02.547 +00:00","updatedAt":"2024-03-09 07:16:02.547 +00:00","TagId":5,"GameId":119},{"createdAt":"2024-03-09 07:16:02.883 +00:00","updatedAt":"2024-03-09 07:16:02.883 +00:00","TagId":6,"GameId":120},{"createdAt":"2024-03-09 07:16:02.883 +00:00","updatedAt":"2024-03-09 07:16:02.883 +00:00","TagId":2,"GameId":120},{"createdAt":"2024-03-09 07:16:02.883 +00:00","updatedAt":"2024-03-09 07:16:02.883 +00:00","TagId":3,"GameId":120},{"createdAt":"2024-03-09 07:16:03.244 +00:00","updatedAt":"2024-03-09 07:16:03.244 +00:00","TagId":4,"GameId":121},{"createdAt":"2024-03-09 07:16:03.244 +00:00","updatedAt":"2024-03-09 07:16:03.244 +00:00","TagId":5,"GameId":121},{"createdAt":"2024-03-09 07:16:03.671 +00:00","updatedAt":"2024-03-09 07:16:03.671 +00:00","TagId":1,"GameId":122},{"createdAt":"2024-03-09 07:16:03.671 +00:00","updatedAt":"2024-03-09 07:16:03.671 +00:00","TagId":3,"GameId":122},{"createdAt":"2024-03-09 07:16:04.057 +00:00","updatedAt":"2024-03-09 07:16:04.057 +00:00","TagId":2,"GameId":123},{"createdAt":"2024-03-09 07:16:04.057 +00:00","updatedAt":"2024-03-09 07:16:04.057 +00:00","TagId":3,"GameId":123},{"createdAt":"2024-03-09 07:16:04.057 +00:00","updatedAt":"2024-03-09 07:16:04.057 +00:00","TagId":5,"GameId":123},{"createdAt":"2024-03-09 07:16:04.448 +00:00","updatedAt":"2024-03-09 07:16:04.448 +00:00","TagId":1,"GameId":124},{"createdAt":"2024-03-09 07:16:04.448 +00:00","updatedAt":"2024-03-09 07:16:04.448 +00:00","TagId":9,"GameId":124},{"createdAt":"2024-03-09 07:16:04.448 +00:00","updatedAt":"2024-03-09 07:16:04.448 +00:00","TagId":10,"GameId":124},{"createdAt":"2024-03-09 07:16:04.782 +00:00","updatedAt":"2024-03-09 07:16:04.782 
// +00:00","TagId":6,"GameId":125},{"createdAt":"2024-03-09 07:16:04.782 +00:00","updatedAt":"2024-03-09 07:16:04.782 +00:00","TagId":3,"GameId":125},{"createdAt":"2024-03-09 07:16:04.782 +00:00","updatedAt":"2024-03-09 07:16:04.782 +00:00","TagId":4,"GameId":125},{"createdAt":"2024-03-09 07:16:04.782 +00:00","updatedAt":"2024-03-09 07:16:04.782 +00:00","TagId":5,"GameId":125},{"createdAt":"2024-03-09 07:16:05.092 +00:00","updatedAt":"2024-03-09 07:16:05.092 +00:00","TagId":1,"GameId":126},{"createdAt":"2024-03-09 07:16:05.092 +00:00","updatedAt":"2024-03-09 07:16:05.092 +00:00","TagId":6,"GameId":126},{"createdAt":"2024-03-09 07:16:05.092 +00:00","updatedAt":"2024-03-09 07:16:05.092 +00:00","TagId":3,"GameId":126},{"createdAt":"2024-03-09 07:16:05.092 +00:00","updatedAt":"2024-03-09 07:16:05.092 +00:00","TagId":7,"GameId":126},{"createdAt":"2024-03-09 07:16:05.092 +00:00","updatedAt":"2024-03-09 07:16:05.092 +00:00","TagId":12,"GameId":126},{"createdAt":"2024-03-09 07:16:05.535 +00:00","updatedAt":"2024-03-09 07:16:05.535 +00:00","TagId":1,"GameId":127},{"createdAt":"2024-03-09 07:16:05.535 +00:00","updatedAt":"2024-03-09 07:16:05.535 +00:00","TagId":7,"GameId":127},{"createdAt":"2024-03-09 07:16:06.133 +00:00","updatedAt":"2024-03-09 07:16:06.133 +00:00","TagId":1,"GameId":128},{"createdAt":"2024-03-09 07:16:06.632 +00:00","updatedAt":"2024-03-09 07:16:06.632 +00:00","TagId":1,"GameId":129},{"createdAt":"2024-03-09 07:16:06.632 +00:00","updatedAt":"2024-03-09 07:16:06.632 +00:00","TagId":3,"GameId":129},{"createdAt":"2024-03-09 07:16:06.632 +00:00","updatedAt":"2024-03-09 07:16:06.632 +00:00","TagId":7,"GameId":129},{"createdAt":"2024-03-09 07:16:06.945 +00:00","updatedAt":"2024-03-09 07:16:06.945 +00:00","TagId":2,"GameId":130},{"createdAt":"2024-03-09 07:16:06.945 +00:00","updatedAt":"2024-03-09 07:16:06.945 +00:00","TagId":3,"GameId":130},{"createdAt":"2024-03-09 07:16:06.945 +00:00","updatedAt":"2024-03-09 07:16:06.945 +00:00","TagId":5,"GameId":130},{"createdAt":"2024-03-09 07:16:07.513 +00:00","updatedAt":"2024-03-09 07:16:07.513 +00:00","TagId":4,"GameId":131},{"createdAt":"2024-03-09 07:16:07.513 +00:00","updatedAt":"2024-03-09 07:16:07.513 +00:00","TagId":5,"GameId":131},{"createdAt":"2024-03-09 07:16:07.847 +00:00","updatedAt":"2024-03-09 07:16:07.847 +00:00","TagId":1,"GameId":132},{"createdAt":"2024-03-09 07:16:07.847 +00:00","updatedAt":"2024-03-09 07:16:07.847 +00:00","TagId":3,"GameId":132},{"createdAt":"2024-03-09 07:16:08.362 +00:00","updatedAt":"2024-03-09 07:16:08.362 +00:00","TagId":1,"GameId":133},{"createdAt":"2024-03-09 07:16:08.362 +00:00","updatedAt":"2024-03-09 07:16:08.362 +00:00","TagId":6,"GameId":133},{"createdAt":"2024-03-09 07:16:08.362 +00:00","updatedAt":"2024-03-09 07:16:08.362 +00:00","TagId":9,"GameId":133},{"createdAt":"2024-03-09 07:16:08.362 +00:00","updatedAt":"2024-03-09 07:16:08.362 +00:00","TagId":7,"GameId":133},{"createdAt":"2024-03-09 07:16:08.771 +00:00","updatedAt":"2024-03-09 07:16:08.771 +00:00","TagId":3,"GameId":134},{"createdAt":"2024-03-09 07:16:08.771 +00:00","updatedAt":"2024-03-09 07:16:08.771 +00:00","TagId":7,"GameId":134},{"createdAt":"2024-03-09 07:16:08.771 +00:00","updatedAt":"2024-03-09 07:16:08.771 +00:00","TagId":5,"GameId":134},{"createdAt":"2024-03-09 07:16:09.073 +00:00","updatedAt":"2024-03-09 07:16:09.073 +00:00","TagId":3,"GameId":135},{"createdAt":"2024-03-09 07:16:09.073 +00:00","updatedAt":"2024-03-09 07:16:09.073 +00:00","TagId":7,"GameId":135},{"createdAt":"2024-03-09 07:16:09.073 +00:00","updatedAt":"2024-03-09 07:16:09.073 +00:00","TagId":5,"GameId":135},{"createdAt":"2024-03-09 07:16:09.358 +00:00","updatedAt":"2024-03-09 07:16:09.358 +00:00","TagId":1,"GameId":136},{"createdAt":"2024-03-09 07:16:09.358 +00:00","updatedAt":"2024-03-09 07:16:09.358 +00:00","TagId":3,"GameId":136},{"createdAt":"2024-03-09 07:16:09.787 +00:00","updatedAt":"2024-03-09 07:16:09.787 +00:00","TagId":1,"GameId":137},{"createdAt":"2024-03-09 07:16:09.787 +00:00","updatedAt":"2024-03-09 07:16:09.787 +00:00","TagId":3,"GameId":137},{"createdAt":"2024-03-09 07:16:09.787 +00:00","updatedAt":"2024-03-09 07:16:09.787 +00:00","TagId":4,"GameId":137},{"createdAt":"2024-03-09 07:16:09.787 +00:00","updatedAt":"2024-03-09 07:16:09.787 +00:00","TagId":5,"GameId":137},{"createdAt":"2024-03-09 07:16:10.183 +00:00","updatedAt":"2024-03-09 07:16:10.183 +00:00","TagId":3,"GameId":138},{"createdAt":"2024-03-09 07:16:10.183 +00:00","updatedAt":"2024-03-09 07:16:10.183 +00:00","TagId":4,"GameId":138},{"createdAt":"2024-03-09 07:16:10.505 +00:00","updatedAt":"2024-03-09 07:16:10.505 +00:00","TagId":3,"GameId":139},{"createdAt":"2024-03-09 07:16:10.505 +00:00","updatedAt":"2024-03-09 07:16:10.505 +00:00","TagId":4,"GameId":139},{"createdAt":"2024-03-09 07:16:10.857 +00:00","updatedAt":"2024-03-09 07:16:10.857 +00:00","TagId":3,"GameId":140},{"createdAt":"2024-03-09 07:16:10.857 +00:00","updatedAt":"2024-03-09 07:16:10.857 +00:00","TagId":5,"GameId":140},{"createdAt":"2024-03-09 07:16:11.309 +00:00","updatedAt":"2024-03-09 07:16:11.309 +00:00","TagId":6,"GameId":141},{"createdAt":"2024-03-09 07:16:11.309 +00:00","updatedAt":"2024-03-09 07:16:11.309 +00:00","TagId":3,"GameId":141},{"createdAt":"2024-03-09 07:16:11.309 +00:00","updatedAt":"2024-03-09 07:16:11.309 +00:00","TagId":7,"GameId":141},{"createdAt":"2024-03-09 07:16:11.309 +00:00","updatedAt":"2024-03-09 07:16:11.309 +00:00","TagId":5,"GameId":141},{"createdAt":"2024-03-09 07:16:11.672 +00:00","updatedAt":"2024-03-09 07:16:11.672 +00:00","TagId":6,"GameId":142},{"createdAt":"2024-03-09 07:16:11.672 +00:00","updatedAt":"2024-03-09 07:16:11.672 +00:00","TagId":3,"GameId":142},{"createdAt":"2024-03-09 07:16:11.672 +00:00","updatedAt":"2024-03-09 07:16:11.672 +00:00","TagId":7,"GameId":142},{"createdAt":"2024-03-09 07:16:11.672 +00:00","updatedAt":"2024-03-09 07:16:11.672 +00:00","TagId":5,"GameId":142},{"createdAt":"2024-03-09 07:16:12.048 +00:00","updatedAt":"2024-03-09 07:16:12.048 +00:00","TagId":7,"GameId":143},{"createdAt":"2024-03-09 07:16:12.445 +00:00","updatedAt":"2024-03-09 07:16:12.445 +00:00","TagId":1,"GameId":144},{"createdAt":"2024-03-09 07:16:12.445 +00:00","updatedAt":"2024-03-09 07:16:12.445 +00:00","TagId":2,"GameId":144},{"createdAt":"2024-03-09 07:16:12.445 +00:00","updatedAt":"2024-03-09 07:16:12.445 +00:00","TagId":3,"GameId":144},{"createdAt":"2024-03-09 07:16:12.776 +00:00","updatedAt":"2024-03-09 07:16:12.776 +00:00","TagId":6,"GameId":145},{"createdAt":"2024-03-09 07:16:12.776 +00:00","updatedAt":"2024-03-09 07:16:12.776 +00:00","TagId":3,"GameId":145},{"createdAt":"2024-03-09 07:16:12.776 +00:00","updatedAt":"2024-03-09 07:16:12.776 +00:00","TagId":7,"GameId":145},{"createdAt":"2024-03-09 07:16:12.776 +00:00","updatedAt":"2024-03-09 07:16:12.776 +00:00","TagId":5,"GameId":145},{"createdAt":"2024-03-09 07:16:13.206 +00:00","updatedAt":"2024-03-09 07:16:13.206 +00:00","TagId":1,"GameId":146},{"createdAt":"2024-03-09 07:16:13.206 +00:00","updatedAt":"2024-03-09 07:16:13.206 +00:00","TagId":3,"GameId":146},{"createdAt":"2024-03-09 07:16:13.206 +00:00","updatedAt":"2024-03-09 07:16:13.206 +00:00","TagId":8,"GameId":146},{"createdAt":"2024-03-09 07:16:13.500 +00:00","updatedAt":"2024-03-09 07:16:13.500 +00:00","TagId":2,"GameId":147},{"createdAt":"2024-03-09 07:16:13.500 +00:00","updatedAt":"2024-03-09 07:16:13.500 +00:00","TagId":3,"GameId":147},{"createdAt":"2024-03-09 07:16:13.500 +00:00","updatedAt":"2024-03-09 07:16:13.500 +00:00","TagId":5,"GameId":147},{"createdAt":"2024-03-09 07:16:13.911 +00:00","updatedAt":"2024-03-09 07:16:13.911 +00:00","TagId":1,"GameId":148},{"createdAt":"2024-03-09 07:16:14.242 +00:00","updatedAt":"2024-03-09 07:16:14.242 +00:00","TagId":6,"GameId":149},{"createdAt":"2024-03-09 07:16:14.242 +00:00","updatedAt":"2024-03-09 07:16:14.242 +00:00","TagId":2,"GameId":149},{"createdAt":"2024-03-09 07:16:14.242 +00:00","updatedAt":"2024-03-09 07:16:14.242 +00:00","TagId":3,"GameId":149},{"createdAt":"2024-03-09 07:16:14.544 +00:00","updatedAt":"2024-03-09 07:16:14.544 +00:00","TagId":1,"GameId":150},{"createdAt":"2024-03-09 07:16:14.873 +00:00","updatedAt":"2024-03-09 07:16:14.873 +00:00","TagId":3,"GameId":151},{"createdAt":"2024-03-09 07:16:14.873 +00:00","updatedAt":"2024-03-09 07:16:14.873 +00:00","TagId":7,"GameId":151},{"createdAt":"2024-03-09 07:16:14.873 +00:00","updatedAt":"2024-03-09 07:16:14.873 +00:00","TagId":4,"GameId":151},{"createdAt":"2024-03-09 07:16:15.231 +00:00","updatedAt":"2024-03-09 07:16:15.231 +00:00","TagId":5,"GameId":152},{"createdAt":"2024-03-09 07:16:15.869 +00:00","updatedAt":"2024-03-09 07:16:15.869 +00:00","TagId":2,"GameId":153},{"createdAt":"2024-03-09 07:16:15.869 +00:00","updatedAt":"2024-03-09 07:16:15.869 +00:00","TagId":3,"GameId":153},{"createdAt":"2024-03-09 07:16:15.869 +00:00","updatedAt":"2024-03-09 07:16:15.869 +00:00","TagId":5,"GameId":153},{"createdAt":"2024-03-09 07:16:16.285 +00:00","updatedAt":"2024-03-09 07:16:16.285 +00:00","TagId":2,"GameId":154},{"createdAt":"2024-03-09 07:16:16.285 +00:00","updatedAt":"2024-03-09 07:16:16.285 +00:00","TagId":3,"GameId":154},{"createdAt":"2024-03-09 07:16:16.647 +00:00","updatedAt":"2024-03-09 07:16:16.647 +00:00","TagId":1,"GameId":155},{"createdAt":"2024-03-09 07:16:16.647 +00:00","updatedAt":"2024-03-09 07:16:16.647 +00:00","TagId":5,"GameId":155},{"createdAt":"2024-03-09 07:16:16.939 +00:00","updatedAt":"2024-03-09 07:16:16.939 +00:00","TagId":3,"GameId":156},{"createdAt":"2024-03-09 07:16:16.939 +00:00","updatedAt":"2024-03-09 07:16:16.939 +00:00","TagId":4,"GameId":156},{"createdAt":"2024-03-09 07:16:16.939 +00:00","updatedAt":"2024-03-09 07:16:16.939 +00:00","TagId":5,"GameId":156},{"createdAt":"2024-03-09 07:16:17.298 +00:00","updatedAt":"2024-03-09 07:16:17.298 +00:00","TagId":1,"GameId":157},{"createdAt":"2024-03-09 07:16:17.298 +00:00","updatedAt":"2024-03-09 07:16:17.298 +00:00","TagId":3,"GameId":157},{"createdAt":"2024-03-09 07:16:17.298 +00:00","updatedAt":"2024-03-09 07:16:17.298 +00:00","TagId":4,"GameId":157},{"createdAt":"2024-03-09 07:16:17.298 +00:00","updatedAt":"2024-03-09 07:16:17.298 +00:00","TagId":11,"GameId":157},{"createdAt":"2024-03-09 07:16:17.610 +00:00","updatedAt":"2024-03-09 07:16:17.610 +00:00","TagId":2,"GameId":158},{"createdAt":"2024-03-09 07:16:17.610 +00:00","updatedAt":"2024-03-09 07:16:17.610 +00:00","TagId":3,"GameId":158},{"createdAt":"2024-03-09 07:16:17.610 +00:00","updatedAt":"2024-03-09 07:16:17.610 +00:00","TagId":5,"GameId":158},{"createdAt":"2024-03-09 07:16:17.967 +00:00","updatedAt":"2024-03-09 07:16:17.967 +00:00","TagId":6,"GameId":159},{"createdAt":"2024-03-09 07:16:17.967 +00:00","updatedAt":"2024-03-09 07:16:17.967 +00:00","TagId":3,"GameId":159},{"createdAt":"2024-03-09 07:16:17.967 +00:00","updatedAt":"2024-03-09 07:16:17.967 +00:00","TagId":5,"GameId":159},{"createdAt":"2024-03-09 07:16:18.523 +00:00","updatedAt":"2024-03-09 07:16:18.523 +00:00","TagId":1,"GameId":160},{"createdAt":"2024-03-09 07:16:18.523 +00:00","updatedAt":"2024-03-09 07:16:18.523 +00:00","TagId":3,"GameId":160},{"createdAt":"2024-03-09 07:16:18.523 +00:00","updatedAt":"2024-03-09 07:16:18.523 +00:00","TagId":4,"GameId":160},{"createdAt":"2024-03-09 07:16:19.062 +00:00","updatedAt":"2024-03-09 07:16:19.062 +00:00","TagId":2,"GameId":161},{"createdAt":"2024-03-09 07:16:19.062 +00:00","updatedAt":"2024-03-09 07:16:19.062 +00:00","TagId":3,"GameId":161},{"createdAt":"2024-03-09 07:16:19.062 +00:00","updatedAt":"2024-03-09 07:16:19.062 +00:00","TagId":5,"GameId":161},{"createdAt":"2024-03-09 07:16:19.407 +00:00","updatedAt":"2024-03-09 07:16:19.407 +00:00","TagId":1,"GameId":162},{"createdAt":"2024-03-09 07:16:19.407 +00:00","updatedAt":"2024-03-09 07:16:19.407 +00:00","TagId":2,"GameId":162},{"createdAt":"2024-03-09 07:16:19.407 +00:00","updatedAt":"2024-03-09 07:16:19.407 +00:00","TagId":3,"GameId":162},{"createdAt":"2024-03-09 07:16:19.407 +00:00","updatedAt":"2024-03-09 07:16:19.407 +00:00","TagId":4,"GameId":162},{"createdAt":"2024-03-09 07:16:19.758 +00:00","updatedAt":"2024-03-09 07:16:19.758 +00:00","TagId":1,"GameId":163},{"createdAt":"2024-03-09 07:16:19.758 +00:00","updatedAt":"2024-03-09 07:16:19.758 +00:00","TagId":6,"GameId":163},{"createdAt":"2024-03-09 07:16:20.059 +00:00","updatedAt":"2024-03-09 07:16:20.059 +00:00","TagId":1,"GameId":164},{"createdAt":"2024-03-09 07:16:20.059 +00:00","updatedAt":"2024-03-09 07:16:20.059 +00:00","TagId":6,"GameId":164},{"createdAt":"2024-03-09 07:16:20.059 +00:00","updatedAt":"2024-03-09 07:16:20.059 +00:00","TagId":3,"GameId":164},{"createdAt":"2024-03-09 07:16:20.059 +00:00","updatedAt":"2024-03-09 07:16:20.059 +00:00","TagId":7,"GameId":164},{"createdAt":"2024-03-09 07:16:20.393 +00:00","updatedAt":"2024-03-09 07:16:20.393 +00:00","TagId":2,"GameId":165},{"createdAt":"2024-03-09 07:16:20.393 +00:00","updatedAt":"2024-03-09 07:16:20.393 +00:00","TagId":3,"GameId":165},{"createdAt":"2024-03-09 07:16:20.674 +00:00","updatedAt":"2024-03-09 07:16:20.674 +00:00","TagId":1,"GameId":166},{"createdAt":"2024-03-09 07:16:20.674 +00:00","updatedAt":"2024-03-09 07:16:20.674 +00:00","TagId":2,"GameId":166},{"createdAt":"2024-03-09 07:16:20.674 +00:00","updatedAt":"2024-03-09 07:16:20.674 +00:00","TagId":3,"GameId":166},{"createdAt":"2024-03-09 07:16:20.674 +00:00","updatedAt":"2024-03-09 07:16:20.674 +00:00","TagId":10,"GameId":166},{"createdAt":"2024-03-09 07:16:20.674 +00:00","updatedAt":"2024-03-09 07:16:20.674 +00:00","TagId":11,"GameId":166},{"createdAt":"2024-03-09 07:16:21.024 +00:00","updatedAt":"2024-03-09 07:16:21.024 +00:00","TagId":5,"GameId":167},{"createdAt":"2024-03-09 07:16:21.458 +00:00","updatedAt":"2024-03-09 07:16:21.458 +00:00","TagId":6,"GameId":168},{"createdAt":"2024-03-09 07:16:21.458 +00:00","updatedAt":"2024-03-09 07:16:21.458 +00:00","TagId":3,"GameId":168},{"createdAt":"2024-03-09 07:16:21.458 +00:00","updatedAt":"2024-03-09 07:16:21.458 +00:00","TagId":7,"GameId":168},{"createdAt":"2024-03-09 07:16:21.458 +00:00","updatedAt":"2024-03-09 07:16:21.458 +00:00","TagId":4,"GameId":168},{"createdAt":"2024-03-09 07:16:21.748 +00:00","updatedAt":"2024-03-09 07:16:21.748 +00:00","TagId":1,"GameId":169},{"createdAt":"2024-03-09 07:16:21.748 +00:00","updatedAt":"2024-03-09 07:16:21.748 +00:00","TagId":6,"GameId":169},{"createdAt":"2024-03-09 07:16:21.748 +00:00","updatedAt":"2024-03-09 07:16:21.748 +00:00","TagId":3,"GameId":169},{"createdAt":"2024-03-09 07:16:21.748 +00:00","updatedAt":"2024-03-09 07:16:21.748 +00:00","TagId":7,"GameId":169},{"createdAt":"2024-03-09 07:16:22.159 +00:00","updatedAt":"2024-03-09 07:16:22.159 +00:00","TagId":3,"GameId":170},{"createdAt":"2024-03-09 07:16:22.159 +00:00","updatedAt":"2024-03-09 07:16:22.159 +00:00","TagId":5,"GameId":170},{"createdAt":"2024-03-09 07:16:22.455 +00:00","updatedAt":"2024-03-09 07:16:22.455 +00:00","TagId":1,"GameId":171},{"createdAt":"2024-03-09 07:16:22.708 +00:00","updatedAt":"2024-03-09 07:16:22.708 +00:00","TagId":2,"GameId":172},{"createdAt":"2024-03-09 07:16:22.708 +00:00","updatedAt":"2024-03-09 07:16:22.708 +00:00","TagId":3,"GameId":172},{"createdAt":"2024-03-09 07:16:23.026 +00:00","updatedAt":"2024-03-09 07:16:23.026 +00:00","TagId":1,"GameId":173},{"createdAt":"2024-03-09 07:16:23.026 +00:00","updatedAt":"2024-03-09 07:16:23.026 +00:00","TagId":3,"GameId":173},{"createdAt":"2024-03-09 07:16:23.026 +00:00","updatedAt":"2024-03-09 07:16:23.026 +00:00","TagId":9,"GameId":173},{"createdAt":"2024-03-09 07:16:23.026 +00:00","updatedAt":"2024-03-09 07:16:23.026 +00:00","TagId":7,"GameId":173},{"createdAt":"2024-03-09 07:16:23.026 +00:00","updatedAt":"2024-03-09 07:16:23.026 +00:00","TagId":5,"GameId":173},{"createdAt":"2024-03-09 07:16:23.358 +00:00","updatedAt":"2024-03-09 07:16:23.358 +00:00","TagId":1,"GameId":174},{"createdAt":"2024-03-09 07:16:23.358 +00:00","updatedAt":"2024-03-09 07:16:23.358 +00:00","TagId":3,"GameId":174},{"createdAt":"2024-03-09 07:16:23.815 +00:00","updatedAt":"2024-03-09 07:16:23.815 +00:00","TagId":7,"GameId":175},{"createdAt":"2024-03-09 07:16:24.185 +00:00","updatedAt":"2024-03-09 07:16:24.185 +00:00","TagId":6,"GameId":176},{"createdAt":"2024-03-09 07:16:24.185 +00:00","updatedAt":"2024-03-09 07:16:24.185 +00:00","TagId":3,"GameId":176},{"createdAt":"2024-03-09 07:16:24.185 +00:00","updatedAt":"2024-03-09 07:16:24.185 +00:00","TagId":4,"GameId":176},{"createdAt":"2024-03-09 07:16:24.185 +00:00","updatedAt":"2024-03-09 07:16:24.185 +00:00","TagId":5,"GameId":176},{"createdAt":"2024-03-09 07:16:24.185 +00:00","updatedAt":"2024-03-09 07:16:24.185 +00:00","TagId":12,"GameId":176},{"createdAt":"2024-03-09 07:16:24.515 +00:00","updatedAt":"2024-03-09 07:16:24.515 +00:00","TagId":6,"GameId":177},{"createdAt":"2024-03-09 07:16:24.515 +00:00","updatedAt":"2024-03-09 07:16:24.515 +00:00","TagId":3,"GameId":177},{"createdAt":"2024-03-09 07:16:24.515 +00:00","updatedAt":"2024-03-09 07:16:24.515 +00:00","TagId":7,"GameId":177},{"createdAt":"2024-03-09 07:16:24.515 +00:00","updatedAt":"2024-03-09 07:16:24.515 +00:00","TagId":5,"GameId":177},{"createdAt":"2024-03-09 07:16:24.830 +00:00","updatedAt":"2024-03-09 07:16:24.830 +00:00","TagId":2,"GameId":178},{"createdAt":"2024-03-09 07:16:24.830 +00:00","updatedAt":"2024-03-09 07:16:24.830 +00:00","TagId":9,"GameId":178},{"createdAt":"2024-03-09 07:16:24.830 
// +00:00","updatedAt":"2024-03-09 07:16:24.830 +00:00","TagId":5,"GameId":178},{"createdAt":"2024-03-09 07:16:24.830 +00:00","updatedAt":"2024-03-09 07:16:24.830 +00:00","TagId":8,"GameId":178},{"createdAt":"2024-03-09 07:16:25.156 +00:00","updatedAt":"2024-03-09 07:16:25.156 +00:00","TagId":4,"GameId":179},{"createdAt":"2024-03-09 07:16:25.156 +00:00","updatedAt":"2024-03-09 07:16:25.156 +00:00","TagId":5,"GameId":179},{"createdAt":"2024-03-09 07:16:26.544 +00:00","updatedAt":"2024-03-09 07:16:26.544 +00:00","TagId":2,"GameId":180},{"createdAt":"2024-03-09 07:16:26.544 +00:00","updatedAt":"2024-03-09 07:16:26.544 +00:00","TagId":4,"GameId":180},{"createdAt":"2024-03-09 07:16:26.917 +00:00","updatedAt":"2024-03-09 07:16:26.917 +00:00","TagId":6,"GameId":181},{"createdAt":"2024-03-09 07:16:26.917 +00:00","updatedAt":"2024-03-09 07:16:26.917 +00:00","TagId":7,"GameId":181},{"createdAt":"2024-03-09 07:16:27.321 +00:00","updatedAt":"2024-03-09 07:16:27.321 +00:00","TagId":1,"GameId":182},{"createdAt":"2024-03-09 07:16:27.678 +00:00","updatedAt":"2024-03-09 07:16:27.678 +00:00","TagId":1,"GameId":183},{"createdAt":"2024-03-09 07:16:27.678 +00:00","updatedAt":"2024-03-09 07:16:27.678 +00:00","TagId":6,"GameId":183},{"createdAt":"2024-03-09 07:16:27.678 +00:00","updatedAt":"2024-03-09 07:16:27.678 +00:00","TagId":2,"GameId":183},{"createdAt":"2024-03-09 07:16:27.678 +00:00","updatedAt":"2024-03-09 07:16:27.678 +00:00","TagId":4,"GameId":183},{"createdAt":"2024-03-09 07:16:27.678 +00:00","updatedAt":"2024-03-09 07:16:27.678 +00:00","TagId":5,"GameId":183},{"createdAt":"2024-03-09 07:16:28.042 +00:00","updatedAt":"2024-03-09 07:16:28.042 +00:00","TagId":2,"GameId":184},{"createdAt":"2024-03-09 07:16:28.042 +00:00","updatedAt":"2024-03-09 07:16:28.042 +00:00","TagId":3,"GameId":184},{"createdAt":"2024-03-09 07:16:28.042 +00:00","updatedAt":"2024-03-09 07:16:28.042 +00:00","TagId":7,"GameId":184},{"createdAt":"2024-03-09 07:16:28.042 +00:00","updatedAt":"2024-03-09 07:16:28.042 +00:00","TagId":4,"GameId":184},{"createdAt":"2024-03-09 07:16:28.042 +00:00","updatedAt":"2024-03-09 07:16:28.042 +00:00","TagId":5,"GameId":184},{"createdAt":"2024-03-09 07:16:28.042 +00:00","updatedAt":"2024-03-09 07:16:28.042 +00:00","TagId":8,"GameId":184},{"createdAt":"2024-03-09 07:16:28.406 +00:00","updatedAt":"2024-03-09 07:16:28.406 +00:00","TagId":3,"GameId":185},{"createdAt":"2024-03-09 07:16:28.406 +00:00","updatedAt":"2024-03-09 07:16:28.406 +00:00","TagId":5,"GameId":185},{"createdAt":"2024-03-09 07:16:28.714 +00:00","updatedAt":"2024-03-09 07:16:28.714 +00:00","TagId":2,"GameId":186},{"createdAt":"2024-03-09 07:16:28.714 +00:00","updatedAt":"2024-03-09 07:16:28.714 +00:00","TagId":7,"GameId":186},{"createdAt":"2024-03-09 07:16:28.714 +00:00","updatedAt":"2024-03-09 07:16:28.714 +00:00","TagId":8,"GameId":186},{"createdAt":"2024-03-09 07:16:29.077 +00:00","updatedAt":"2024-03-09 07:16:29.077 +00:00","TagId":2,"GameId":187},{"createdAt":"2024-03-09 07:16:29.077 +00:00","updatedAt":"2024-03-09 07:16:29.077 +00:00","TagId":3,"GameId":187},{"createdAt":"2024-03-09 07:16:29.077 +00:00","updatedAt":"2024-03-09 07:16:29.077 
// +00:00","TagId":4,"GameId":187},{"createdAt":"2024-03-09 07:16:29.077 +00:00","updatedAt":"2024-03-09 07:16:29.077 +00:00","TagId":11,"GameId":187},{"createdAt":"2024-03-09 07:16:29.474 +00:00","updatedAt":"2024-03-09 07:16:29.474 +00:00","TagId":1,"GameId":188},{"createdAt":"2024-03-09 07:16:29.474 +00:00","updatedAt":"2024-03-09 07:16:29.474 +00:00","TagId":6,"GameId":188},{"createdAt":"2024-03-09 07:16:29.474 +00:00","updatedAt":"2024-03-09 07:16:29.474 +00:00","TagId":9,"GameId":188},{"createdAt":"2024-03-09 07:16:29.474 +00:00","updatedAt":"2024-03-09 07:16:29.474 +00:00","TagId":8,"GameId":188},{"createdAt":"2024-03-09 07:16:29.945 +00:00","updatedAt":"2024-03-09 07:16:29.945 +00:00","TagId":5,"GameId":189},{"createdAt":"2024-03-09 07:16:29.945 +00:00","updatedAt":"2024-03-09 07:16:29.945 +00:00","TagId":8,"GameId":189},{"createdAt":"2024-03-09 07:16:29.945 +00:00","updatedAt":"2024-03-09 07:16:29.945 +00:00","TagId":12,"GameId":189},{"createdAt":"2024-03-09 07:16:30.257 +00:00","updatedAt":"2024-03-09 07:16:30.257 +00:00","TagId":4,"GameId":190},{"createdAt":"2024-03-09 07:16:30.257 +00:00","updatedAt":"2024-03-09 07:16:30.257 +00:00","TagId":5,"GameId":190},{"createdAt":"2024-03-09 07:16:30.665 +00:00","updatedAt":"2024-03-09 07:16:30.665 +00:00","TagId":1,"GameId":191},{"createdAt":"2024-03-09 07:16:30.665 +00:00","updatedAt":"2024-03-09 07:16:30.665 +00:00","TagId":6,"GameId":191},{"createdAt":"2024-03-09 07:16:31.073 +00:00","updatedAt":"2024-03-09 07:16:31.073 +00:00","TagId":1,"GameId":192},{"createdAt":"2024-03-09 07:16:31.073 +00:00","updatedAt":"2024-03-09 07:16:31.073 +00:00","TagId":6,"GameId":192},{"createdAt":"2024-03-09 07:16:31.073 +00:00","updatedAt":"2024-03-09 07:16:31.073 +00:00","TagId":2,"GameId":192},{"createdAt":"2024-03-09 07:16:31.073 +00:00","updatedAt":"2024-03-09 07:16:31.073 +00:00","TagId":3,"GameId":192},{"createdAt":"2024-03-09 07:16:31.390 +00:00","updatedAt":"2024-03-09 07:16:31.390 +00:00","TagId":1,"GameId":193},{"createdAt":"2024-03-09 07:16:31.390 +00:00","updatedAt":"2024-03-09 07:16:31.390 +00:00","TagId":6,"GameId":193},{"createdAt":"2024-03-09 07:16:31.390 +00:00","updatedAt":"2024-03-09 07:16:31.390 +00:00","TagId":3,"GameId":193},{"createdAt":"2024-03-09 07:16:31.750 +00:00","updatedAt":"2024-03-09 07:16:31.750 +00:00","TagId":2,"GameId":194},{"createdAt":"2024-03-09 07:16:31.750 +00:00","updatedAt":"2024-03-09 07:16:31.750 +00:00","TagId":3,"GameId":194},{"createdAt":"2024-03-09 07:16:31.750 +00:00","updatedAt":"2024-03-09 07:16:31.750 +00:00","TagId":5,"GameId":194},{"createdAt":"2024-03-09 07:16:32.140 +00:00","updatedAt":"2024-03-09 07:16:32.140 +00:00","TagId":3,"GameId":195},{"createdAt":"2024-03-09 07:16:32.140 +00:00","updatedAt":"2024-03-09 07:16:32.140 +00:00","TagId":5,"GameId":195},{"createdAt":"2024-03-09 07:16:32.480 +00:00","updatedAt":"2024-03-09 07:16:32.480 +00:00","TagId":1,"GameId":196},{"createdAt":"2024-03-09 07:16:32.480 +00:00","updatedAt":"2024-03-09 07:16:32.480 +00:00","TagId":9,"GameId":196},{"createdAt":"2024-03-09 07:16:32.480 +00:00","updatedAt":"2024-03-09 07:16:32.480 +00:00","TagId":4,"GameId":196},{"createdAt":"2024-03-09 07:16:32.480 +00:00","updatedAt":"2024-03-09 07:16:32.480 +00:00","TagId":5,"GameId":196},{"createdAt":"2024-03-09 07:16:32.480 +00:00","updatedAt":"2024-03-09 07:16:32.480 +00:00","TagId":12,"GameId":196},{"createdAt":"2024-03-09 07:16:32.865 +00:00","updatedAt":"2024-03-09 07:16:32.865 +00:00","TagId":6,"GameId":197},{"createdAt":"2024-03-09 07:16:32.865 +00:00","updatedAt":"2024-03-09 07:16:32.865 +00:00","TagId":2,"GameId":197},{"createdAt":"2024-03-09 07:16:32.865 +00:00","updatedAt":"2024-03-09 07:16:32.865 +00:00","TagId":3,"GameId":197},{"createdAt":"2024-03-09 07:16:33.163 +00:00","updatedAt":"2024-03-09 07:16:33.163 +00:00","TagId":1,"GameId":198},{"createdAt":"2024-03-09 07:16:33.163 +00:00","updatedAt":"2024-03-09 07:16:33.163 +00:00","TagId":2,"GameId":198},{"createdAt":"2024-03-09 07:16:33.163 +00:00","updatedAt":"2024-03-09 07:16:33.163 +00:00","TagId":3,"GameId":198},{"createdAt":"2024-03-09 07:16:33.512 +00:00","updatedAt":"2024-03-09 07:16:33.512 +00:00","TagId":6,"GameId":199},{"createdAt":"2024-03-09 07:16:33.512 +00:00","updatedAt":"2024-03-09 07:16:33.512 +00:00","TagId":3,"GameId":199},{"createdAt":"2024-03-09 07:16:33.902 +00:00","updatedAt":"2024-03-09 07:16:33.902 +00:00","TagId":3,"GameId":200},{"createdAt":"2024-03-09 07:16:33.902 +00:00","updatedAt":"2024-03-09 07:16:33.902 +00:00","TagId":4,"GameId":200},{"createdAt":"2024-03-09 07:16:33.902 +00:00","updatedAt":"2024-03-09 07:16:33.902 +00:00","TagId":5,"GameId":200},{"createdAt":"2024-03-09 07:16:33.902 +00:00","updatedAt":"2024-03-09 07:16:33.902 +00:00","TagId":12,"GameId":200},{"createdAt":"2024-03-09 07:16:34.211 +00:00","updatedAt":"2024-03-09 07:16:34.211 +00:00","TagId":2,"GameId":201},{"createdAt":"2024-03-09 07:16:34.211 +00:00","updatedAt":"2024-03-09 07:16:34.211 +00:00","TagId":4,"GameId":201},{"createdAt":"2024-03-09 07:16:34.211 +00:00","updatedAt":"2024-03-09 07:16:34.211 +00:00","TagId":5,"GameId":201},{"createdAt":"2024-03-09 07:16:34.601 +00:00","updatedAt":"2024-03-09 07:16:34.601 +00:00","TagId":1,"GameId":202},{"createdAt":"2024-03-09 07:16:34.601 +00:00","updatedAt":"2024-03-09 07:16:34.601 +00:00","TagId":3,"GameId":202},{"createdAt":"2024-03-09 07:16:34.601 +00:00","updatedAt":"2024-03-09 07:16:34.601 +00:00","TagId":10,"GameId":202},{"createdAt":"2024-03-09 07:16:34.601 +00:00","updatedAt":"2024-03-09 07:16:34.601 +00:00","TagId":4,"GameId":202},{"createdAt":"2024-03-09 07:16:34.601 +00:00","updatedAt":"2024-03-09 07:16:34.601 +00:00","TagId":11,"GameId":202},{"createdAt":"2024-03-09 07:16:35.042 +00:00","updatedAt":"2024-03-09 07:16:35.042 +00:00","TagId":2,"GameId":203},{"createdAt":"2024-03-09 07:16:35.042 +00:00","updatedAt":"2024-03-09 07:16:35.042 +00:00","TagId":3,"GameId":203},{"createdAt":"2024-03-09 07:16:35.042 +00:00","updatedAt":"2024-03-09 07:16:35.042 +00:00","TagId":4,"GameId":203},{"createdAt":"2024-03-09 07:16:35.380 +00:00","updatedAt":"2024-03-09 07:16:35.380 +00:00","TagId":1,"GameId":204},{"createdAt":"2024-03-09 07:16:35.380 +00:00","updatedAt":"2024-03-09 07:16:35.380 +00:00","TagId":6,"GameId":204},{"createdAt":"2024-03-09 07:16:35.380 +00:00","updatedAt":"2024-03-09 07:16:35.380 +00:00","TagId":3,"GameId":204},{"createdAt":"2024-03-09 07:16:35.699 +00:00","updatedAt":"2024-03-09 07:16:35.699 +00:00","TagId":1,"GameId":205},{"createdAt":"2024-03-09 07:16:35.699 +00:00","updatedAt":"2024-03-09 07:16:35.699 +00:00","TagId":5,"GameId":205},{"createdAt":"2024-03-09 07:16:36.236 +00:00","updatedAt":"2024-03-09 07:16:36.236 +00:00","TagId":1,"GameId":206},{"createdAt":"2024-03-09 07:16:36.236 +00:00","updatedAt":"2024-03-09 07:16:36.236 +00:00","TagId":6,"GameId":206},{"createdAt":"2024-03-09 07:16:36.592 +00:00","updatedAt":"2024-03-09 07:16:36.592 +00:00","TagId":1,"GameId":207},{"createdAt":"2024-03-09 07:16:36.592 +00:00","updatedAt":"2024-03-09 07:16:36.592 +00:00","TagId":8,"GameId":207},{"createdAt":"2024-03-09 07:16:36.924 +00:00","updatedAt":"2024-03-09 07:16:36.924 +00:00","TagId":1,"GameId":208},{"createdAt":"2024-03-09 07:16:36.924 +00:00","updatedAt":"2024-03-09 07:16:36.924 +00:00","TagId":6,"GameId":208},{"createdAt":"2024-03-09 07:16:36.924 +00:00","updatedAt":"2024-03-09 07:16:36.924 +00:00","TagId":7,"GameId":208},{"createdAt":"2024-03-09 07:16:37.275 +00:00","updatedAt":"2024-03-09 07:16:37.275 +00:00","TagId":1,"GameId":209},{"createdAt":"2024-03-09 07:16:37.275 +00:00","updatedAt":"2024-03-09 07:16:37.275 +00:00","TagId":11,"GameId":209},{"createdAt":"2024-03-09 07:16:37.625 +00:00","updatedAt":"2024-03-09 07:16:37.625 +00:00","TagId":2,"GameId":210},{"createdAt":"2024-03-09 07:16:37.625 +00:00","updatedAt":"2024-03-09 07:16:37.625 +00:00","TagId":3,"GameId":210},{"createdAt":"2024-03-09 07:16:37.625 +00:00","updatedAt":"2024-03-09 07:16:37.625 +00:00","TagId":5,"GameId":210},{"createdAt":"2024-03-09 07:16:37.901 +00:00","updatedAt":"2024-03-09 07:16:37.901 +00:00","TagId":3,"GameId":211},{"createdAt":"2024-03-09 07:16:37.901 +00:00","updatedAt":"2024-03-09 07:16:37.901 +00:00","TagId":5,"GameId":211},{"createdAt":"2024-03-09 07:16:37.901 +00:00","updatedAt":"2024-03-09 07:16:37.901 +00:00","TagId":12,"GameId":211},{"createdAt":"2024-03-09 07:16:38.380 +00:00","updatedAt":"2024-03-09 07:16:38.380 +00:00","TagId":1,"GameId":212},{"createdAt":"2024-03-09 07:16:38.380 +00:00","updatedAt":"2024-03-09 07:16:38.380 +00:00","TagId":6,"GameId":212},{"createdAt":"2024-03-09 07:16:38.380 +00:00","updatedAt":"2024-03-09 07:16:38.380 +00:00","TagId":2,"GameId":212},{"createdAt":"2024-03-09 07:16:38.380 +00:00","updatedAt":"2024-03-09 07:16:38.380 +00:00","TagId":3,"GameId":212},{"createdAt":"2024-03-09 07:16:38.380 +00:00","updatedAt":"2024-03-09 07:16:38.380 +00:00","TagId":4,"GameId":212},{"createdAt":"2024-03-09 07:16:38.691 +00:00","updatedAt":"2024-03-09 07:16:38.691 +00:00","TagId":5,"GameId":213},{"createdAt":"2024-03-09 07:16:38.977 +00:00","updatedAt":"2024-03-09 07:16:38.977 +00:00","TagId":1,"GameId":214},{"createdAt":"2024-03-09 07:16:38.977 +00:00","updatedAt":"2024-03-09 07:16:38.977 +00:00","TagId":3,"GameId":214},{"createdAt":"2024-03-09 07:16:38.977 +00:00","updatedAt":"2024-03-09 07:16:38.977 +00:00","TagId":5,"GameId":214},{"createdAt":"2024-03-09 07:16:39.394 +00:00","updatedAt":"2024-03-09 07:16:39.394 +00:00","TagId":1,"GameId":215},{"createdAt":"2024-03-09 07:16:39.394 +00:00","updatedAt":"2024-03-09 07:16:39.394 +00:00","TagId":6,"GameId":215},{"createdAt":"2024-03-09 07:16:39.394 +00:00","updatedAt":"2024-03-09 07:16:39.394 +00:00","TagId":3,"GameId":215},{"createdAt":"2024-03-09 07:16:39.394 +00:00","updatedAt":"2024-03-09 07:16:39.394 +00:00","TagId":7,"GameId":215},{"createdAt":"2024-03-09 07:16:39.394 +00:00","updatedAt":"2024-03-09 07:16:39.394 +00:00","TagId":4,"GameId":215},{"createdAt":"2024-03-09 07:16:39.394 +00:00","updatedAt":"2024-03-09 07:16:39.394 +00:00","TagId":5,"GameId":215},{"createdAt":"2024-03-09 07:16:39.777 +00:00","updatedAt":"2024-03-09 07:16:39.777 +00:00","TagId":1,"GameId":216},{"createdAt":"2024-03-09 07:16:39.777 +00:00","updatedAt":"2024-03-09 07:16:39.777 +00:00","TagId":8,"GameId":216},{"createdAt":"2024-03-09 07:16:39.777 +00:00","updatedAt":"2024-03-09 07:16:39.777 +00:00","TagId":12,"GameId":216},{"createdAt":"2024-03-09 07:16:40.224 +00:00","updatedAt":"2024-03-09 07:16:40.224 +00:00","TagId":1,"GameId":217},{"createdAt":"2024-03-09 07:16:40.224 +00:00","updatedAt":"2024-03-09 07:16:40.224 +00:00","TagId":8,"GameId":217},{"createdAt":"2024-03-09 07:16:40.224 +00:00","updatedAt":"2024-03-09 07:16:40.224 +00:00","TagId":3,"GameId":217},{"createdAt":"2024-03-09 07:16:40.573 +00:00","updatedAt":"2024-03-09 07:16:40.573 +00:00","TagId":5,"GameId":218},{"createdAt":"2024-03-09 07:16:40.880 +00:00","updatedAt":"2024-03-09 07:16:40.880 +00:00","TagId":2,"GameId":219},{"createdAt":"2024-03-09 07:16:40.880 +00:00","updatedAt":"2024-03-09 07:16:40.880 +00:00","TagId":3,"GameId":219},{"createdAt":"2024-03-09 07:16:40.880 +00:00","updatedAt":"2024-03-09 07:16:40.880 +00:00","TagId":5,"GameId":219},{"createdAt":"2024-03-09 07:16:41.236 +00:00","updatedAt":"2024-03-09 07:16:41.236 +00:00","TagId":1,"GameId":220},{"createdAt":"2024-03-09 07:16:41.236 +00:00","updatedAt":"2024-03-09 07:16:41.236 +00:00","TagId":3,"GameId":220},{"createdAt":"2024-03-09 07:16:41.499 +00:00","updatedAt":"2024-03-09 07:16:41.499 +00:00","TagId":1,"GameId":221},{"createdAt":"2024-03-09 07:16:41.499 +00:00","updatedAt":"2024-03-09 07:16:41.499 +00:00","TagId":3,"GameId":221},{"createdAt":"2024-03-09 07:16:41.809 +00:00","updatedAt":"2024-03-09 07:16:41.809 +00:00","TagId":1,"GameId":222},{"createdAt":"2024-03-09 07:16:41.809 +00:00","updatedAt":"2024-03-09 07:16:41.809 +00:00","TagId":3,"GameId":222},{"createdAt":"2024-03-09 07:16:41.809 +00:00","updatedAt":"2024-03-09 07:16:41.809 +00:00","TagId":10,"GameId":222},{"createdAt":"2024-03-09 07:16:41.809 +00:00","updatedAt":"2024-03-09 07:16:41.809 +00:00","TagId":11,"GameId":222},{"createdAt":"2024-03-09 07:16:42.236 +00:00","updatedAt":"2024-03-09 07:16:42.236 +00:00","TagId":1,"GameId":223},{"createdAt":"2024-03-09 07:16:42.236 +00:00","updatedAt":"2024-03-09 07:16:42.236 +00:00","TagId":6,"GameId":223},{"createdAt":"2024-03-09 07:16:42.236 +00:00","updatedAt":"2024-03-09 07:16:42.236 +00:00","TagId":3,"GameId":223},{"createdAt":"2024-03-09 07:16:42.236 +00:00","updatedAt":"2024-03-09 07:16:42.236 +00:00","TagId":7,"GameId":223},{"createdAt":"2024-03-09 07:16:42.655 +00:00","updatedAt":"2024-03-09 07:16:42.655 +00:00","TagId":1,"GameId":224},{"createdAt":"2024-03-09 07:16:42.655 +00:00","updatedAt":"2024-03-09 07:16:42.655 +00:00","TagId":2,"GameId":224},{"createdAt":"2024-03-09 07:16:42.655 +00:00","updatedAt":"2024-03-09 07:16:42.655 +00:00","TagId":3,"GameId":224},{"createdAt":"2024-03-09 07:16:42.978 +00:00","updatedAt":"2024-03-09 07:16:42.978 +00:00","TagId":1,"GameId":225},{"createdAt":"2024-03-09 07:16:42.978 +00:00","updatedAt":"2024-03-09 07:16:42.978 +00:00","TagId":6,"GameId":225},{"createdAt":"2024-03-09 07:16:42.978 +00:00","updatedAt":"2024-03-09 07:16:42.978 +00:00","TagId":3,"GameId":225},{"createdAt":"2024-03-09 07:16:42.978 +00:00","updatedAt":"2024-03-09 07:16:42.978 +00:00","TagId":7,"GameId":225},{"createdAt":"2024-03-09 07:16:42.978 +00:00","updatedAt":"2024-03-09 07:16:42.978 +00:00","TagId":12,"GameId":225},{"createdAt":"2024-03-09 07:16:43.279 +00:00","updatedAt":"2024-03-09 07:16:43.279 +00:00","TagId":1,"GameId":226},{"createdAt":"2024-03-09 07:16:43.279 +00:00","updatedAt":"2024-03-09 07:16:43.279 +00:00","TagId":3,"GameId":226},{"createdAt":"2024-03-09 07:21:21.270 +00:00","updatedAt":"2024-03-09 07:21:21.270 +00:00","TagId":13,"GameId":2},{"createdAt":"2024-03-09 07:36:38.579 +00:00","updatedAt":"2024-03-09 07:36:38.579 +00:00","TagId":14,"GameId":3},{"createdAt":"2024-03-09 07:36:38.579 +00:00","updatedAt":"2024-03-09 07:36:38.579 +00:00","TagId":15,"GameId":3},{"createdAt":"2024-03-09 07:37:53.277 +00:00","updatedAt":"2024-03-09 07:37:53.277 +00:00","TagId":14,"GameId":4},{"createdAt":"2024-03-09 07:38:10.666 +00:00","updatedAt":"2024-03-09 07:38:10.666 +00:00","TagId":15,"GameId":4},{"createdAt":"2024-03-09 07:39:38.532 +00:00","updatedAt":"2024-03-09 07:39:38.532 +00:00","TagId":17,"GameId":5},{"createdAt":"2024-03-09 07:39:38.532 +00:00","updatedAt":"2024-03-09 07:39:38.532 +00:00","TagId":18,"GameId":5},{"createdAt":"2024-03-09 07:45:25.664 +00:00","updatedAt":"2024-03-09 07:45:25.664 +00:00","TagId":18,"GameId":6},{"createdAt":"2024-03-09 07:45:25.664 +00:00","updatedAt":"2024-03-09 07:45:25.664 +00:00","TagId":19,"GameId":6},{"createdAt":"2024-03-09 07:47:41.738 +00:00","updatedAt":"2024-03-09 07:47:41.738 +00:00","TagId":15,"GameId":7},{"createdAt":"2024-03-09 07:47:41.738 +00:00","updatedAt":"2024-03-09 07:47:41.738 +00:00","TagId":20,"GameId":7},{"createdAt":"2024-03-09 07:48:45.307 +00:00","updatedAt":"2024-03-09 07:48:45.307 +00:00","TagId":15,"GameId":8},{"createdAt":"2024-03-09 07:48:45.307 +00:00","updatedAt":"2024-03-09 07:48:45.307 +00:00","TagId":20,"GameId":8},{"createdAt":"2024-03-09 07:52:26.574 +00:00","updatedAt":"2024-03-09 07:52:26.574 +00:00","TagId":15,"GameId":9},{"createdAt":"2024-03-09 07:52:26.574 +00:00","updatedAt":"2024-03-09 07:52:26.574 +00:00","TagId":20,"GameId":9},{"createdAt":"2024-03-09 07:52:56.934 +00:00","updatedAt":"2024-03-09 07:52:56.934 +00:00","TagId":15,"GameId":10},{"createdAt":"2024-03-09 07:52:56.934 +00:00","updatedAt":"2024-03-09 07:52:56.934 +00:00","TagId":20,"GameId":10},{"createdAt":"2024-03-09 07:53:43.833 +00:00","updatedAt":"2024-03-09 07:53:43.833 +00:00","TagId":18,"GameId":11},{"createdAt":"2024-03-09 07:54:39.102 +00:00","updatedAt":"2024-03-09 07:54:39.102 +00:00","TagId":21,"GameId":12},{"createdAt":"2024-03-09 07:54:39.102 +00:00","updatedAt":"2024-03-09 07:54:39.102 +00:00","TagId":22,"GameId":12},{"createdAt":"2024-03-09 07:54:39.102 +00:00","updatedAt":"2024-03-09 07:54:39.102 +00:00","TagId":2,"GameId":12},{"createdAt":"2024-03-09 07:55:58.967 +00:00","updatedAt":"2024-03-09 07:55:58.967 +00:00","TagId":23,"GameId":13},{"createdAt":"2024-03-09 07:55:58.967 +00:00","updatedAt":"2024-03-09 07:55:58.967 +00:00","TagId":24,"GameId":13},{"createdAt":"2024-03-09 07:57:10.679 +00:00","updatedAt":"2024-03-09 07:57:10.679 +00:00","TagId":15,"GameId":15},{"createdAt":"2024-03-09 07:57:10.679 +00:00","updatedAt":"2024-03-09 07:57:10.679 +00:00","TagId":18,"GameId":15},{"createdAt":"2024-03-09 07:59:10.949 +00:00","updatedAt":"2024-03-09 07:59:10.949 +00:00","TagId":25,"GameId":16},{"createdAt":"2024-03-09 07:59:10.949 +00:00","updatedAt":"2024-03-09 07:59:10.949 +00:00","TagId":26,"GameId":16},{"createdAt":"2024-03-09 07:59:10.949 +00:00","updatedAt":"2024-03-09 07:59:10.949 +00:00","TagId":27,"GameId":16},{"createdAt":"2024-03-09 08:00:42.537 +00:00","updatedAt":"2024-03-09 08:00:42.537 +00:00","TagId":15,"GameId":17},{"createdAt":"2024-03-09 08:00:42.537 +00:00","updatedAt":"2024-03-09 08:00:42.537 +00:00","TagId":14,"GameId":17},{"createdAt":"2024-03-09 08:00:42.537 +00:00","updatedAt":"2024-03-09 08:00:42.537 +00:00","TagId":22,"GameId":17},{"createdAt":"2024-03-09 08:00:42.537 +00:00","updatedAt":"2024-03-09 08:00:42.537 +00:00","TagId":23,"GameId":17},{"createdAt":"2024-03-09 08:01:06.954 +00:00","updatedAt":"2024-03-09 08:01:06.954 +00:00","TagId":22,"GameId":18},{"createdAt":"2024-03-09 08:01:06.954 +00:00","updatedAt":"2024-03-09 08:01:06.954 +00:00","TagId":28,"GameId":18},{"createdAt":"2024-03-09 08:01:06.954 +00:00","updatedAt":"2024-03-09 08:01:06.954 +00:00","TagId":29,"GameId":18},{"createdAt":"2024-03-09 08:01:23.449 +00:00","updatedAt":"2024-03-09 08:01:23.449 +00:00","TagId":29,"GameId":2},{"createdAt":"2024-03-09 08:02:25.549 +00:00","updatedAt":"2024-03-09 08:02:25.549 +00:00","TagId":30,"GameId":19},{"createdAt":"2024-03-09 08:02:25.549 +00:00","updatedAt":"2024-03-09 08:02:25.549 +00:00","TagId":31,"GameId":19},{"createdAt":"2024-03-09 08:03:15.776 +00:00","updatedAt":"2024-03-09 08:03:15.776 +00:00","TagId":32,"GameId":20},{"createdAt":"2024-03-09 08:03:15.776 +00:00","updatedAt":"2024-03-09 08:03:15.776 +00:00","TagId":33,"GameId":20},{"createdAt":"2024-03-09 08:04:16.567 +00:00","updatedAt":"2024-03-09 08:04:16.567 +00:00","TagId":34,"GameId":21},{"createdAt":"2024-03-09 08:04:16.567 +00:00","updatedAt":"2024-03-09 08:04:16.567 +00:00","TagId":14,"GameId":21}],{}]
// userPlatformMappings
// Executing (default): select * from userPlatformMappings
// [,{}]
// Game_SteamUserPlatformMapping
// Executing (default): select * from Game_SteamUserPlatformMapping
// [[{"createdAt":"2024-03-09 07:02:23.326 +00:00","updatedAt":"2024-03-09 07:02:23.326 +00:00","GameId":1,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:23.742 +00:00","updatedAt":"2024-03-09 07:02:23.742 +00:00","GameId":2,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:24.049 +00:00","updatedAt":"2024-03-09 07:02:24.049 +00:00","GameId":3,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:24.464 +00:00","updatedAt":"2024-03-09 07:02:24.464 +00:00","GameId":4,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:24.693 +00:00","updatedAt":"2024-03-09 07:02:24.693 +00:00","GameId":5,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:24.936 +00:00","updatedAt":"2024-03-09 07:02:24.936 +00:00","GameId":6,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:25.207 +00:00","updatedAt":"2024-03-09 07:02:25.207 +00:00","GameId":7,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:25.451 +00:00","updatedAt":"2024-03-09 07:02:25.451 +00:00","GameId":8,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:25.776 +00:00","updatedAt":"2024-03-09 07:02:25.776 +00:00","GameId":9,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:26.066 +00:00","updatedAt":"2024-03-09 07:02:26.066 +00:00","GameId":10,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:26.346 +00:00","updatedAt":"2024-03-09 07:02:26.346 +00:00","GameId":11,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:26.591 +00:00","updatedAt":"2024-03-09 07:02:26.591 +00:00","GameId":12,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:26.901 +00:00","updatedAt":"2024-03-09 07:02:26.901 +00:00","GameId":13,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:27.147 +00:00","updatedAt":"2024-03-09 07:02:27.147 +00:00","GameId":14,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:27.420 +00:00","updatedAt":"2024-03-09 07:02:27.420 +00:00","GameId":15,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:27.725 +00:00","updatedAt":"2024-03-09 07:02:27.725 +00:00","GameId":16,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:28.119 +00:00","updatedAt":"2024-03-09 07:02:28.119 +00:00","GameId":17,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:28.357 +00:00","updatedAt":"2024-03-09 07:02:28.357 +00:00","GameId":18,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 
// 07:02:28.619 +00:00","updatedAt":"2024-03-09 07:02:28.619 +00:00","GameId":19,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:28.885 +00:00","updatedAt":"2024-03-09 07:02:28.885 +00:00","GameId":20,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:29.348 +00:00","updatedAt":"2024-03-09 07:02:29.348 +00:00","GameId":21,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:29.746 +00:00","updatedAt":"2024-03-09 07:02:29.746 +00:00","GameId":22,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:30.022 +00:00","updatedAt":"2024-03-09 07:02:30.022 +00:00","GameId":23,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:30.356 +00:00","updatedAt":"2024-03-09 07:02:30.356 +00:00","GameId":24,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:30.652 +00:00","updatedAt":"2024-03-09 07:02:30.652 +00:00","GameId":25,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:30.974 +00:00","updatedAt":"2024-03-09 07:02:30.974 +00:00","GameId":26,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:31.294 +00:00","updatedAt":"2024-03-09 07:02:31.294 +00:00","GameId":27,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:31.581 +00:00","updatedAt":"2024-03-09 07:02:31.581 +00:00","GameId":28,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:31.819 +00:00","updatedAt":"2024-03-09 07:02:31.819 +00:00","GameId":29,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:32.477 +00:00","updatedAt":"2024-03-09 07:02:32.477 +00:00","GameId":31,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:32.852 +00:00","updatedAt":"2024-03-09 07:02:32.852 +00:00","GameId":32,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:02:33.183 +00:00","updatedAt":"2024-03-09 07:02:33.183 +00:00","GameId":33,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:10:49.535 +00:00","updatedAt":"2024-03-09 07:10:49.535 +00:00","GameId":35,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:32.576 +00:00","updatedAt":"2024-03-09 07:15:32.576 +00:00","GameId":36,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:33.159 +00:00","updatedAt":"2024-03-09 07:15:33.159 +00:00","GameId":37,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:33.436 +00:00","updatedAt":"2024-03-09 07:15:33.436 +00:00","GameId":38,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:33.777 +00:00","updatedAt":"2024-03-09 07:15:33.777 +00:00","GameId":39,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:34.067 +00:00","updatedAt":"2024-03-09 07:15:34.067 +00:00","GameId":40,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:34.353 +00:00","updatedAt":"2024-03-09 07:15:34.353 +00:00","GameId":41,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:35.067 +00:00","updatedAt":"2024-03-09 07:15:35.067 +00:00","GameId":42,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:35.361 +00:00","updatedAt":"2024-03-09 07:15:35.361 +00:00","GameId":43,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:35.788 +00:00","updatedAt":"2024-03-09 07:15:35.788 +00:00","GameId":44,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:36.290 +00:00","updatedAt":"2024-03-09 07:15:36.290 +00:00","GameId":45,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:36.551 +00:00","updatedAt":"2024-03-09 07:15:36.551 +00:00","GameId":46,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:36.852 +00:00","updatedAt":"2024-03-09 07:15:36.852 +00:00","GameId":47,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:37.153 +00:00","updatedAt":"2024-03-09 07:15:37.153 +00:00","GameId":48,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:37.551 +00:00","updatedAt":"2024-03-09 07:15:37.551 +00:00","GameId":49,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:37.818 +00:00","updatedAt":"2024-03-09 07:15:37.818 +00:00","GameId":50,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:38.115 +00:00","updatedAt":"2024-03-09 07:15:38.115 +00:00","GameId":51,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:38.535 +00:00","updatedAt":"2024-03-09 07:15:38.535 +00:00","GameId":52,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:38.945 +00:00","updatedAt":"2024-03-09 07:15:38.945 +00:00","GameId":53,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:39.285 +00:00","updatedAt":"2024-03-09 07:15:39.285 +00:00","GameId":54,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:39.638 +00:00","updatedAt":"2024-03-09 07:15:39.638 +00:00","GameId":55,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:40.175 +00:00","updatedAt":"2024-03-09 07:15:40.175 +00:00","GameId":56,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:40.521 +00:00","updatedAt":"2024-03-09 07:15:40.521 +00:00","GameId":57,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:40.890 +00:00","updatedAt":"2024-03-09 07:15:40.890 +00:00","GameId":58,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:41.230 +00:00","updatedAt":"2024-03-09 07:15:41.230 +00:00","GameId":59,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:41.622 +00:00","updatedAt":"2024-03-09 07:15:41.622 +00:00","GameId":60,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:41.984 +00:00","updatedAt":"2024-03-09 07:15:41.984 +00:00","GameId":61,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:42.602 +00:00","updatedAt":"2024-03-09 07:15:42.602 +00:00","GameId":62,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:42.884 +00:00","updatedAt":"2024-03-09 07:15:42.884 +00:00","GameId":63,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:43.263 +00:00","updatedAt":"2024-03-09 07:15:43.263 +00:00","GameId":64,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:43.586 +00:00","updatedAt":"2024-03-09 07:15:43.586 +00:00","GameId":65,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:43.901 +00:00","updatedAt":"2024-03-09 
// 07:15:43.901 +00:00","GameId":66,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:44.453 +00:00","updatedAt":"2024-03-09 07:15:44.453 +00:00","GameId":67,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:44.827 +00:00","updatedAt":"2024-03-09 07:15:44.827 +00:00","GameId":68,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:45.168 +00:00","updatedAt":"2024-03-09 07:15:45.168 +00:00","GameId":69,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:45.455 +00:00","updatedAt":"2024-03-09 07:15:45.455 +00:00","GameId":70,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:45.728 +00:00","updatedAt":"2024-03-09 07:15:45.728 +00:00","GameId":71,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:46.130 +00:00","updatedAt":"2024-03-09 07:15:46.130 +00:00","GameId":72,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:46.497 +00:00","updatedAt":"2024-03-09 07:15:46.497 +00:00","GameId":73,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:46.901 +00:00","updatedAt":"2024-03-09 07:15:46.901 +00:00","GameId":74,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:47.165 +00:00","updatedAt":"2024-03-09 07:15:47.165 +00:00","GameId":75,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:47.415 +00:00","updatedAt":"2024-03-09 07:15:47.415 +00:00","GameId":76,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:47.679 +00:00","updatedAt":"2024-03-09 07:15:47.679 +00:00","GameId":77,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:47.989 +00:00","updatedAt":"2024-03-09 07:15:47.989 +00:00","GameId":78,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:48.343 +00:00","updatedAt":"2024-03-09 07:15:48.343 +00:00","GameId":79,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:48.639 +00:00","updatedAt":"2024-03-09 07:15:48.639 +00:00","GameId":80,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:48.969 +00:00","updatedAt":"2024-03-09 07:15:48.969 +00:00","GameId":81,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:49.284 +00:00","updatedAt":"2024-03-09 07:15:49.284 +00:00","GameId":82,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:49.677 +00:00","updatedAt":"2024-03-09 07:15:49.677 +00:00","GameId":83,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:49.968 +00:00","updatedAt":"2024-03-09 07:15:49.968 +00:00","GameId":84,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:50.352 +00:00","updatedAt":"2024-03-09 07:15:50.352 +00:00","GameId":85,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:50.636 +00:00","updatedAt":"2024-03-09 07:15:50.636 +00:00","GameId":86,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:51.029 +00:00","updatedAt":"2024-03-09 07:15:51.029 +00:00","GameId":87,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:51.310 +00:00","updatedAt":"2024-03-09 07:15:51.310 +00:00","GameId":88,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:51.728 +00:00","updatedAt":"2024-03-09 07:15:51.728 +00:00","GameId":89,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:52.057 +00:00","updatedAt":"2024-03-09 07:15:52.057 +00:00","GameId":90,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:52.407 +00:00","updatedAt":"2024-03-09 07:15:52.407 +00:00","GameId":91,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:52.693 +00:00","updatedAt":"2024-03-09 07:15:52.693 +00:00","GameId":92,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:53.057 +00:00","updatedAt":"2024-03-09 07:15:53.057 +00:00","GameId":93,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:53.395 +00:00","updatedAt":"2024-03-09 07:15:53.395 +00:00","GameId":94,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:53.868 +00:00","updatedAt":"2024-03-09 07:15:53.868 +00:00","GameId":95,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:54.221 +00:00","updatedAt":"2024-03-09 07:15:54.221 +00:00","GameId":96,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:54.501 +00:00","updatedAt":"2024-03-09 07:15:54.501 +00:00","GameId":97,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:54.807 +00:00","updatedAt":"2024-03-09 07:15:54.807 +00:00","GameId":98,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:55.102 +00:00","updatedAt":"2024-03-09 07:15:55.102 +00:00","GameId":99,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:55.397 +00:00","updatedAt":"2024-03-09 07:15:55.397 +00:00","GameId":100,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:55.766 +00:00","updatedAt":"2024-03-09 07:15:55.766 +00:00","GameId":101,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:56.124 +00:00","updatedAt":"2024-03-09 07:15:56.124 +00:00","GameId":102,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:56.458 +00:00","updatedAt":"2024-03-09 07:15:56.458 +00:00","GameId":103,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:56.852 +00:00","updatedAt":"2024-03-09 07:15:56.852 +00:00","GameId":104,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:57.179 +00:00","updatedAt":"2024-03-09 07:15:57.179 +00:00","GameId":105,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:57.497 +00:00","updatedAt":"2024-03-09 07:15:57.497 +00:00","GameId":106,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:57.900 +00:00","updatedAt":"2024-03-09 07:15:57.900 +00:00","GameId":107,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:58.189 +00:00","updatedAt":"2024-03-09 07:15:58.189 +00:00","GameId":108,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:58.520 +00:00","updatedAt":"2024-03-09 07:15:58.520 +00:00","GameId":109,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:58.911 +00:00","updatedAt":"2024-03-09 07:15:58.911 +00:00","GameId":110,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:59.232 +00:00","updatedAt":"2024-03-09 07:15:59.232 +00:00","GameId":111,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:15:59.907 +00:00","updatedAt":"2024-03-09 07:15:59.907 +00:00","GameId":112,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:00.247 +00:00","updatedAt":"2024-03-09 07:16:00.247 +00:00","GameId":113,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:00.672 +00:00","updatedAt":"2024-03-09 07:16:00.672 +00:00","GameId":114,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:01.019 +00:00","updatedAt":"2024-03-09 07:16:01.019 +00:00","GameId":115,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:01.431 +00:00","updatedAt":"2024-03-09 07:16:01.431 +00:00","GameId":116,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:01.747 +00:00","updatedAt":"2024-03-09 07:16:01.747 +00:00","GameId":117,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:02.050 +00:00","updatedAt":"2024-03-09 07:16:02.050 +00:00","GameId":118,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:02.574 +00:00","updatedAt":"2024-03-09 07:16:02.574 +00:00","GameId":119,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:02.906 +00:00","updatedAt":"2024-03-09 07:16:02.906 +00:00","GameId":120,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:03.320 +00:00","updatedAt":"2024-03-09 07:16:03.320 +00:00","GameId":121,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:03.704 +00:00","updatedAt":"2024-03-09 07:16:03.704 +00:00","GameId":122,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:04.108 +00:00","updatedAt":"2024-03-09 07:16:04.108 +00:00","GameId":123,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:04.470 +00:00","updatedAt":"2024-03-09 07:16:04.470 +00:00","GameId":124,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:04.804 +00:00","updatedAt":"2024-03-09 07:16:04.804 +00:00","GameId":125,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:05.204 +00:00","updatedAt":"2024-03-09 07:16:05.204 +00:00","GameId":126,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:05.612 +00:00","updatedAt":"2024-03-09 07:16:05.612 +00:00","GameId":127,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:06.157 +00:00","updatedAt":"2024-03-09 07:16:06.157 +00:00","GameId":128,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:06.657 +00:00","updatedAt":"2024-03-09 07:16:06.657 +00:00","GameId":129,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:06.967 +00:00","updatedAt":"2024-03-09 07:16:06.967 +00:00","GameId":130,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:07.538 +00:00","updatedAt":"2024-03-09 07:16:07.538 +00:00","GameId":131,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:07.872 +00:00","updatedAt":"2024-03-09 07:16:07.872 +00:00","GameId":132,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:08.387 +00:00","updatedAt":"2024-03-09 07:16:08.387 +00:00","GameId":133,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:08.797 +00:00","updatedAt":"2024-03-09 07:16:08.797 +00:00","GameId":134,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:09.103 +00:00","updatedAt":"2024-03-09 07:16:09.103 +00:00","GameId":135,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:09.434 +00:00","updatedAt":"2024-03-09 07:16:09.434 +00:00","GameId":136,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:09.815 +00:00","updatedAt":"2024-03-09 07:16:09.815 +00:00","GameId":137,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:10.205 +00:00","updatedAt":"2024-03-09 07:16:10.205 +00:00","GameId":138,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:10.527 +00:00","updatedAt":"2024-03-09 07:16:10.527 +00:00","GameId":139,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:10.882 +00:00","updatedAt":"2024-03-09 07:16:10.882 +00:00","GameId":140,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:11.411 +00:00","updatedAt":"2024-03-09 07:16:11.411 +00:00","GameId":141,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:11.694 +00:00","updatedAt":"2024-03-09 07:16:11.694 +00:00","GameId":142,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:12.088 +00:00","updatedAt":"2024-03-09 07:16:12.088 +00:00","GameId":143,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:12.467 +00:00","updatedAt":"2024-03-09 07:16:12.467 +00:00","GameId":144,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:12.857 +00:00","updatedAt":"2024-03-09 07:16:12.857 +00:00","GameId":145,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:13.231 +00:00","updatedAt":"2024-03-09 07:16:13.231 +00:00","GameId":146,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:13.593 +00:00","updatedAt":"2024-03-09 07:16:13.593 +00:00","GameId":147,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:13.938 +00:00","updatedAt":"2024-03-09 07:16:13.938 +00:00","GameId":148,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:14.264 +00:00","updatedAt":"2024-03-09 07:16:14.264 +00:00","GameId":149,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:14.565 +00:00","updatedAt":"2024-03-09 07:16:14.565 +00:00","GameId":150,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:14.896 +00:00","updatedAt":"2024-03-09 07:16:14.896 +00:00","GameId":151,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:15.257 +00:00","updatedAt":"2024-03-09 07:16:15.257 +00:00","GameId":152,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:15.892 +00:00","updatedAt":"2024-03-09 07:16:15.892 +00:00","GameId":153,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:16.323 +00:00","updatedAt":"2024-03-09 07:16:16.323 +00:00","GameId":154,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:16.669 +00:00","updatedAt":"2024-03-09 07:16:16.669 +00:00","GameId":155,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:16.964 +00:00","updatedAt":"2024-03-09 07:16:16.964 +00:00","GameId":156,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:17.321 +00:00","updatedAt":"2024-03-09 07:16:17.321 +00:00","GameId":157,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:17.630 +00:00","updatedAt":"2024-03-09 07:16:17.630 +00:00","GameId":158,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:17.990 +00:00","updatedAt":"2024-03-09 07:16:17.990 +00:00","GameId":159,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:18.660 +00:00","updatedAt":"2024-03-09 07:16:18.660 +00:00","GameId":160,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:19.127 +00:00","updatedAt":"2024-03-09 07:16:19.127 +00:00","GameId":161,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:19.436 +00:00","updatedAt":"2024-03-09 07:16:19.436 +00:00","GameId":162,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:19.779 +00:00","updatedAt":"2024-03-09 07:16:19.779 +00:00","GameId":163,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:20.085 +00:00","updatedAt":"2024-03-09 07:16:20.085 +00:00","GameId":164,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:20.414 +00:00","updatedAt":"2024-03-09 07:16:20.414 +00:00","GameId":165,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:20.704 +00:00","updatedAt":"2024-03-09 07:16:20.704 +00:00","GameId":166,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:21.112 +00:00","updatedAt":"2024-03-09 07:16:21.112 +00:00","GameId":167,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:21.483 +00:00","updatedAt":"2024-03-09 07:16:21.483 +00:00","GameId":168,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:21.858 +00:00","updatedAt":"2024-03-09 07:16:21.858 +00:00","GameId":169,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:22.184 +00:00","updatedAt":"2024-03-09 07:16:22.184 +00:00","GameId":170,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:22.480 +00:00","updatedAt":"2024-03-09 07:16:22.480 +00:00","GameId":171,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:22.735 +00:00","updatedAt":"2024-03-09 07:16:22.735 +00:00","GameId":172,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:23.055 +00:00","updatedAt":"2024-03-09 07:16:23.055 +00:00","GameId":173,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:23.378 +00:00","updatedAt":"2024-03-09 07:16:23.378 +00:00","GameId":174,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:23.844 +00:00","updatedAt":"2024-03-09 07:16:23.844 +00:00","GameId":175,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:24.245 +00:00","updatedAt":"2024-03-09 07:16:24.245 +00:00","GameId":176,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:24.538 +00:00","updatedAt":"2024-03-09 07:16:24.538 +00:00","GameId":177,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:24.853 +00:00","updatedAt":"2024-03-09 07:16:24.853 +00:00","GameId":178,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:25.186 +00:00","updatedAt":"2024-03-09 07:16:25.186 +00:00","GameId":179,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:26.618 +00:00","updatedAt":"2024-03-09 07:16:26.618 +00:00","GameId":180,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:26.940 +00:00","updatedAt":"2024-03-09 07:16:26.940 +00:00","GameId":181,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:27.349 +00:00","updatedAt":"2024-03-09 07:16:27.349 +00:00","GameId":182,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:27.704 +00:00","updatedAt":"2024-03-09 07:16:27.704 +00:00","GameId":183,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:28.102 +00:00","updatedAt":"2024-03-09 07:16:28.102 +00:00","GameId":184,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:28.438 +00:00","updatedAt":"2024-03-09 07:16:28.438 +00:00","GameId":185,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:28.808 +00:00","updatedAt":"2024-03-09 07:16:28.808 +00:00","GameId":186,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:29.162 +00:00","updatedAt":"2024-03-09 07:16:29.162 +00:00","GameId":187,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:29.544 +00:00","updatedAt":"2024-03-09 07:16:29.544 +00:00","GameId":188,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:29.965 +00:00","updatedAt":"2024-03-09 07:16:29.965 +00:00","GameId":189,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:30.278 +00:00","updatedAt":"2024-03-09 07:16:30.278 +00:00","GameId":190,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:30.767 +00:00","updatedAt":"2024-03-09 07:16:30.767 +00:00","GameId":191,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:31.104 +00:00","updatedAt":"2024-03-09 07:16:31.104 +00:00","GameId":192,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:31.417 +00:00","updatedAt":"2024-03-09 07:16:31.417 +00:00","GameId":193,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:31.775 +00:00","updatedAt":"2024-03-09 07:16:31.775 +00:00","GameId":194,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:32.205 +00:00","updatedAt":"2024-03-09 07:16:32.205 +00:00","GameId":195,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:32.564 +00:00","updatedAt":"2024-03-09 07:16:32.564 +00:00","GameId":196,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:32.889 +00:00","updatedAt":"2024-03-09 07:16:32.889 +00:00","GameId":197,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:33.185 +00:00","updatedAt":"2024-03-09 07:16:33.185 +00:00","GameId":198,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:33.592 +00:00","updatedAt":"2024-03-09 07:16:33.592 +00:00","GameId":199,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:33.923 +00:00","updatedAt":"2024-03-09 07:16:33.923 +00:00","GameId":200,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:34.274 +00:00","updatedAt":"2024-03-09 07:16:34.274 +00:00","GameId":201,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:34.709 +00:00","updatedAt":"2024-03-09 07:16:34.709 +00:00","GameId":202,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:35.100 +00:00","updatedAt":"2024-03-09 07:16:35.100 +00:00","GameId":203,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:35.410 +00:00","updatedAt":"2024-03-09 07:16:35.410 +00:00","GameId":204,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:35.722 +00:00","updatedAt":"2024-03-09 07:16:35.722 +00:00","GameId":205,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:36.264 +00:00","updatedAt":"2024-03-09 07:16:36.264 +00:00","GameId":206,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:36.620 +00:00","updatedAt":"2024-03-09 07:16:36.620 +00:00","GameId":207,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:36.947 +00:00","updatedAt":"2024-03-09 07:16:36.947 +00:00","GameId":208,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:37.305 +00:00","updatedAt":"2024-03-09 07:16:37.305 +00:00","GameId":209,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:37.646 +00:00","updatedAt":"2024-03-09 07:16:37.646 +00:00","GameId":210,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:37.922 +00:00","updatedAt":"2024-03-09 07:16:37.922 +00:00","GameId":211,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:38.401 +00:00","updatedAt":"2024-03-09 07:16:38.401 +00:00","GameId":212,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:38.711 +00:00","updatedAt":"2024-03-09 07:16:38.711 +00:00","GameId":213,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:39.006 +00:00","updatedAt":"2024-03-09 07:16:39.006 +00:00","GameId":214,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:39.423 +00:00","updatedAt":"2024-03-09 07:16:39.423 +00:00","GameId":215,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:39.811 +00:00","updatedAt":"2024-03-09 07:16:39.811 +00:00","GameId":216,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:40.313 +00:00","updatedAt":"2024-03-09 07:16:40.313 +00:00","GameId":217,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:40.606 +00:00","updatedAt":"2024-03-09 07:16:40.606 +00:00","GameId":218,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:40.908 +00:00","updatedAt":"2024-03-09 07:16:40.908 +00:00","GameId":219,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:41.256 +00:00","updatedAt":"2024-03-09 07:16:41.256 +00:00","GameId":220,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:41.522 +00:00","updatedAt":"2024-03-09 07:16:41.522 +00:00","GameId":221,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:41.911 +00:00","updatedAt":"2024-03-09 07:16:41.911 +00:00","GameId":222,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:42.345 +00:00","updatedAt":"2024-03-09 07:16:42.345 +00:00","GameId":223,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:42.677 +00:00","updatedAt":"2024-03-09 07:16:42.677 +00:00","GameId":224,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:43.004 +00:00","updatedAt":"2024-03-09 07:16:43.004 +00:00","GameId":225,"UserPlatformMappingId":"233376573514842112"},{"createdAt":"2024-03-09 07:16:43.303 +00:00","updatedAt":"2024-03-09 07:16:43.303 +00:00","GameId":226,"UserPlatformMappingId":"233376573514842112"}],{}]
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
