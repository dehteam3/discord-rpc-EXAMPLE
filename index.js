const RPC = require("discord-rpc"); // npm i discord-rpc
const rpc = new RPC.Client({ transport: "ipc" });
const color = require("chalk");
require("dotenv").config();
rpc.on("ready", () => {
  require("./rpc")();
});
module.exports = rpc;

rpc.login({
  clientId: process.env.CLIENT_ID,
});
