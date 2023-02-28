import { Configuration, OpenAIApi } from "openai";
let handler = async (m, { conn, text }) => {
        
            if (!text) thorw (`Membuat gambar dari AI.\n\nContoh:\n${prefix}${command} Wooden house on snow mountain`);
            const configuration = new Configuration({
              apiKey: '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'
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createImage({
              prompt: text,
              n: 1,
              size: "512x512",
            });
        
            //console.log(response.data.data[0].url)
   conn.sendHydrated(m.chat, `Done`, wm, response.data.data[0].url, 'https://instagram.com/rellcuy7', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ',
  ['Owner', `.owner`], m)
//conn.sendHydrated2(m.chat, '', wm, response.data.data[0].url, sig, 'I N S T A G R A M', '+62 813-6128-1833', 'No Call Me', buttons, m) 
//conn.send3TemplateButtonImg(m.chat, response.data.data[0].url, 'Ini Resultnya Kak', wm, 'SewaBot', '.sewabotyushino', 'Owner', '.owner', 'ʙᴀᴄᴋ ᴛᴏ ᴍᴇɴᴜ➠', '.menu', m)
}
handler.help = ['ai-image']
handler.tags = ['fun']
handler.command = /^(dalle|aiimg|aiimage|ai-img|openaiimage|ai-image)$/i
export default handler