import { Message, MessageEmbed } from "discord.js";

module.exports = {
    name: 'brug',
    description: 'Brug!',
    execute(message: Message) {
        message.channel.send(new MessageEmbed()
        .setColor('007fff')
        .setTitle('Mooie brug')
        .setDescription('The Zeeland Bridge is the longest bridge in the Netherlands. The bridge spans the Oosterschelde estuary. It connects the islands of Schouwen-Duiveland and Noord-Beveland in the province of Zeeland. The Zeeland Bridge was built between 1963 and 1965.')
        .setImage('https://cdn.discordapp.com/attachments/644496515037003779/769144183420092426/unknown.png')
        )
    },
};