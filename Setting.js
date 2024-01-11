const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })

global.owner = process.env.OWNER_NUMBER || '916238768108' ;
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://danielpeter:beka10beka10@cluster0.ef032ix.mongodb.net/?retryWrites=true&w=majority" ;
global.port=8000  ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363169665426586@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363169665426586@g.us' ;
global.email = 'a6318977@gmail.com' ; 
global.github = 'https://github.com/AmeenRepo/DURGA-MD' ;
global.sudo =  process.env.SUDO || "916238768108" ;
global.devs = "916238768108";
global.mztit = process.env.MZTIT ||"DURGA-MD",
global.Gname = process.env.GNAME ||"🗡️DURGA-MD🕊️",
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.ibb.co/JvvB8Y7/aad0f79f6aaf.jpg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || 'DURGA;;;',
  botname: process.env.BOT_NAME || 'DURGA-MD',
  ownername:  process.env.OWNER_NAME || `༆🇦🇱⃞➵𝗔𝗠𝗘𝗘𝗡-𝗦𝗘𝗥🇦🇱⃪⃞➣࿐⁩`,
  author:  process.env.PACK_AUTHER || '༆🇦🇱⃞➵𝗔𝗠𝗘𝗘𝗡-𝗦𝗘𝗥🇦🇱⃪⃞➣࿐', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname:  process.env.PACK_NAME || "༆🇦🇱⃞➵𝗔𝗠𝗘𝗘𝗡-𝗦𝗘𝗥🇦🇱⃪⃞➣࿐" , 
  autoreaction: process.env.AUTO_REACTION || 'false',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true',
  antifake :   process.env.FAKE_COUNTRY_CODE ||'92',
  readmessage: process.env.READ_MESSAGE || 'false',
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 2,
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false', 
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'Main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "34wcCGPoe3yaGtpiBZgx4SN7",
  caption :process.env.CAPTION || "\t*DURGA-MD 2024* ",
  promote_demote_messages : process.env.PROMOTE_DEMOTE_MESSAGES || 'true' ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,
  VERSION: process.env.VERSION || '𝚅.𝟷.𝟸.𝟽',
  LANG: process.env.THEME|| 'AMEEN',
  WORKTYPE: process.env.WORKTYPE || 'public'
};

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
