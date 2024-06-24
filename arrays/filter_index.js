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
  const myArray = ['3', '2', '3', '3', '4', '2', '5', '4', '3', '5', '10'];
  const filteredArray = myArray.filter((value,index,array)=> array.indexOf(value) === index);
  console.log(filteredArray);
}
