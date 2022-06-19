const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("colors")
		.setDescription("what is your fav color"),
	run: async ({ client, interaction }) => {
		if (!interaction.inGuild()) return;
		const row = new MessageActionRow().addComponents(
			new MessageSelectMenu()
				.setCustomId("colorselect")
				.setPlaceholder("Select a color")
				.setMinValues(1)
				.setMaxValues(1)
				.addOptions(
					// 🔵 🟠 🟢 🔴 🟣 🟡
					{
						label: "Red",
						description: "Red is the color of fire",
						value: "Red",
						emoji: "🔴",
					},
					{
						label: "Blue",
						description: "Blue is the color of the sky",
						value: "Blue",
						emoji: "🔵",
					},
					{
						label: "Green",
						description: "Green is the color of grass",
						value: "Green",
						emoji: "🟢",
					},
					{
						label: "Yellow",
						description: "Yellow is the color of sun",
						value: "Yellow",
						emoji: "🟡",
					},
					{
						label: "Orange",
						description: "Orange is the color of carrots",
						value: "Orange",
						emoji: "🟠",
					},
					{
						label: "Purple",
						description: "Purple is the color of the moon",
						value: "Purple",
						emoji: "🟣",
					}
				)
		);
		await interaction.deleteReply();
		await interaction.channel.send({
			content: "What is your favorite color?",
			components: [row],
		});
	},
};
