
function askFlower() {
  var askFlower = prompt('What flower do you like?');
  return document.write('<h3> You\'re right  ' + askFlower + ' are wonderful </h3>');
}


while(response != 'sunflowers' && response != 'daisy') {
  item = prompt ('What flower do you like? Say sunflowers')
}

if (response === 'sunflowers') {
  item = '<img src="../images/small-flowerlogo.png">';
} else if (response === 'daisy') {
  item = '<img src="../images/small-flowerlogo.png">';
}

return item;
