//given a manufacturing data ana number months to expiry
//write a js program to find expiry date


let manufacturingDate = new Date("2020-01-21");
let monthsToExpiry = parseInt(8);
/* Please do not modify anything above this line */
 
let expiryDate = new Date(manufacturingDate);
expiryDate.setMonth(manufacturingDate.getMonth()+monthsToExpiry);
console.log(expiryDate.getMonth());
  
/* Please do not modify anything below this line */  
console.log(`${expiryDate.getDate()}-${expiryDate.getMonth() + 1}-${expiryDate.getFullYear()}`);

