const { SlashCommandBuilder } = require("@discordjs/builders");
const pjson = require("../package.json");
const plockjson = require("../package-lock.json");

const djsVersion = pjson.dependencies["discord.js"];
const djsRest = pjson.dependencies["@discordjs/rest"];
const djsBuilders = pjson.dependencies["@discordjs/builders"];

module.exports = {
	data: new SlashCommandBuilder().setName("testembed").setDescription("send"),
	run: async ({ client, interaction }) => {
		// editReply with an embed
		interaction.editReply({
			embeds: [
				{
					title: "Testembed",
					description: "adfs",
					color: 0xff2b01,
					fields: [
						{
							name: "Discord.js",
							value: `\`${djsVersion}\``,
							inline: true,
						},
						{
							name: "Rest Version",
							value: `\`${djsRest}\``,
							inline: true,
						},
						{
							name: "Builders Version",
							value: `\`${djsBuilders}\``,
							inline: true,
						},
					],
					// Set footer to djs version
					footer: {
						text: `Discord.js ${djsVersion} | Node.js ${plockjson.packages["node_modules/@discordjs/builders"].engines.node}`,
						icon_url: client.user.avatarURL(),
					},
				},
			],
		});
	},
};
