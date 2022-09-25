// test.js






const {Sender, Receiver} = require("./index.js")


const sender = new Sender(3000)
const receiver = new Receiver(3000, true)



receiver.listen()
sender.start()

receiver.on("message", data => {
	console.log(`data: ${data}`)
})