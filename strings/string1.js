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
  const inputString = readLine();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let isStartsWithVowel = false;
  const lowerCaseString = inputString.toLowerCase();
  for (let letter of vowels){
      
      const results = lowerCaseString.startsWith(letter);
      if(results){
          isStartsWithVowel = true;
      }
  }
  
  if(isStartsWithVowel){
      console.log(isStartsWithVowel);
  }
  else {
      console.log(false);
  }
  /* Write your code here */
}
