import { OWNER } from "../config.js";

export function ownerInfo(bot, chat) {
  bot.sendPhoto(chat, OWNER.photo, {
    caption: `👑 *Owner Information*  
Name: ${OWNER.name}  
WhatsApp: ${OWNER.number}`,
    parse_mode: "Markdown"
  });
}
