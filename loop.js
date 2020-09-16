

  while(response != 'sunflowers' && response != 'daisy') {
    item = prompt ('What flower do you like? Say sunflowers')
  }

  if (response === 'sunflowers') {
    item = '<img src="../images/small-flowerlogo.png">';
  } else if (response === 'daisy') {
    item = '<img src="../images/small-flowerlogo.png">';
  }

  return item;


  
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