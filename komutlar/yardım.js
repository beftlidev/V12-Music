const Discord = require("discord.js")
exports.run = async (client, message, args) => {
let prefix = "PREFİX" 
let botisim = "BOTİSİM" 
const embed = new Discord.MessageEmbed()
.setTitle(`${Botisim} Müzik Yardım Menüsü`)
.setColor("BLURPLE") 
.setDescription(`▶️ ${prefix}play - Müzik açarsınız. 
⏹ ${prefix}stop - Müziği kapatırsınız. 
🌱 ${prefix}np - Çalan müzik hakkında bilgi alırsınız. 
⏭️ ${prefix}skip - Çalan müziği geçersiniz. 
📶 ${prefix}queue - Müzik sırasını görürsünüz. 
🔆 ${prefix}volume - Sesi ayarlarsınız. 
⏸ ${prefix}pause - Müziği durdurursunuz. 
⏺️ ${prefix}resume - Duran müziği decam ettirsiniz.
➖ ${prefix}remove - Müzik sırasından şarkı çıkarırsınız. 
🔰 ${prefix}lyrics - Müziğin sözlerine bakarsınız. 
`) 
.setFooter(`${botisim}`)
.setImage("")
} 
exports.conf = {
aliases: [] 
}
exports.conf = {
name: "yardım" 
} 
