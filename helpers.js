const HYPIXEL_API_KEY = process.env.HYPIXEL_API_KEY;
const { fetch } = require("undici");

async function getUUID(username) {
    const url = `https://api.mojang.com/users/profiles/minecraft/${username}`;
    let response = await fetch(url);
    let body;
    try {
        body = await response.json();
        const uuid = body.id;
        return uuid;
    } catch {
        return false;
    }
}

async function getGuildMembers(key) {
    var uuidsList = [];
    try {
        const url = `https://api.hypixel.net/guild?key=${key}&id=5ba94ed50cf2cc24cf043706`;
        let response = await fetch(url);
        let body;
        body = await response.json();
        const memberList = body.guild.members;
        for (var i = 0; i < (await memberList).length; i++) {
            uuidsList.push(memberList[i].uuid);
        }
        return uuidsList
    } catch {
        return false;
    }
}

async function getDiscord(playerUUID, key) {
    try {
        const url = `https://api.hypixel.net/player?key=${key}&uuid=${playerUUID}`;
        let response = await fetch(url);
        let body;
        body = await response.json();
        const memberDiscord = body.player.socialMedia.links.DISCORD;
        return memberDiscord;
    } catch {
        return false;
    }
}

async function findMap(username) {
    if (!(await getUUID(username))) return false;
    const url = `https://api.hypixel.net/status?key=9fa2bd7a-805f-49ea-a81d-3aa57c0c079c&uuid=${await getUUID(
        username
    )}`;
    let map;
    let response = await fetch(url);
    body = await response.json();
    try {
        map = body.session.map;
        console.log("Map is: ", map);
        return map;
    } catch {
        return false;
    }
}

async function findType(username) {
    if (!(await getUUID(username))) return false;
    const url = `https://api.hypixel.net/status?key=9fa2bd7a-805f-49ea-a81d-3aa57c0c079c&uuid=${await getUUID(
        username
    )}`;
    let mode;
    let response = await fetch(url);
    body = await response.json();
    try {
        mode = body.session.mode;
        console.log("mode is: ", mode);
        return mode;
    } catch {
        return false;
    }
}

async function getMap(username) {
    if (!(await getUUID(username))) return false;
    const url = `https://api.antisniper.net/player/v2?key=d8e085ab-fdbe-433c-8220-a636eb75b3a2&name=${username}`;
    let mode;
    let testArr = [0, 1, 2, 3];
    let response = await fetch(url);
    body = await response.json();
    try {
        const queues = body.player.queues;
        mode = queues[queues.length - 1].map;
        // console.log(typeof queues);
        console.log(queues.length);
        console.log("mode is: ", mode);
        return mode;
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function getMode(username) {
    if (!(await getUUID(username))) return false;
    const url = `https://api.antisniper.net/player/v2?key=d8e085ab-fdbe-433c-8220-a636eb75b3a2&name=${username}`;
    let mode;
    let testArr = [0, 1, 2, 3];
    let response = await fetch(url);
    body = await response.json();
    try {
        const queues = body.player.queues;
        mode = queues[queues.length - 1].mode;
        // console.log(typeof queues);
        console.log(queues.length);
        console.log("mode is: ", mode);
        return mode;
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function getTime(username) {
    if (!(await getUUID(username))) return false;
    const url = `https://api.antisniper.net/player/v2?key=d8e085ab-fdbe-433c-8220-a636eb75b3a2&name=${username}`;
    let mode;
    let testArr = [0, 1, 2, 3];
    let response = await fetch(url);
    body = await response.json();
    try {
        const queues = body.player.queues;
        mode = queues[queues.length - 1].current_time;
        // console.log(typeof queues);
        console.log(queues.length);
        console.log("mode is: ", mode);
        return mode;
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function isPlayer(username) {
    const url = `https://api.mojang.com/users/profiles/minecraft/${username}`;
    let response = await fetch(url);
    let body;
    try {
        body = await response.json();
        return true;
    } catch {
        return false;
    }
}

async function addNameRole(name) {
			await interaction.member.roles.add(
				client.guilds.cache
					.get(interaction.guildId)
					.roles.cache.find((role) => role.name === name)
			);
		}
module.exports = {
    findMap,
    findType,
    getUUID,
    isPlayer,
    getMode,
    getTime,
    getMap,
    getGuildMembers,
    getDiscord,
};
