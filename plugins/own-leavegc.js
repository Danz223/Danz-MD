let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('"Terimakasih Telah Memberikan Rasa Nyaman Walaupun Hanya Sebatas Teman"\n\nDan Terimakasih Telah Menjadi Pengguna RellBots\n\nDengan Berat Hati Saya Mengucapkan Selamat Tinggal :D', m.chat) 
        await  conn.groupLeave(group)
        }
handler.help = ['leavegc', 'out']
handler.tags = ['owner']
handler.command = /^(out|leavegc)$/i

handler.rowner = true

export default handler