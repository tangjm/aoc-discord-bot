const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('aocwebsite')
		.setDescription('Fetch url to Advent of Code homepage.'),
	execute: async interaction => {
		const homepage = 'https://adventofcode.com/';
		await interaction.reply(`AOC homepage: ${homepage}`);
	},
};
