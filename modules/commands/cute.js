const fs = require("fs");
module.exports.config = {
	name: "cute",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Văn Huy", 
	description: "chill",
	commandCategory: "Không cần dấu lệnh",
	usages: "cute",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Cute")==0 || (event.body.indexOf("cute")==0)) {
		var msg = {
				body: "Cậu ơi, ăn gì cute quá dọ :3",
				attachment: fs.createReadStream(__dirname + `/noprefix/cute.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}