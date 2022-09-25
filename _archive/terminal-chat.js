
const EventEmitter = require("events")
const util = require("util")
let Client = require("./client.js")
let Server = require("./server.js")
const chalk = require("chalk")

const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})




function TerminalChat(port) {

	const server = new Server(port)
	const client = new Client(port)



	this.start = async function() {

		server.on("message", data => {
			this.emit("message", data)
		})

		server.start()
		client.on("connected", () => {
			prompt()
		})

	}



	function prompt() {
		rl.question("", input => {
			if(input == "exit") return process.exit(0)
			client.send(input)
			prompt()
		})
	}
	EventEmitter.call(this)
}

util.inherits(TerminalChat, EventEmitter)




const chat = new TerminalChat(3000)


chat.start()

chat.on("message", data => {
	console.log(chalk.green(`data: "${data}"`))
})

// chat.on("message", console.log)

