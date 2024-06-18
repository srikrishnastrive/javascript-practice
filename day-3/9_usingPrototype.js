

/* Please do not modify anything above this line */

function Travel(kit, item) {
  this.kit = kit;
  this.item = item;
}

  const travelBag = {
    ticket : "Hyderabad-Vizag",
    clothes: ["Shirt", "T-Shirt","Jeans"],
    medicines: "Paracetamol",
    waterBottle: true,
    snacks:true
  };
  
  const item = readLine();
  
  const travelKit = Object.getOwnPropertyNames(travelBag);    
  const travel = new Travel(travelKit, item);
  Travel.prototype.isKitContainsItem = function (){
      return this.kit.includes(this.item);
  }
  console.log(travel.isKitContainsItem());

 

