const toBool = (x) => x == 'true'
const { existsSync } = require('fs')
const { Sequelize } = require('sequelize');
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
process.env.NODE_OPTIONS = '--max_old_space_size=2560'//2.5
const DB_URL =  process.env.DATABASE_URL || '';
module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'jsl~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUtDNHBwdkVSVTlsTlE0QUdFcXhoR2NtcWRDZmx0Z0Q3ZTAvRnh2K09VVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmVKQW1nSk02anJJeVFnL3pWNUllWGI2N3BtSTY2MWlLMkxFRUhuVzdqcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTUxNbkRCL1NQNVc1T0tJblBBTExQOURLR3ZoaGx0QlE2d1hxVms0RVZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSDBXcEhOWGxOdUhyRWEreDJyZHpERm4zeENpS0dqYlhDaDJES1VMaWlJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdDdjYzY0k4MUJUdkcwVXJ6VzBma2ZMZDk5K1JkcDJQQ1JDMGxKYTBOa0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlwWm0velBWRVY2am9GYVUyUHc4dm1oK3hIM2dvemxHNnU3b04waWFvMEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEc3bDI1S2ZpR1hRbXo2NmVqKzFiMk11cU42OG8wZTRPMnFJMVJHb1Jtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVpVYzN6K3JCMHdtOTdnR2F0L29TQmxSU21JTXQyMWYxMVBMWXMrSW1CUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdTMUc5dExQbjA1ZDdDQm9mVmcxZitQWVRreFRUbDZTQ1pPT250MzdTTURwZnZKWThncytpY1JjU2NNSlQ0VmxSRXJOeGRCd2J3bFplS09QSTF2d0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjgsImFkdlNlY3JldEtleSI6ImVQak9COGpWbktSWks1OXB1WFhZT2d6WlYzWHNvVXUzMGdLVm1mM3loNEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODE1MDkyNDg4N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5NzdGRDJFQjc3NDk2Rjg1RkY2NjkxNzg0M0VFNDY0MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4OTk3NDg3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MTUwOTI0ODg3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBOTAyOEVDMTAzMzYxMEQyQ0RFQzNFNTBDNzA2OTY1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjg5OTc0ODh9XSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlA1V0xLMnY1U2htX2RLZXdKLXVFSEEiLCJwaG9uZUlkIjoiZWQ3OTU1NTMtZjdhOS00NzMyLWE2NDAtMGQ3MWFmNGJjMzU1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFaYk1WaG10d3Z3QjRhNkFoTWt5ZGNsZlZTYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxNzJEMm5OSGo4eXdLK2FsMVRyVEtBZGgwcTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQTczWlMzTUgiLCJtZSI6eyJpZCI6IjIzNDgxNTA5MjQ4ODc6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJLaW5nIERhdmlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOWGU5ZDRHRU4vUXViZ0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJyanIyU1ErVGVMMjZzQU5CeFZodzMzN3NNdFZES1ZzMG1vUHYra0Y5WXlvPSIsImFjY291bnRTaWduYXR1cmUiOiJUMVpaQTRnRFJCQURzRER2TjdqZlhjQ2hxbmhkWmFzQXZ5R09lSXAxRkt4c2g0TENUMGlGVlFVNGZZcjE3TTZLOHhoZmhSV2tjN0p5aXFac2dXYVdBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNlRCK3lmZzA4Z2FxenZGWVRGaHI3a0pkWkdXbjdCNno4V2I2OWpVRWVkdjFheWdLRll5ZmVKNWRGc254Wk8vVVRwMlNHZDRZNExCWis0Ukc4ekw4Q3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTUwOTI0ODg3OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYTQ2OWtrUGszaTl1ckFEUWNWWWNOOSs3RExWUXlsYk5KcUQ3L3BCZldNcSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODk5NzQ4NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGSW0ifQ==', //your ssid to run bot
    HEROKU: {
    API_KEY: process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME },
    BGM_URL : process.env.BGM_URL || "null",
    REJECT_CALL : toBool(process.env.REJECT_CALL || 'false'),
    BADWORD_BLOCK : toBool(process.env.BADWORD_BLOCK || 'false'),
    ALLWAYS_ONLINE: toBool(process.env.ALLWAYS_ONLINE || "false"),
    PM_BLOCK : toBool(process.env.PM_BLOCK || "false"),
    BGMBOT : toBool(process.env.BGMBOT || "false"),
    CALL_BLOCK : toBool(process.env.CALL_BLOCK || "false"),
    STATUS_VIEW : process.env.STATUS_VIEW || "false",
    SAVE_STATUS : toBool(process.env.SAVE_STATUS || "false"),
    ADMIN_SUDO_ACCESS: toBool(process.env.ADMIN_SUDO_ACCESS || "false"),
    DISABLE_PM: toBool(process.env.DISABLE_PM || "false"),
    DISABLE_GRP : toBool(process.env.DISABLE_GRP || "false"),
    ERROR_MSG : toBool(process.env.ERROR_MSG || "true"),
    GPJOIN: toBool(process.env.GPJOIN || 'false'),
    AUTO_READ : process.env.AUTO_READ ||  "false",//true, command
    CHATBOT : process.env.CHATBOT || "false",//true, pm, group
    AUTO_REACT : process.env.AUTO_REACT || "false",//true, command, emoji
    WARNCOUND : process.env.WARNCOUND || 5,
    BOT_INFO : process.env.BOT_INFO || "Abu MD;Jsl;https://i.imgur.com/o3WP9EK.jpeg",
    MODE : process.env.MODE || "private",
    PREFIX : process.env.PREFIX || "#",//both  .  and [.] equal, for multi prefix we use [] this
    LANG : process.env.LANG || "en",
    PM_MESSAGE: process.env.PM_MESSAGE || "null",
    BOT_PRESENCE : process.env.BOT_PRESENCE || "unavailable",
    AUDIO_DATA : process.env.AUDIO_DATA || "ABU MD;JSL;https://i.imgur.com/DyLAuEh.jpg",
    STICKER_DATA : process.env.STICKER_DATA || "ᴀʙᴜ-ᴍᴅ;ᴊsʟ",
    SUDO : process.env.SUDO || "2349123721026",
    RMBG_KEY: process.env.RMBG_KEY,
    OPEN_AI: process.env.OPEN_AI,
    ELEVENLABS: process.env.ELEVENLABS,
    OCR_KEY: (process.env.OCR_KEY || 'K84003107488957').trim(),
    DATABASE: DB_URL ? new Sequelize(DB_URL,{dialect:'postgres',ssl:true,protocol: 'postgres', dialectOptions: {native: true,ssl:{require: true,rejectUnauthorized: false}}, logging: false}) : new Sequelize({dialect:'sqlite',storage:'./database.db',logging:false}) 
};
