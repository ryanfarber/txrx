// input.js
/*
this is an example input script.
run this in a separate terminal window and make sure the receiver is on the same port
*/

const {Transmitter} = require("../src")
const sender = new Transmitter(3000)

sender.start()

// sender.send({test: "booper"})