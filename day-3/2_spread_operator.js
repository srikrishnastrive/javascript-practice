

function logFamily(father,mother,...children){
    let formatChildren = children.join(',');
    console.log(`${father} ${mother}`);
    console.log(formatChildren);
}



let familyArray = ['Jhon','Martha','Nikky','Boby'];
logFamily(...familyArray);

