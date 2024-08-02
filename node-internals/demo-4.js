const fs = require('fs');
//pending callback queue
fs.readFile('node-internals/readme.md','utf-8',(err,data)=>{
    if(err){
        console.error(err);
        return
        
    }
    process.nextTick(()=> console.log('next Tick from file read 1'));
    console.log(data);
});

fs.readFile('node-internals/readme.md','utf-8',(err,data)=>{
    if(err){
        console.error(err);
        return
        
    }
    process.nextTick(()=> console.log('next Tick from file read 2'));
    console.log(data);
});
//next tick
process.nextTick(()=> console.log('next Tick'));

// //promise
Promise.resolve().then(()=> console.log("printing from promise"));

//timer
setTimeout(()=> console.log("Timer 1 "),0);

//checkQueue

setImmediate(() => console.log("Immediate callback"));

for (let i = 0; i < 1000000000; i++){}