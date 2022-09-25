// server.js (receiver)

const EventEmitter = require("events")
const util = require("util")
const server = require("http").createServer()
const io = require("socket.io")(server)
const chalk = require("chalk")
const Logger = require("@ryanforever/logger").v2



function Server(port, debug) {
	port = port || 3000
	debug = debug || false
	const logger = new Logger("reciever", {debug})

	io.on("connection", client => {
		const id = client.id
		logger.debug(`client ${chalk.magenta(id)} connected!`)
		// on message, emit a message
		client.on("message", data => this.emit("message", data))
	})

	io.on("disconnect", data => {
		console.log("disconnected")
	})

	this.listen = function() {
		server.listen(port, () => logger.debug(`receiver listening on port ${port}`))
	}

	// alias
	this.start = this.listen

	EventEmitter.call(this)
}

util.inherits(Server, EventEmitter)
module.exports = Server