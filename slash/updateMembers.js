const { SlashCommandBuilder } = require("@discordjs/builders");
const { Message, MessageEmbed } = require("discord.js");
const {
	findMap,
	findType,
	getUUID,
	isPlayer,
	getMode,
	getTime,
	getMap,
	getGuildMembers,
	getDiscord,
	addNameRole,
} = require("../helpers");
const { promisify } = require("util");
const sleep = promisify(setTimeout);

module.exports = {
	data: new SlashCommandBuilder()
		.setName("updateallembers")
		.setDescription("Updates all the members.")
		.addStringOption((option) =>
			option
				.setName("api-key")
				.setDescription("send the api key for the bot to use.")
				.setRequired(true)
		),
	run: async ({ client, interaction }) => {
		// var roledUsers = []
		// const doSleep = async () => {
		//     await sleep(800)
		//     //do stuff
		// }
		// const guildMemberRole = 1;
		// const embed = new MessageEmbed()
		//     .setTitle("Member list.")
		//     .setDescription("List of all members in The Dawns Awakening.");
		// memberUUIDSList = await getGuildMembers(interaction.options.getString("api-key"))
		// for (var i = 0; i < memberUUIDSList.length ; i++) {
		//     const discords = await getDiscord(memberUUIDSList[i], (interaction.options.getString("api-key")))
		//     if (discords == false || discords == undefined) {console.log("Member with the UUID, ", memberUUIDSList[i], ",needs to link their discord.")}
		//     else {
		//     console.log(discords, " - ", i)
		//     roledUsers.push(discords)
		//     await doSleep()
		//     }

		// }
		const roledUsers = ["Darkr#4492", "9206#0149", "Inqz#9999"];
		for (var i = 0; i < roledUsers.length; i++) {
            try {
                const membrole = "990040391548018688";
                const theuser = (await interaction.guild.members.fetch({ query: "Inqz" })).first()
                await theuser.roles.add(membrole);
                console.log("Role added to - ", roledUsers[i]);
            } catch (err) {
                console.log(err);
                console.log("Role could not be added to user - ", roledUsers[i]);
            }
		}
		// for (var i = 0; i < roledUsers.length; i++) {
		//     try {
		//         const rolename = "Guild Member"
		//         const themember = await interaction.guild.members.cache.find((member) => member.user.tag === roledUsers[i])
		//         await themember.roles.add(
		//             client.guilds.cache
		//                 .get("605743544963170314")
		//                 .roles.cache.find((role) => role.name === rolename)
		//         );
		//         console.log("Role added to - ", roledUsers[i])
		//     } catch (err) {
		//         console.log(err)
		//         console.log("Role could not be added to user - ", roledUsers[i])
		//     }
		//     await sleep(1000)
		// }
		return await interaction.editReply("Finished.");
	},
};
