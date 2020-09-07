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
  if(message == "!discord"){ 
    client.say("LadyGoldbird", "/me @"+userstate.username+" | Hier geht's zum LadyGoldbird-Discord-Server: https://discord.gg/G2EdA7a");
  }
});