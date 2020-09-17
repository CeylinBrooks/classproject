'use strict'

//Do you like sunflowers or daisies?


function askFlower() {
    var askFlower = prompt('Do you like Sunflowers or Daisies?');
    var flower;
    while(askFlower != 'Sunflowers' && askFlower != 'Daisies') {
      askFlower = prompt('Please specifically Sunflowers or Daisies')
    }
if (askFlower === 'Sunflowers') {
  flower = '<img src="../images/small-flowerlogo.png">';
} else if (askFlower === 'Daisies') {
  flower = '<img src="../images/small-flowerlogo.png">';
}

return flower;
}
//helper function

function getCount(){
  var count = prompt (' Great! How many would you like?');
  while(isNaN(count) || count === '') {
    count = prompt (" PLEASE enter a number. How many would you like?");
  }
  return count;
  }
  
function showOrder (){
  var result = '';
  var flowerType = askFlower();
  var total = getCount();

  for (var i = 0; i < total; i++){
    result = result + '<p>' + flowerType + '</p>';
  
  }
  return document.write(result);

}
showOrder();


//  //   return document.write('<h3> You\'re right  ' + askFlower + ' are wonderful </h3>');
//   }
  
//   askFlower();

//   function askColor() {
//     var askColor = prompt('Do you want to plant a garden today or tommorow?');
//     return document.write('<h3> Alright then, let\'s get started on that ' + askColor + ' </h3>');
//   }
  
//   askColor();

//   function askYard() {
//     var askYard = prompt('Do you have a large or small space?');
//     return document.write('<h3> Okay, we can work that ' + askYard + ' garden </h3>');
//   }
  
//   askYard();
