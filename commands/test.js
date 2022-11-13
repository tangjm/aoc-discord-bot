const { SlashCommandBuilder } = require('discord.js');

// Slash commands need to be reregistered when their definition is udpated.
// Other parts can be changed without requiring a reregistration.
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Test command to see if bot is responsive.'),
	async execute(interaction) {
		try {
			const message = await interaction.reply({
				content: 'pong!',
				fetchReply: true,
                ephemeral: true
			});
			console.log('Reply sent with: ', message.content);
		}
		catch (error) {
			console.error(error);
		}
	},
};
