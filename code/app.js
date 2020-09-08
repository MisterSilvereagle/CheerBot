var tmi    = require('tmi.js');

var options = {
	options: {
		debug: true
	},
	connection: {
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username: "CheerBot_by_MSE",
		password: "oauth:rnyvwixgx2z4syllltih7xdknikvu4"
	},
	channels: ["thejocraft_live"]
};

var client = new tmi.client(options);
client.connect();

client.on('chat', function(channel, userstate, message, self) { 
  if(message.startsWith("!cheer")){ 
    var input01 = message.split(' ')[1];
    client.say("thejocraft_live", "cheer" + input01);
  }
});

client.on('chat', function(channel, userstate, message, self) { 
  if(message == "!mithelfen"){ 
    client.say("thejocraft_live", " @"+userstate.username+" | Du willst beim Projekt mithelfen? Sieh' dich unter mistersilvereagle[punkt]github[punkt]io[slash]cheerbot um!");
  }
});