'use strict'

function askFlower() {
    var askFlower = prompt('What flower do you like?');
    return document.write('<h3> You\'re right  ' + askFlower + ' are wonderful </h3>');
  }
  


  askFlower();

  function askColor() {
    var askColor = prompt('Do you want to plant a garden today or tommorow?');
    return document.write('<h3> Alright then, let\'s get started on that ' + askColor + ' </h3>');
  }
  
  askColor();

  function askYard() {
    var askYard = prompt('Do you have a large or small space?');
    return document.write('<h3> Okay, we can work that ' + askYard + ' garden </h3>');
  }
  
  askYard();

  function getCount(){
    var count = prompt ('Great! How many would you like?');
    while(isNaN(count) || count == '') {
      count = prompt("PLEASE enter a number. How many would you like?");
    }
    return count;
  }

function showOrder() { 
  var result = '';
  var itemType = askYard();
  var total = getCount();

  for(var i =0; i < total; i++) {
    result = result + '<p>' + itemType + '</p>';
  }
return document.write(result);

}

getCount(); 