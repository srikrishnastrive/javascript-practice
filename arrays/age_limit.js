

function main() {
  const ageLimit =11;
  const peopleAge = [ [ 12, 1, 2, 4, 1 ], [ 18, 20, 30, 45 ], [ 49, 12, 13, 24 ] ];
  
  function checkEachArrayAgeLimit(eachArray){
      return eachArray.every((age)=> age > ageLimit);
  }
  
  const isCorrect = peopleAge.map((eachArray)=> checkEachArrayAgeLimit(eachArray));
  
  console.log(isCorrect);

  /* Write your code here */
}
