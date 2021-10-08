module.exports.config = {
	name: "topdonate",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Văn Huy",
	description: "Top donate",
	commandCategory: "Top donate",
	cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`\n★𝕋𝕠𝕡 𝕕𝕠𝕟𝕒𝕥𝕖\n\n\n\n\n\nXin chân thành cảm ơn các bạn đã ủng hộ`, event.threadID, event.messageID);