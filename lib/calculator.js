

// add eventListener to each button
function startUpCalculator(){	

  //
  const buttons = document.querySelectorAll('button');
  buttons.forEach(function(button) {
	  button.addEventListener('click', calculate);
	});
}


// calculate function

function calculate(event) {

  const display = document.querySelector('.display');
  // current clicked buttons value
  const clickedButtonValue = event.target.value;
  //var memRecall = 1;

  if (clickedButtonValue === '=') {
    
    // check if the display is not empty then only do the calculation
    if (display.value !== '') {
      // calculate and show the answer to display
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {
    // clear everything on display
    display.value = '';
  }   
  else if (clickedButtonValue === 'changeSign') {
    // change display value from negative to positive and vice versa
    display.value = eval(eval(display.value)*-1)
  }

  else if (clickedButtonValue === 'squareRoot') {
    // display square root of display value
    display.value = Math.sqrt(eval(display.value));
  }

  else if (clickedButtonValue === 'percentage') {
    // display percentage by 100% on display
    var numOfZeros = display.value.toString().length
    display.value = (display.value / Math.pow(10,numOfZeros)) ; //(eval(display.value)/dividedBy) * 100;
  }

  else if (clickedButtonValue === 'memRecall') {
    // to store or clear memory with display value
    //memRecall = eval(display.value);
    
    if (display.value == ''){
      display.value = memRecall;
    } //else if (display.value === memRecall){
      //memRecall = 0;
      //display.value = 0;
    //}
    else{

      memRecall = eval(display.value);
      display.value = ''
    }
    
    // if (memRecall === eval(display.value) ){
    //   memRecall = 0;
    // }
    // else {
    //   memRecall = eval(display.value);
    //   display.value = memRecall;
    // }
  }

  else if (clickedButtonValue === 'memoryMinus') {
    // to subtract display from memory
    display.value = eval(memRecall) - eval(display.value);
  }

  else if (clickedButtonValue === 'memoryAdd') {
    // to add display to memory
    display.value = eval(memRecall) + eval(display.value);
  }

  else {
    // otherwise concatenate it to the display
    
    display.value += clickedButtonValue;
  }
}

startUpCalculator();