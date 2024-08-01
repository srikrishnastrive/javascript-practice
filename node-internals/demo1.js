Promise.resolve().then(()=> console.log("printing from promise"));
process.nextTick(()=> console.log('printing from nextTick'));
process.nextTick(()=> console.log('printing from nextTick 1'));
process.nextTick(()=> console.log('printing from nextTick 2'));
setTimeout(()=> console.log('printing from timer'),0);