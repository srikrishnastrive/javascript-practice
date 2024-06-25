
function main() {
  const min = parseInt(readLine());
  const max = parseInt(readLine());
  const words = JSON.parse(readLine().replace(/'/g,'"'));
  
  const result = words.every((word)=>{
      word.length >= min && word.length <= max;
  })
  
  console.log(result);

  /* Write your code here */
}
