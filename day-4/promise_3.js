"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n").map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function main() {
  const companyId = readLine();
  const employeeId = parseInt(readLine());

  const companies = [
    {
      companyCode:"PY234",
      employees: [293, 730, 637]
    },
    {
      companyCode:"GR023",
      employees:[823, 563]
    }, 
    {
      companyCode:"HC754",
      employees: [511, 529, 943]
    }, 
    {
      companyCode:"PA439",
      employees: [276, 188, 333]
    }, 
    {
      companyCode:"CX536",
      employees: [431, 923]
    },
    {
      companyCode:"RD310",
      employees: [356, 901]
    }
  ];
  
  const searchEmployee = () =>{
      return new Promise(function find(resolve,reject){
         let companyObject = companies.find((company)=> company.companyCode === companyId);
         if(companyObject !== undefined){
             let isEmployee = companyObject.employees.includes(employeeId);
             if(isEmployee){
                 resolve("Employee Found");
             }
             else {
                 reject("Employee Not Found");
             }
         }
         else {
             reject("Company Not Found");
         }
         
         
          
      })
}

const mypromise  = async () => {
    try {
        let results = await searchEmployee();
        console.log(results);
    } catch (e) {
        console.log(e);
    }
    
}

mypromise();
}
