module.exports = {
	name: "interactionCreate",
	async execute(interaction) {
		const client = interaction.client;
		async function addNameRole(name) {
			await interaction.member.roles.add(
				client.guilds.cache
					.get(interaction.guildId)
					.roles.cache.find((role) => role.name === name)
			);
		}

		const redRole = "948582612228771910";
		const orangeRole = "948582618574778418";
		const yellowRole = "948582618981617674";
		const greenRole = "948582612933439578";
		const blueRole = "948582618897731685";
		const purpleRole = "948582612610482236";

		async function handleInteraction() {
			if (!interaction.inGuild()) return;
			if (interaction.isCommand()) {
				await interaction.deferReply();
				const slashcmd = client.slashcommands.get(interaction.commandName);
				if (!slashcmd) interaction.editReply("Not a valid slash command");
				await slashcmd.run({ client, interaction });
			} else if (interaction.isSelectMenu()) {
				if (interaction.customId == "colorselect") {
					if (
						interaction.member.roles.cache.hasAny(
							redRole,
							yellowRole,
							blueRole,
							greenRole,
							purpleRole,
							orangeRole
						)
					) {
						await interaction.member.roles.remove([
							redRole,
							yellowRole,
							blueRole,
							greenRole,
							purpleRole,
							orangeRole,
						]);
					}
					await interaction.deferReply({ ephemeral: true });
					addNameRole(interaction.values[0]);
					await interaction.editReply({
						content: `You have been given the ${interaction.values[0]} color role.`,
						ephemeral: true,
					});
				}
			}
		}
		handleInteraction();
	},
};
