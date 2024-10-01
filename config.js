//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "916260273863";
global.owner = process.env.OWNER_NUMBER || "916260273863";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUdPRFp4a3puL0VWekptdWlSbVh1aWlPMHNyT0tTdWZ5c0FSSGVrNHMyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEFmV0RkSmJNcHkwZmxobkI1WE1Gd2x6U1g2K0Z3WWZqa3RIUEtFOU0xZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQ25PYkFqcFhFN0g5S1gvVmN2emJWR1dIcmRRamZ4WjVPYzVrM2xpMDA0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrbGVwYmp4dG9iKzJnZm9VOCtQcUlhVjdjZ2cyWlVvM3BQeVFoQkg5MWtVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtBZ0ZIZ2c3bVh6Z0dJT2Q3cUk0dU5peERoR2x4RGMvRUtUc1k3M2dFRTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhHcWFNZzVSMG9ZSkhGNnAyNGxPZzdQYWRyeTBwcDlFMithR3I1cnBsd3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUhjK3laZWdkd3N0WmVWTUJwVzRYeDJONVBCcU9jUHRCaUR2M21rREpWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1g0ZjdqcTA2UVVjeTFKZFcwVklja1NTbXhubjQ5dGtMd3FUOEt5aitIST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im0xcmpSNUZZRXlKWURsQjZtVUJsQWtwYjl4U0tqM0JDa3hITXNiUHZUaE5FLy9LeDFsak0wRkZmNFJWczd5WkVuZlBJRXdoZEYxanlaSVZiQ2RlWWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYyLCJhZHZTZWNyZXRLZXkiOiJ4b3hMeVorZ0lYYlN0RlBNWXBwdXBuUkpmRy9WUnU4M1gyZng1NzFJWE9NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxNjI2MDI3Mzg2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1QkJDRDc5RDQzNjlERTI5QUQ2MkQ2MTk1MTA3OTlBMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3Nzc1MjU5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDbnNVTnZSVVJXdXZVVXg3ZTE1YWZ3IiwicGhvbmVJZCI6ImQyY2YyZWJkLWVmNTktNDE3Mi05ODg3LTI3OGExZDU1ODg2ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNdEttdHpBTFd5MlI2Q2JxdWRaM09BVEJ1dlk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVk4UnRKelcvQXhRa3RDM1psbk52RTQwLzFFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxHU1IzTkJTIiwibWUiOnsiaWQiOiI5MTYyNjAyNzM4NjM6MTlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTcqAIFPKnOG0nMqZypzhtIDhtI0gS+G0nOG0jeG0gMqAIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNZll4ZjRIRUl1RTc3Y0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJRWGMycmJYY1BDeGl6Vm9zRk1Lbnd6b1ZaeHpmY05zbkRJZVdaTHloWEE4PSIsImFjY291bnRTaWduYXR1cmUiOiJORkRFeFFmQ3VUd0JNczQzZ1MxdHN3akZ5SkYzRDFUMUsyZG5LeW9wZDVGS1NyNk9kQU1WUHY2S1MrVHRLaFNwODQ4ZkZGc0FuTmV3VFk5QUtDWTZCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoic2dnMzVtbTlVT0ZxWFhQU0ZkamZZNVhFWXVGOGJTdGRkUVpHY0tzMDRvZGtiYURLOXJFUDZBOSsySUlmMkR4aGZpb3FqYzZyRUE4TG14aHVBb0Y0akE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTYyNjAyNzM4NjM6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVUYzTnEyMTNEd3NZczFhTEJUQ3A4TTZGV2NjMzNEYkp3eUhsbVM4b1Z3UCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzc3NTI1NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDNG0ifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "Mr Shubham",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
