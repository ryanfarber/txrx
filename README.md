# txrx
Send and receive messages between programs

## What is this?
Sometimes in development you just want to send some data to a running program, and dont want to have to mess around with servers or API requests.  This is much easier!


## Usage
First, you will typically have your program, where you will be receiving data. Let's call it app.js:

### app.js (receiver)
```javascript
// app.js

const {Receiver} = require("txrx")
const receiver = new Receiver(3000) // specify port

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

transmitter.start()
```

### Running the files
1) Open a console window and run `app.js`
```bash
node app.js
```
2) Open another console window and run `transmitter.js`. It will start running a command prompt.
```bash
node transmitter.js
>
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
