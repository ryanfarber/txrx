# txrx 📤📥
Send and receive messages between programs

## What is this?
Sometimes in development you just want to send some data to a running program, and dont want to have to mess around with servers or API requests.  This is much easier!


## Usage
First, you will typically have your program/app/etc, where you will be receiving data. Let's call it app.js.

You will instantiate a `Receiver()` with a port of your choice.  it defaults to `3000`

### app.js (receiver)
```javascript
// app.js

const {Receiver} = require("txrx")
const receiver = new Receiver(3000) // specify port. default 3000

receiver.on("message", data => {
    console.log(data)
})

receiver.listen()

/*
    ~ your code ~
*/
```

Next, create another script that we will use to run your transmitter/sender. 

### transmitter.js
```javascript
// transmitter.js

const {Transmitter} = require("txrx")
const transmitter = new Transmitter()

transmitter.start() // starts a command prompt in console
```

### Running the files
1) Open a console window and run `app.js`
```bash
node app.js
```
2) Open another console window and run `transmitter.js`. It will start running a command prompt.
```bash
node transmitter.js
> _
```
3) Type a message
```bash
# transmitter.js running...
> hello world
```
4) Check back in your `app.js` console window. You should now see the message logged!
```bash
# app.js running...
hello world
```