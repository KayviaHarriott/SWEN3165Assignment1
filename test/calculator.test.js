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
    '         <div class="row">   ' +
    '         <button id="changeSign" value="changeSign">+/-</button>   ' +
    '          <button id="squareRoot"  value="squareRoot">&#8730</button>   ' +
    '         <button id="percentage"  value="percentage">%</button>   ' +
    '     </div>   ' +
    '      <div class="row">   ' +
    '          <button id="memRecall" value="memRecall">MRC</button>   ' +
    '          <button id="memoryMinus"  value="memoryMinus">M-</button>   ' +
    '         <button id="memoryAdd"  value="memoryAdd">M+</button>   ' +
    '     </div>   ' +

    
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
  

    /**existing functionalities */

    /**checking that all buttons on calculator show in display*/
    it('should return 0 in display', function() {
        document.querySelector("#num0").click();
        expect(document.querySelector('#display').value).toBe('0'); 
    }); 

    it('should return 1 in display', function() {
        document.querySelector("#num1").click();
        expect(document.querySelector('#display').value).toBe('1'); 
    }); 

    it('should return 2 in display', function() {
        document.querySelector("#num2").click();
        expect(document.querySelector('#display').value).toBe('2'); 
    }); 

    it('should return 3 in display', function() {
        document.querySelector("#num3").click();
        expect(document.querySelector('#display').value).toBe('3'); 
    }); 

    it('should return 4 in display', function() {
        document.querySelector("#num4").click();
        expect(document.querySelector('#display').value).toBe('4'); 
    }); 
 
    it('should return 5 in display', function() {
        document.querySelector("#num5").click();
        expect(document.querySelector('#display').value).toBe('5'); 
    });  

    it('should return 6 in display', function() {
        document.querySelector("#num6").click();
        expect(document.querySelector('#display').value).toBe('6'); 
    }); 

    it('should return 7 in display', function() {
        document.querySelector("#num7").click();
        expect(document.querySelector('#display').value).toBe('7'); 
    }); 

    it('should return 8 in display', function() {
        document.querySelector("#num8").click();
        expect(document.querySelector('#display').value).toBe('8'); 
    }); 

    it('should return 9 in display', function() {
        document.querySelector("#num9").click();
        expect(document.querySelector('#display').value).toBe('9'); 
    }); 

    it('should return + in display', function() {
        document.querySelector("#plus").click();
        expect(document.querySelector('#display').value).toBe('+'); 
    }); 

    it('should return - in display', function() {
        document.querySelector("#minus").click();
        expect(document.querySelector('#display').value).toBe('-'); 
    }); 

    it('should return * in display', function() {
        document.querySelector("#multiply").click();
        expect(document.querySelector('#display').value).toBe('*'); 
    }); 

    it('should return / in display', function() {
        document.querySelector("#divide").click();
        expect(document.querySelector('#display').value).toBe('/'); 
    }); 

    /**checking operations with single and double digits*/
    it('should add two positive numbers, 1 plus 5 to give 6', function() {
        document.querySelector("#num1").click();
        document.querySelector("#plus").click();
        document.querySelector("#num5").click();
        document.querySelector("#equal").click();  
        expect(document.querySelector('#display').value).toBe('6'); 
    }); 

    /**test for two operators */
    it('should add three positive numbers, 1 plus 5 plus 5 to give 6', function() {
        document.querySelector("#num1").click();
        document.querySelector("#plus").click();
        document.querySelector("#num5").click();
        document.querySelector("#plus").click();
        document.querySelector("#num5").click();
        document.querySelector("#equal").click();  
        expect(document.querySelector('#display').value).toBe('11'); 
    }); 

    it('should add two positive double digit numbers, 10 plus 15 to give 25', function() {
        document.querySelector("#num1").click();
        document.querySelector("#num5").click();
        document.querySelector("#plus").click();
        document.querySelector("#num1").click();
        document.querySelector("#num5").click();
        document.querySelector("#equal").click();  
        expect(document.querySelector('#display').value).toBe('30'); 
    }); 

    it('should subtract two positive numbers, 8 minus 3 to give 5', function() {
        document.querySelector("#num8").click();
        document.querySelector("#minus").click();
        document.querySelector("#num3").click();
        document.querySelector("#equal").click();  
        expect(document.querySelector('#display').value).toBe('5'); 
    }); 

    /**test for two operators */
    it('should subtract three positive numbers, 8 minus 3  minus 3 to give 2', function() {
        document.querySelector("#num8").click();
        document.querySelector("#minus").click();
        document.querySelector("#num3").click();
        document.querySelector("#minus").click();
        document.querySelector("#num3").click();
        document.querySelector("#equal").click();  
        expect(document.querySelector('#display').value).toBe('2'); 
    }); 

    it('should subtract two double digit positive numbers, 8 minus 3 to give 5', function() {
        document.querySelector("#num1").click();
        document.querySelector("#num9").click();
        document.querySelector("#minus").click();
        document.querySelector("#num1").click();
        document.querySelector("#num1").click();
        document.querySelector("#equal").click();  
        expect(document.querySelector('#display').value).toBe('8'); 
    }); 


    
    it('should multiply two positive numbers, 5 times 3 to give 15', function() {
        document.querySelector("#num5").click();
        document.querySelector("#multiply").click();
        document.querySelector("#num3").click();
        document.querySelector("#equal").click();   
        expect(document.querySelector('#display').value).toBe('15'); 
    }); 

    /**test for two operators */
    it('should multiply three positive numbers, 5 times 3 imes 3 to give 15', function() {
        document.querySelector("#num5").click();
        document.querySelector("#multiply").click();
        document.querySelector("#num3").click();
        document.querySelector("#multiply").click();
        document.querySelector("#num3").click();
        document.querySelector("#equal").click();   
        expect(document.querySelector('#display').value).toBe('45'); 
    }); 


    it('should multiply two double digit positive numbers, 25 times 32 to give 800', function() {
        document.querySelector("#num2").click();
        document.querySelector("#num5").click();
        document.querySelector("#multiply").click();
        document.querySelector("#num3").click();
        document.querySelector("#num2").click();
        document.querySelector("#equal").click();   
        expect(document.querySelector('#display').value).toBe('800'); 
    }); 


    it('should divide two positive numbers, 4 divided by 2 to give 2', function() {
        document.querySelector("#num4").click();
        document.querySelector("#divide").click();
        document.querySelector("#num2").click();
        document.querySelector("#equal").click();   
        expect(document.querySelector('#display').value).toBe('2'); 
    }); 

    /**test for two operators */
    it('should divide three positive numbers, 4 divided by 2 divided by 2 to give 2', function() {
        document.querySelector("#num4").click();
        document.querySelector("#divide").click();
        document.querySelector("#num2").click();
        document.querySelector("#divide").click();
        document.querySelector("#num2").click();
        document.querySelector("#equal").click();   
        expect(document.querySelector('#display').value).toBe('1'); 
    }); 

    it('should divide two double digit positive numbers, 44 divided by 22 to give 11', function() {
        document.querySelector("#num4").click();
        document.querySelector("#num4").click();
        document.querySelector("#divide").click();
        document.querySelector("#num2").click();
        document.querySelector("#num2").click();
        document.querySelector("#equal").click();   
        expect(document.querySelector('#display').value).toBe('2'); 
    }); 

    /**check for NaN or Infinity responses and zero cases*/
    it('should return Inifinity, not a number when divided by 0, 6 divided by 0 to give Infinity', function() {
        document.querySelector("#num6").click();
        document.querySelector("#divide").click();
        document.querySelector("#num0").click();
        document.querySelector("#equal").click();   
        expect(document.querySelector('#display').value).toBe('Infinity'); 
    }); 

    it('should return NaN, not a number when 0 divided by 0, 0 divided by 0 to give NaN', function() {
        document.querySelector("#num0").click();
        document.querySelector("#divide").click();
        document.querySelector("#num0").click();
        document.querySelector("#equal").click();   
        expect(document.querySelector('#display').value).toBe('NaN'); 
    }); 

    it('should return NaN, not a number when 0 multiplied by 0, 0 divided by 0 to give 0', function() {
        document.querySelector("#num0").click();
        document.querySelector("#multiply").click();
        document.querySelector("#num0").click();
        document.querySelector("#equal").click();   
        expect(document.querySelector('#display').value).toBe('0'); 
    }); 

    /**test for negative numbers */

    /**test for decimals */

    /**Test for additional functionalities */
    /**change sign */
    it('should return a positive number, negative 5 to minus 5', function() {
        document.querySelector("#minus").click();
        document.querySelector("#num5").click();
        document.querySelector("#changeSign").click(); 
        expect(document.querySelector('#display').value).toBe('5'); 
    }); 

    it('should return a positive number, negative 6 to negative 6', function() {
        document.querySelector("#num6").click();
        document.querySelector("#changeSign").click(); 
        expect(document.querySelector('#display').value).toBe('-6'); 
    }); 

    /**squareroot */
    it('should return square root of number, 25 should return 5', function() {
        document.querySelector("#num2").click();
        document.querySelector("#num5").click();
        document.querySelector("#squareRoot").click(); 
        expect(document.querySelector('#display').value).toBe('5'); 
    }); 

    it('should return NaN, -25 should return NaN', function() {
        document.querySelector("#num2").click();
        document.querySelector("#num5").click();
        document.querySelector("#changeSign").click();
        document.querySelector("#squareRoot").click(); 
        expect(document.querySelector('#display').value).toBe('NaN'); 
    });  

    /**percentage */
    it('should return percentage of a number, 25 should return 0.25', function() {
        document.querySelector("#num2").click();
        document.querySelector("#num5").click();
        document.querySelector("#percentage").click(); 
        expect(document.querySelector('#display').value).toBe('0.25'); 
    }); 

    it('should return return 0, 0 should return 0', function() {
        document.querySelector("#num0").click();
        document.querySelector("#percentage").click();
        expect(document.querySelector('#display').value).toBe('0'); 
    });  

    /**Memory recall */
    it('should store what is on display and show proof my using in memory minus , memory recall is 10, 10 minus 3 gives 7', function() {
        document.querySelector("#num1").click();
        document.querySelector("#num0").click();
        document.querySelector("#memRecall").click();
        document.querySelector("#num3").click();
        document.querySelector("#memoryMinus").click();
        expect(document.querySelector('#display').value).toBe('7'); 
    });  

    it('should store what is on display and show proof my using in memory plus , memory recall is 10, 10 plus 3 gives 13', function() {
        document.querySelector("#num1").click();
        document.querySelector("#num0").click();
        document.querySelector("#memRecall").click();
        document.querySelector("#num3").click();
        document.querySelector("#memoryAdd").click();
        expect(document.querySelector('#display').value).toBe('13'); 
    });  

    it('should store what is on display and show proof my using in memory minus , memory recall is 10, 10 minus 3 gives 7', function() {
        document.querySelector("#num1").click();
        document.querySelector("#memRecall").click();
        document.querySelector("#num3").click();
        document.querySelector("#memoryMinus").click();
        expect(document.querySelector('#display').value).toBe('-2'); 
    });  


});

