const { MusicBot } = require('discord-music-system'); // npm i discord-music-system Yap terminal de falan

client.musicBot = new MusicBot(client, {
    ytApiKey: 'YouTube API key', // yt ap key lazım ab YouTube da videoları var
    prefix: '!', // Botunuzun Prefixiniz yaz fln
    language: 'en' // değiştirme Türkçe yok xd
}); //Github: iUgur

client.on('message', async message => {
    if(message.author.bot) { //Space Giveaway Ekle yaw
        return;
    }; //Discord: iUgur#7464
    client.musicBot.onMessage(message); //Yardım menüsü de var Bi dal al istersen xd
}); //buraya eller isen çalışmaz anla yaw 
