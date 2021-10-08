const fs = require("fs");
module.exports.config = {
	name: "ulatr",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "chill",
	commandCategory: "Không cần dấu lệnh",
	usages: "ulatr",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ulatr")==0 || (event.body.indexOf("Ulatr")==0)) {
		var msg = {
				body: "Ui chời",
				attachment: fs.createReadStream(__dirname + `/noprefix/ulatr.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}