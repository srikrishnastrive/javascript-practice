
//give an object couple,write a pro to add the bride and grrom
//properties to the constructor function

function Marriage(couple) {
  const {bride, groom} = couple;

  this.bride = bride;
  this.groom = groom;
  this.family = function() {  
    console.log(`Mr & Mrs ${this.groom}`);
  };
}



const couple = {'bride':'Sita','groom':'Krishna'};
const marriedCouple = new Marriage(couple);
marriedCouple.family();

