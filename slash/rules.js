const { SlashCommandBuilder } = require("@discordjs/builders");
const pjson = require("../package.json");
const plockjson = require("../package-lock.json");

const djsVersion = pjson.dependencies["discord.js"];
const djsRest = pjson.dependencies["@discordjs/rest"];
const djsBuilders = pjson.dependencies["@discordjs/builders"];

module.exports = {
	data: new SlashCommandBuilder()
		.setName("rules")
		.setDescription("Sends the rules embeds."),
	run: async ({ client, interaction }) => {
		// editReply with an embed
		interaction.deleteReply();
		interaction.channel.send({
			embeds: [
				{
					title: "『 RULE #1 』Be Appropriate",
					description:
						"Do not post NSFW content, send or solicit nudes, make sexual advances, use racial slurs, target ethnic groups, discuss R-rated topics, or post R-rated media. Avoid brazenly inappropriate content and use common sense. Also no bot commands in <#449627343959359488>",
					color: 0x1ac52b,
				},
				{
					title: "『 RULE #2 』Be Respectful",
					description:
						"No harassing others, such as sending multiple belittling comments or repeatedly diminishing someone. No berating others, such as harshly insulting them or their intentions. No spreading malicious rumors, particularly without proof, regarding scamming, hacking, or other offenses. In other words, do not damage someone's reputation without sufficient evidence. Minimize toxicity to others. No bullying others, which includes malicious name-calling, physical or violent threats, purposeful exclusion, or nasty gossip. No spreading embarrassing photos or videos without the consent of those therein. No doxxing, EVER. No DDOSing, EVER. Use common sense; if someone asks you to stop, please do so. Failing to do so is mutable or bannable. These rules apply to DMs as well; proof of similarly disrespectful DMs are grounds for dismissal.",
					color: 0x1ac52b,
				},
				{
					title: "『 RULE #3 』Be Respect and Obey Staff",
					description:
						"Staff team decisions are final. Do not spam or disrespect staff regarding staff team decisions. Lying to staff is likewise bannable. Also, do not ask for staff roles - just apply in <#892038742188105768>! We obviously deny applications for those asking or begging for staff.",
					color: 0x1ac52b,
				},
				{
					title: "『 RULE #4 』Don't Argue",
					description:
						"If you have an issue with another person, take it to a DM. If arguing continues, staff can mute either or both parties. If an issue requires staff assistance, then DM staff and explain the issue. This rule excludes tranquil discussions.",
					color: 0x1ac52b,
				},
				{
					title: "『 RULE #5 』Don't Spam",
					description:
						"This includes, but is not limited to: flooding chats, excessive chat frequency, repeating text strings, posting copy-pastas, and more. In addition, please ping others only when necessary. The use of @everyone and @here is prohibited; contact a staff member to make an announcement using these tags. Extends to speaking in foreign languages for an extended period of time.",
					color: 0x1ac52b,
				},
				{
					title: "『 RULE #6 』Limit Advertising",
					description:
						"All types of advertising must go into <#892038961223045150>. Posting unsolicited Discord links, whether in chats or DMs, is disallowed and bannable.",
					color: 0x1ac52b,
				},
				{
					title: "『 RULE #7 』Don't Impersonate",
					description:
						"Do not try to impersonate any other players, particularly staff members. Do not misrepresent who you are, such as your gender or age. This includes editing profile pictures and Discord nicknames to match someone else’s. Do not act as a staff member unless you are; in other words, do not threaten warnings or punishments unless you have power to administer them.",
					color: 0x1ac52b,
				},
				{
					title: "『 RULE #8 』No Evasion",
					description:
						"Evading guild or network punishments will result in immediate bans to all accounts involved.",
					color: 0x1ac52b,
				},
				{
					title: "『 RULE #9 』No Treason",
					description:
						"Manipulating or coaxing members to leave the guild is strictly disallowed and bannable.",
					color: 0x1ac52b,
				},
				{
					title: "『 RULE #10 』Follow Hypixel Rules",
					description:
						"This guild upholds all Hypixel rules for all members whenever they enter the Hypixel Network. All chat and gameplay rules still apply. Hacking, autoclicking, scamming, stealing, IRL trading, exploiting, boosting, cheating, and more all result in guild bans. If you were temporarily or permanently banned from the Hypixel Network, then we withhold the right to remove you from the guild. In the event of unfair, false, or impersonal violations, we may allow you to stay based on mitigating context and evidence.",
					color: 0x1ac52b,
				},
			],
		});
		interaction.channel.send({
			embeds: [
				{
					title: "『 RULE #11 』Must be 13+",
					description:
						"Must be 13 years old or more to stay in the discord server , If you are found out to be under the age of 13 you will be banned until you are the age of 13.\nNote: you can still be in the guild if your under 13 just not the discord\n\nBy participating in this Discord server, you agree that you have read the rules and will accept all imposed punishments that come as a result of violating them.",
					color: 0x1ac52b,
				},
			],
		});
	},
};
