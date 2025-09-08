//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUc2Y0pBd3JWRk9lUFhvNCsxMmhvRnNIREMrU2FFUWJJc1hYVzdYQjNIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQS9FN0pmSk5ObFQ5Qkt2S2wyRGdQaW92NTN5ekgxQ1p6QTVpd3AzcXd4QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVR0VYa2Z3Vzk5WXNLczBqYlZJWVQyMFJFc1pGUlRYWVB1Sk5PenBGWUZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqU3JwYTFiZTZoZnI2Wk9ZM1RzWVpYK1E2MTRoSXg0NmlLL1JsSWFpcEVVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjROTHBvam1WaWhBcmM4a2lvRXIwS3B5eXNwNGFUTFNNZ2NCQ2pZZGtiM0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVIeTNtclNWdi9MaHgrNkExcEFMU3RvTzMxT29ONHpxc2lYSjZQcDk2VUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUhlWlJpcE1ZWmF1U1d2VGMzcGlMT3pkZHErcFhmamRHdTVLaTNBUFBsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEhrS2dhSG0zcXVmMVVJSXhiSlFkdGFYRDZ6ZlJXQ2FtWlhJOFF0NUR4MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRFOXQ3ZEt4K3g1UmpmeVBGSnBOQ0hZclNNVjZ6bDZJZVdCaDJPVERKc0JoUzdETUVDaVhuRVU0LzhydldJREpLVnlNeVlmdytHWVFSTllkM2RxakJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE5LCJhZHZTZWNyZXRLZXkiOiI4dkRIQTZSckt5Q1ZUSThrZG5RZThzQXZLdDJmcUp6Z0U2aFVudUNmWHBJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJiYzRKUzZlVFFiZXVVcnVBdzNHeHB3IiwicGhvbmVJZCI6ImI3MjZkMGIwLWY5YzAtNDdjMy1iZDMyLTM3OTdlMjM4MDFkNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwWHZTYVFUbmZtMkRHODZNL1pubEVFNm9sbVk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3FnY2x0VDdNYWM1eFcxR0JWejdYYTE2Ty9ZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRUM0pCV1YzIiwibWUiOnsiaWQiOiI5NDc2NjE4OTkxNTo1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNTYzNTA1MDc4NDM3ODA6NUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ovMm9xUUdFTEc5KzhVR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InpBTGJvS2RQM1hsMVlkV0xiOC90N2dJaEJ1ZzFzb0d5SjVVelVIdDhoMFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlhxS1RlQzdTN1dILzcxQTYwRUdUbTl0amV1QkFla21xMlNKRnNhVTFMTzE3dS91ZGRJYVZNemIzblZUcEZ4RmhTREpNNEkyVUVZTndjZStPRG5qK0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvUmVSK0pURXdIRjJtYzlXZzNHbVhjNU5nckxsd2pmR3hhQlpDcVdaUnJ6NjZ2RWFNMTNNczJTQkYxK0RxODBFc09HMzdTSk9qRWlFeEx5S09GczFEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY2MTg5OTE1OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY3dDMjZDblQ5MTVkV0hWaTIvUDdlNENJUWJvTmJLQnNpZVZNMUI3ZklkRSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3MzM5MzI2LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVUdyJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
