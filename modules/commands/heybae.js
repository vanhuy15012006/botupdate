const fs = require("fs");
module.exports.config = {
	name: "heybae",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "chill",
	commandCategory: "Không cần dấu lệnh",
	usages: "heybae",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Heybae")==0 || (event.body.indexOf("heybae")==0)) {
		var msg = {
				body: "Hey Bae, I love you",
				attachment: fs.createReadStream(__dirname + `/noprefix/heybae.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}