import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw `Mau Nanya Apa???`
let zeltoria = await fetch(`https://api.betabotz.org/api/search/openai-chat?text=${text}&apikey=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`)
let hasil = await zeltoria.json()
 m.reply(`${hasil.message}`.trim())
    }  
handler.help = ['ai', 'openai']
handler.tags = ['main']
handler.command = /^(ai|cherly|openai)$/i
export default handler