console.log('start');


setTimeout(()=>{
    console.log("Inside timer");
    Promise.resolve().then(()=> console.log("printing from promise"));
    process.nextTick(()=> console.log('printing from nextTick'));
    process.nextTick(()=> console.log('printing from nextTick 1'));
    process.nextTick(()=> console.log('printing from nextTick 2'));
    console.log("Inside timer ends");
})
Promise.resolve().then(()=> console.log("printing from promise"));
process.nextTick(()=> console.log('printing from nextTick'));
process.nextTick(()=> console.log('printing from nextTick 1'));
process.nextTick(()=> console.log('printing from nextTick 2'));
setTimeout(()=> console.log('printing from timer'),0);


for (let i =0 ; i <= 1000000; i++){}
console.log('end');
