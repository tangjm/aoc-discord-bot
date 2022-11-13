const { SlashCommandBuilder } = require('discord.js');

async function execute(interaction) {
	const today = new Date();
	const thisYear = today.getFullYear();
	const startDate = new Date(thisYear, 11, 1);
	const endDate = new Date(thisYear, 11, 25);

	if (endDate < today) {
		await interaction.reply(`Advent of Code ${thisYear} has ended.`);
	}
	// calendar months are 0-indexed.
	else if (today.getMonth() === 11) {
		const dateToday = today.getDay();
		dateToday === 1
			? interaction.reply('The Advent of Code begins today! \n Join at https://adventofcode.com/')
			: dateToday <= 25
				? interaction.reply(`Advent of Code ${thisYear} is currently underway! \n Today's puzzle: https://adventofcode.com/${thisYear}/day/${dateToday}`)
				: interaction.reply(`Advent of Code ${thisYear} has ended. Look forward to seeing you next year!`);
	}
	else {
		const diff = startDate - today;
		const day_in_milliseconds = 24 * 60 * 60 * 1000;
		const daysLeft = Math.ceil(diff / day_in_milliseconds);
		await interaction.reply(daysLeft == 1
			? `There is ${daysLeft} day left before the Advent of Code ${thisYear} begins!`
			: `There are ${daysLeft} days left before the Advent of Code ${thisYear} begins!`);
	}
}


module.exports = {
	data: new SlashCommandBuilder()
		.setName('daysleft')
		.setDescription('Show the number of days left until the next Advent of Code.'),
	execute,
};