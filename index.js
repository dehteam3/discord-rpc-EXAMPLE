const RPC = require("discord-rpc"); // npm i discord-rpc
const rpc = new RPC.Client({ transport: "ipc" });
const color = require("chalk");
require("dotenv").config();
rpc.on("ready", () => {
  setInterval(async () => {
    rpc.setActivity({
      details: "Hello World",
      state: `I am bored`,
      largeImageKey: "a-mod",
      largeImageText: "This is me right now",
      buttons: [
        {
          label: "I am bored (with LAZARBEAM)",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
      ],
    });
  }, 15 * 100);
  console.log(
    color.blue("[INFO] ") +
      color.green(
        `RPC is online on ${rpc.user.username}#${rpc.user.discriminator}`
      )
  );
});
module.exports = rpc;
rpc.login({
  clientId: process.env.CLIENT_ID,
});
