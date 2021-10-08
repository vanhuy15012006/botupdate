const fs = require("fs");
module.exports.config = {
	name: "cc",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Văn Huy MIb", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "cc",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Cc")==0 || (event.body.indexOf("cc")==0)) {
		var msg = {
				body: "Văn hóa lên bạn ơi, Văn hóa đâu rồi bạn😘",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}