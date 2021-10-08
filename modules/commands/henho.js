module.exports.config = {
  name: "henho",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Văn Huy MiB",
  description: "mình hẹn hò nhé em😢🥺",
  commandCategory: "group",
  usages: " @hẹn hò nhé em @tag",
  cooldowns: 5,
  dependencies: {"fs-extra": "","axios": ""}
}
  module.exports.run = async function ({ api, args, event, client }) {
    function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));};
    const fs = global.nodemodule["fs-extra"];
    const axios = global.nodemodule["axios"];
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Tag người bạn muốn hẹn hò❤️", event.threadID);
  var emoji = ["❤️"];
  var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
  var love = ((await axios.get("https://ngvanhuy.tk/huy.json")).data).love;
  var linklove = love[Math.floor(Math.random() * love.length)];
  var getlove = (await axios.get(linklove, {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + "/cache/love.gif", Buffer.from(getlove, "utf-8"));
  let Avatar = (await axios.get( `https://graph.facebook.com/${mention}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
    fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
  let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
    fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );
    
    var imglove = [];
  imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
  imglove.push(fs.createReadStream(__dirname + "/cache/love.gif"));
  imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
  
  let dt = await api.getUserInfo(event.senderID);
  let data = await api.getUserInfo(mention);
  let name_1 = dt[event.senderID].name;
  let name_2 = data[parseInt(mention)].name;
  
  api.changeNickname( `Ny của ${name_2} ${random_emoji}`, event.threadID, parseInt(event.senderID) );
  api.changeNickname( `Ny của ${name_1} ${random_emoji}`, event.threadID, parseInt(mention) );
  
  var arraytag = [];
    arraytag.push({id: event.senderID, tag: name_1});
    arraytag.push({id: mention, tag: name_2});
    var a = function (a) { api.sendMessage(a, event.threadID); }
    a("Anh Yêu Em ❤️");
    await delay(2000);
    a("Anh Yêu Em Lắm🥺");
    await delay(2000);
    a({body: name_1+" "+"❤️𝐻ẹ𝓃 𝒽ò❤️"+" "+name_2, mentions: arraytag, attachment: imglove});
    fs.unlinkSync(__dirname+'/cache/avt.png');
    fs.unlinkSync(__dirname+'/cache/love.gif');
    fs.unlinkSync(__dirname+'/cache/avt2.png');
  };
  
module.exports.handleEvent = async function({ api, args, event, client  }) {
  if(!event.body) return;
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));};
  let {body} = event;
   body = body.toLowerCase();
  var indexOf = function(value) {return body.indexOf(value) != -1};
  if(indexOf("Anh Yêu Em") ||  indexOf("I love you")) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Tag người bạn muốn xin lỗi", event.threadID);
  var emoji = [""];
  var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
  var love = ((await axios.get("https://ngvanhuy.tk/huy.json")).data).love;
  var linklove = love[Math.floor(Math.random() * love.length)];
  var getlove = (await axios.get(linklove, {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + "/cache/love.gif", Buffer.from(getlove, "utf-8"));
  let Avatar = (await axios.get( `https://graph.facebook.com/${mention}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
    fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
  let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
    fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );
    
    var imglove = [];
  imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
  imglove.push(fs.createReadStream(__dirname + "/cache/love.gif"));
  imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
  
  let dt = await api.getUserInfo(event.senderID);
  let data = await api.getUserInfo(mention);
  let name_1 = dt[event.senderID].name;
  let name_2 = data[parseInt(mention)].name;
  
  api.changeNickname( `Ny của ${name_2} ${random_emoji}`, event.threadID, parseInt(event.senderID) );
  api.changeNickname( `Ny của ${name_1} ${random_emoji}`, event.threadID, parseInt(mention) );
  
  var arraytag = [];
    arraytag.push({id: event.senderID, tag: name_1});
    arraytag.push({id: mention, tag: name_2});
    var a = function (a) { api.sendMessage(a, event.threadID); }
    a("Anh Yêu Em ❤️");
    await delay(2000);
    a("Ạnh Yêu Em Lắm 🥺");
    await delay(2000);
    a({body: name_1+" "+"💓"+" "+name_2, mentions: arraytag, attachment: imglove});
    fs.unlinkSync(__dirname+'/cache/avt.png');
    fs.unlinkSync(__dirname+'/cache/love.gif');
    fs.unlinkSync(__dirname+'/cache/avt2.png');
  }
}