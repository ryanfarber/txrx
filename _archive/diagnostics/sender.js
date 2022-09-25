// sender.js

const ds = require("diagnostics_channel")
const EventEmitter = require("events")
const util = require("util")
const Prompt = require("../prompt.js")

function Sender(name) {
	const channel = ds.channel(name)
	const prompt = new Prompt()

	prompt.on("message", data => {
		channel.publish(data)
	})
	EventEmitter.call(this)
}
util.inherits(Sender, EventEmitter)
module.exports = Sender