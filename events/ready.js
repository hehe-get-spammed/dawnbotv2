const Discord = require("discord.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
require("dotenv").config();
const fs = require("fs");
const CLIENT_IDENTIFIER = process.env.CLIENT_ID;
const GUILD_IDENTIFIER = process.env.GUILD_ID;
const TOKEN = process.env.TOKEN;

module.exports = {
	name: "ready",
	once: true,
	execute(client, commands) {
		console.log(`Logged in as ${client.user.tag}`);
	},
};
