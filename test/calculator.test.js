/*****Sample */
/*
 * Unit tests for lib/calculator.js
 */

describe('Calculator', function() {

    // inject the HTML fixture for the tests
    beforeEach(function() {
    //    var fixture = '<div id="fixture"><input id="x" type="text">' + 
    //     '<input id="y" type="text">' + 
    //     '<input id="add" type="button" value="Add Numbers">' +
    //     'Result: <span id="result" /></div>';
    var fixture = ' <div id="calculator" class="calculator"> ' +
    ' <!-- display --> ' +
    ' <input type="text" id="display" class="display" disabled> ' +
    ' <!-- keys -->  ' +
    ' <div class="keys">  ' +
    '  <!-- 4 rows of keys -->  ' +
    '   <div class="row">  ' +
    '    <button id="num7" value="7">7</button>  ' +
    '    <button id="num8"  value="8">8</button>  ' +
    '   <button id="num9"  value="9">9</button>  ' +
    '    <button id="plus" value="+" class="operator">+</button>  ' +
    '  </div>  ' +
    '  <div class="row">  ' +
    '    <button id="num4" value="4">4</button>  ' +
    '    <button id="num5" value="5">5</button>  ' +
    '   <button id="num6" value="6">6</button>  ' +
    '    <button id="minus"  value="-" class="operator">-</button>  ' +
    '  </div>  ' +
    '   <div class="row">  ' +
    '    <button id="num1" value="1">1</button>  ' +
    '   <button id="num2" value="2">2</button>  ' + 
    '   <button id="num3" value="3">3</button>  ' +
    '    <button id="multiply" value="*" class="operator">*</button>  ' +
    '  </div>  ' +
    '  <div class="row">  ' + 
    '   <button id="clear" value="C" class="operator">C</button>  ' +
    '    <button id="num0" value="0">0</button>  ' +
    '   <button id="divide" value="/" class="operator">/</button>  ' +
    '    <button id="equal" value="=" class="operator">=</button>  ' +
    '   </div>  ' +
    ' </div>  ' +

    ' </div>  '     ;
  
      document.body.insertAdjacentHTML(
        'afterbegin', 
         fixture);
     });
  
    // remove the html fixture from the DOM
    afterEach(function() {
       document.body.removeChild(document.getElementById('calculator'));
        
    });
  
    // call the init function of calculator to register DOM elements
    beforeEach(function() {
      //window.calculator.init();
      startUpCalculator();
    });
  
    it('should return 1 in display', function() {
        document.querySelector("#num1").click();
        expect(document.querySelector('#display').value).toBe('1'); 
    }); 
  
    // it('should calculate zero for invalid x value', function() {
    //   document.getElementById('x').value = 'hello';
    //   document.getElementById('y').value = 2;
    //    document.getElementById('add').click();
    //    expect(document.getElementById('result').innerHTML).toBe('0');
    //  });
  
    // it('should calculate zero for invalid y value', function() {
    //    document.getElementById('x').value = 1;
    //   document.getElementById('y').value = 'goodbye';
    //   document.getElementById('add').click();
    //   expect(document.getElementById('result').innerHTML).toBe('0');
    //  });
  
});



/*****Sample */
/*
 * Unit tests for lib/calculator.js
 */

// describe('Calculator', function() {

//     // inject the HTML fixture for the tests
//     beforeEach(function() {
//       var fixture = '<div id="fixture"><input id="x" type="text">' + 
//         '<input id="y" type="text">' + 
//         '<input id="add" type="button" value="Add Numbers">' +
//         'Result: <span id="result" /></div>';
  
//       document.body.insertAdjacentHTML(
//         'afterbegin', 
//         fixture);
//     });
  
//     // remove the html fixture from the DOM
//     afterEach(function() {
//       document.body.removeChild(document.getElementById('fixture'));
//     });
  
    // call the init function of calculator to register DOM elements
    beforeEach(function() {
      //window.calculator.init();
      startUpCalculator();
    });
  
//     it('should return 3 for 1 + 2', function() {
//       document.getElementById('x').value = 1;
//       document.getElementById('y').value = 2;
//       document.getElementById('add').click();
//       expect(document.getElementById('result').innerHTML).toBe('3');
//     });
  
//     it('should calculate zero for invalid x value', function() {
//       document.getElementById('x').value = 'hello';
//       document.getElementById('y').value = 2;
//       document.getElementById('add').click();
//       expect(document.getElementById('result').innerHTML).toBe('0');
//     });
  
//     it('should calculate zero for invalid y value', function() {
//       document.getElementById('x').value = 1;
//       document.getElementById('y').value = 'goodbye';
//       document.getElementById('add').click();
//       expect(document.getElementById('result').innerHTML).toBe('0');
//     });
  
//   });