// Code your solutions in this file
function printBadges(myArray){
  for (let i = 0; i < myArray.length ; i++){
    console.log(`Welcome ${myArray[i]}! You are employee #${i+1}.`);
  }
  return myArray;
}

printBadges();


function theFlip(){
  return Math.random() >= 0.5;
}

function tailsNeverFails(){
  let x = 0;
  while (theFlip()) {
    x++;
  }
  return(`You got ${x} tails in a row!`);
}
