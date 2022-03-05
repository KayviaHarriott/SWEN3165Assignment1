// select all the buttons
const buttons = document.querySelectorAll('button');
// select the <input type="text" class="display" disabled> element
const display = document.querySelector('.display');

// add eventListener to each button
function startUpCalculator(){
	buttons.forEach(function(button) {
	  button.addEventListener('click', calculate);
	});
}

// calculate function
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    // check if the display is not empty then only do the calculation
    if (display.value !== '') {
      // calculate and show the answer to display
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {
    // clear everything on display
    display.value = '';
  } else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
}

startUpCalculator();



/***Sample */

// 'use strict';

// window.calculator = window.calculator || {};

// (function() {
// 	var getIntById = function(id) {
// 		return parseInt(document.getElementById(id).value, 10);
// 	};

// 	var calculate = function() {
// 		var sum = getIntById('x') + getIntById('y');
// 		document.getElementById('result').innerHTML = isNaN(sum) ? 0 : sum;
// 	};

// 	window.calculator.init = function() {
// 		document.getElementById('add').addEventListener('click', calculate);
// 	};

// })();


/***Sample of html */

// <!DOCTYPE html>
// <html>
// <head>
// 	<title>Sample Calculator</title>
// 	<script src="lib/calculator.js"></script>
// </head>
// <body>
// 	<div id="fixture">
// 	    <input id="x" type="text">
// 	    <input id="y" type="text">
// 	    <input id="add" type="button" value="Add Numbers">
// 	    Result: <span id="result" />
// 	</div>
// </body>
// </html>