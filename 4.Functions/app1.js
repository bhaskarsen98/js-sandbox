"use strict"

//** Functions**
  function testFunc(s){

    console.log(typeof(s));
  
  }

  testFunc(10);
  testFunc('hello');
  testFunc(true);

  //local variables can be declared using let keyword inside the function body
  //outer variables (global) are declaed outside the function def.
  //If a same-named variable is declared inside the function then it shadows the outer one

  // It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most 
  //variables reside in their functions. Sometimes though, they can be useful to store project-level data.

  //parameters/Args

    function reply(name, message){

      console.log(name + ' : ' + message);
    
    }

    reply('Bhaskar', 'Thanks for dropping by :)'); //call1
    reply('Bhaskar', ); //call2
    reply('Bhaskar'); //call3


    // op:
    // Bhaskar : Thanks for dropping by :)
    // Bhaskar : undefined 
    // Bhaskar : undefined


    //call 1 works fine but in call2 and call3, the  2nd argument is missing hence JS assigns undefined to message
    // while this isn't desirable where return value is critical to the value of args , hence it is better to provide a default value to arg:

    function reply(name = 'John Doe', message = '**no message**'){

      console.log(name + ' : ' + message);
    
    }

    reply();

    // op
    // John Doe : **no message**


    //return values

    
    function reply(name = 'John Doe', message = '**no message**'){

      console.log(name + ' : ' + message);      
      return 'sent!'; //returns a string 'sent!'

    }

    function reply(name = 'John Doe', message = '**no message**'){

      console.log(name + ' : ' + message);      
      return; //returns undefined
              //here using return in function call transfers the program call to the point form where it is called , and returns undefined
      
    }

    function reply(name = 'John Doe', message = '**no message**'){

      console.log(name + ' : ' + message);      
      confirmation = confirm('Do you want to send');

      if(confirmation){
        return 'sent'; //returns 'sent' if true
      }else{
        return 'not sent'; //returns 'not sent' if false
      }

    }

    //if return statement is awfully long, you may add a parenthesis and then wrap the return statement accross multiple lines
    //function names are usually verbs
    //a function shall perform only the task that its name suggests
    //a function shall preferablly perform one task

    //like:
    function showPrimes(n) {
      nextPrime: for (let i = 2; i < n; i++) {
    
        for (let j = 2; j < i; j++) {
          if (i % j == 0) continue nextPrime;
        }
    
        alert( i ); // a prime
      }
    }

            //  vs  

            
    function showPrimes(n) {

      for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
    
        alert(i);  // a prime
      }
    }
    
    function isPrime(n) {
      for (let i = 2; i < n; i++) {
        if ( n % i == 0) return false;
      }
      return true;
    }

    //**function expression **
    function reply(name = 'John Doe', message = '**no message**') {

      console.log(name + ' : ' + message);
      confirmation = confirm('Do you want to send');
    
      if (confirmation) {
    
        return 'sent';
      }else{
        return 'not sent';
      }
    
    }
    
    
    let replyr = reply;
    
    console.log('call 1' + reply);
    
    console.log('call 2' + replyr);
    console.log('call 3' + reply());
    
    console.log('call 4' + replyr());

    

    // call 1function reply(name = 'John Doe', message = '**no message**') {

    //   console.log(name + ' : ' + message);
    //   confirmation = confirm('Do you want to send');
    
    //   if (confirmation) {
    
    //     return 'sent';
    //   }else{
    //     return 'not sent';
    //   }
    
    // } 
    // call 2function reply(name = 'John Doe', message = '**no message**') {
    
    //   console.log(name + ' : ' + message);
    //   confirmation = confirm('Do you want to send');
    
    //   if (confirmation) {
    
    //     return 'sent';
    //   }else{
    //     return 'not sent';
    //   }
    
    // } 
    // John Doe : **no message** 
    // call 3sent 
    // John Doe : **no message** 
    // call 4sent 

  //in javascript, a function  just like any other value can be assigned to variable as showed

  //call 1 and call 2 dont execute the function, but they rather pass their source code as a string
  
  //function expression can also be used to declare functions

  let userName = function(user){
    console.log(user)
  };
  //such functions are called anonymous 
  //dont forget semicolon in such kind of declration at the end of function block;

  // also

  let func1 = userName;
  // isnt same as
  let func2 = userName();

  // func2 is a call to userName not userName function

  //Immidiately invokable function expressions(IIFE)

    (function (){
      console.log('hi IIFE here!');
    })

    //Now this is just a function, to make it execute we need to call it using paranthesis

    // ie.
    
    (function (){
      console.log('hi IIFE here!');
    })();

    // a function can also be passed as parameters to other functions as well
    //like here:

    function transportType(wheels,checker){
      checker(wheels);    //checker is an arg function
    }

    transportType(  //function call
      4, 
      function(n){    //illustration for callback function
                      //https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
        if(n==4){
          console.log('its a car');
        }else{
          console.log('its not a car');
      }
    });

    //The main diff b/w a declaration and expression is how the JS engine works with them
    //An expression is usable when code flow reaches the right side of the '=' operator in the expression
    //While declarations are available for use in any part of code (irrespective of their point of declaration)**
    //**In strict mode declaration respect the limitaions of block and scope  (since ES2015)

    //expressions are helpful when we need conditional declarations that are visible outside their block's scope
    // see https://javascript.info/function-expressions for example

  //**Arrow Functions**
    
    // let func = (arg1, arg2, ..., argN) => expression
    
    //certain ex:

    let twice = n => n*2;
    let adder = (a,b) => a+b;
    let greet = () => console.log('hi there!');

    //arrow functions can be used to create functions dynamically , same as function expressions

    

    