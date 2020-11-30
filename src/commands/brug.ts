import { Message, MessageEmbed } from "discord.js";

module.exports = {
    name: 'brug',
    description: 'Brug!',
    execute(message: Message) {
        message.channel.send(new MessageEmbed()
        .setColor('007fff')
        .setTitle('Mooie brug')
        .setImage('https://upload.wikimedia.org/wikipedia/commons/a/a1/Zeelandbrug.jpg')
        )
    },
};