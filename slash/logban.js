const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("logban")
		.setDescription("Logs a ban to the banned players log.")
		.addStringOption((option) =>
			option
				.setName("username")
				.setDescription("the player's username")
				.setRequired(true)
		)
		.addUserOption((option) =>
			option
				.setName("discord")
				.setDescription("the player's discord")
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName("length")
				.setDescription("how long the user should be banned for")
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName("reason")
				.setDescription("why is this user being banned?")
				.setRequired(true)
		),
	run: async ({ client, interaction }) => {
		let bannedlog = client.channels.cache.get("987946442641506394");
		let user = interaction.options.getUser("discord");
		let ign = interaction.options.getString("username");
		let banlength = interaction.options.getString("length");
		let reason = interaction.options.getString("reason");
		await bannedlog.send({
			embeds: [
				{
					title: `**Player Banned!**`,
					description: `Details:\n\`•\` Ign: ${ign}\n\`•\` Discord: ${user}\n\`•\` Ban Length: ${banlength}\n\`•\`Reason: ${reason}`,
					color: 0xff0000,
				},
			],
		});
		return interaction.deleteReply();
	},
};
