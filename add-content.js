'use strict'

function askFlower() {
    var askFlower = prompt('What flower do you like?');
    return document.write('<h3> You\'re right  ' + askFlower + ' are nice </h3>');
  }
    while(response != 'sunflower') {
      message = prompt( 'What flower do you like? Say sunflower')
    }
  
  askFlower();

  function askColor() {
    var askColor = prompt('Do you want to plant a garden today or tommorow?');
    return document.write('<h3> Alright then, let\'s get started on ' + askColor + ' </h3>');
  }
  
  askColor();

  function askYard() {
    var askYard = prompt('Do you have a large or small space?');
    return document.write('<h3> Okay, we can work that ' + askYard + ' </h3>');
  }
  
  askYard();
