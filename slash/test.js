const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("test")
        .setDescription("Tests the bot."),
    run: async ({ client, interaction }) => {
        return await interaction.editReply("Test complete.");
    },
};
