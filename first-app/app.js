/* OS module example 
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}\nFree memory: ${freeMemory}`);
*/

// FileSystem module example
//Synchronous form
/*
const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);

//Asynchronous form
fs.readdir('$', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Result', files);
});
*/

//Event Module example
/*
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', (arg) => { // e, or eventArg
    console.log('Listener called', arg);
})

const Logger = require('./logger');
const logger = new Logger();
logger.log('Ubercarz');

logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg)
});

    logger.log("You're welcome");
    */

//HTTP example
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write("Hi");
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify(["Th-th-th-the Muscular Class","PERVERTS"]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');
