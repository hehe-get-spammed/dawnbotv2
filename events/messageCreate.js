const Discord = require("discord.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
require("dotenv").config();
const fs = require("fs");
const CLIENT_IDENTIFIER = process.env.CLIENT_ID;
const GUILD_IDENTIFIER = process.env.GUILD_ID;
const TOKEN = process.env.TOKEN;
let bannedchannelid = "987958699920347186";

module.exports = {
	name: "messageCreate",
	async execute(message) {
		let author = message.member;
		console.log("message sent ", message);
		try {
			if (message.channelId == bannedchannelid) {
				await author.kick();
			}
		} catch (err) {
			console.log(err);
		}
	},
};
