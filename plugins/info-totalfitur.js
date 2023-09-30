import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let fitur = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await m.reply(`👁️👁️ Fitur Yang Di Miliki Bot Saat Ini\nTotal: ${fitur.length} Fitur`)
}
handler.help = ['totalfitur']
handler.tags = ['main']
handler.command = ['totalfitur']
export default handler
