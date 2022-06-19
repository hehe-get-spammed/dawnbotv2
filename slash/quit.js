const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("quit")
		.setDescription("Stops the bot."),
	run: async ({ client, interaction }) => {
		await interaction.editReply("Bot stopping.");
		process.exit();
	},
};
