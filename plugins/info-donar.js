let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let str = `
💖 𝙃𝙤𝙡𝙖!
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
Dona un riñon a este número <3
*wa.me/51917611323
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://paypal.me/OficialGD', '🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝙂𝙧𝙤𝙪𝙥𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}

handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler
