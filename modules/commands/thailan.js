const fs = require("fs");
module.exports.config = {
name: "thailan",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VănHuy",
	description: "thailan",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Nhạc Thái Lan")==0 || (event.body.indexOf("nhạc thái lan")==0)) {
		var msg = {
				body: "Nhạc Thái lan",
				attachment: fs.createReadStream(__dirname + `/noprefix/nhacthailan.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}