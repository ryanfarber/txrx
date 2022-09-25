// app.js

/*
this is an example app that you want to receive input.

1) open a terminal window and run the app.
2) create another script i.e. input.js, and run it in a separate terminal window. 
   this will be your input!
*/

const {Receiver} = require("../src")
const receiver = new Receiver(3000, true)
console.log(`\nplease open a new terminal window and paste the following command:\n\nnode ./test/transmitter.js\n`)
receiver.on("message", data => {
	console.log(`received data: "${data}" is type [${typeof data}]`)
})

receiver.listen()