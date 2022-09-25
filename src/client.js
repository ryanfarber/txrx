// client.js (sender)

const EventEmitter = require("events")
const util = require("util")
const Prompt = require("./prompt.js")
const Logger = require("@ryanforever/logger").v2
const logger = new Logger("transmitter", {debug: false})


function Client(port) {

	port = port || 3000
	
	const socket = require("socket.io-client")(`http://localhost:${port}`)
	socket.on("connect", () => this.emit("connected"))

	this.start = function() {
		logger.log(`sending on port ${port}. gimme data!`)
		const prompt = new Prompt()
		prompt.on("message", data => socket.send(data))
		prompt.start()
	}

	this.send = function(input) {
		return socket.send(input)
	}

	EventEmitter.call(this)
}

util.inherits(Client, EventEmitter)
module.exports = Client