// app.js

/*
this is an example app that you want to receive input.

1) open a terminal window and run the app.
2) create another script i.e. input.js, and run it in a separate terminal window. 
   this will be your input!
*/

const {Receiver} = require("../diagnostics")
const receiver = new Receiver("test")

receiver.on("message", data => {
	console.log(data)
	console.log(typeof data)
})

receiver.listen()