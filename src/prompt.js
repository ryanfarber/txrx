// prompt.js

const readline = require("readline")
const EventEmitter = require("events")
const util = require("util")

function Prompt(config = {}) {

	let prefix = config.prefix || "> "

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	})

	this.start = function() {
		rl.question(prefix, input => {
			this.emit("message", input)
			this.start()
		})
	}
	EventEmitter.call(this)
}
util.inherits(Prompt, EventEmitter)
module.exports = Prompt