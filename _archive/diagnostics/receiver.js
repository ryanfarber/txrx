// receiver.js


const dc = require("diagnostics_channel")
const EventEmitter = require("events")
const util = require("util")

function Receiver(name) {
	const channel = dc.channel(name)


	this.listen = function() {
		channel.subscribe((data, name) => {
			this.emit("data", data)
			this.emit("message", data)
		})
	}
	EventEmitter.call(this)
}
util.inherits(Receiver, EventEmitter)
module.exports = Receiver