const rpc = require("./index");

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
