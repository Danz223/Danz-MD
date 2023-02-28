import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  
 const ini = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `👑 Developer Bot `, `🚫 Don't call me 🥺`, `stepech12@gamil.com`, `🇮🇩 Indonesia`, `🚀 instagram.com/rellcuy7`, `Jangan Telpon Kon`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🔥 Rell Bots 🐣`, `📵 Don't spam/call me 😢`, `stepech23@gamil.com`, `🇮🇩 Indonesia`, `🚀 instagram.com/rellcuy7`, `🤖 Dont Forget To Donate!`],
  ], fkontak)
  }
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler