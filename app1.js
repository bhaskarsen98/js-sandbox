"use strict"





//****conditional branching (Mar 1 2021)****

  let birthYear = prompt("Guess my year of birth ?");
  let wrongAns = true;
  while(wrongAns){
    if(birthYear == 1998){
      alert("yay! we are same age !");
      wrongAns = false;
    } else if(birthYear < 1998){
      alert("Too early :( , give it another go.");
      birthYear = prompt("Guess my year of birth ?");
    } else{
      alert("too late :( , give it another go.");
      birthYear = prompt("Guess my year of birth ?");
    }
  }
  //0, empty strings, NaN, undefined and null are falsy values
  //ternary operator works same as in other languages
  //also
  let access = false;
  let ageNow = prompt('Enter your current age');

  access = (ageNow > 18) ? true : false;
  //can also be written as
  access = ageNow > 18;
  // makes code more easy to understand
  //ternary operator can also be stacked like multiple if-else-if
  //though not recommended

//****Logical operators****
  
  // ||, &&, !, ??
  //?? is new kind here called nullish coalesing
  
  // ** || **finds the first truthy value while converting all args
  // from **left to right**
  true || alert("not printed");
  false || alert("printed");
  //the above is a speciality of JS, can be exploited as follows:

  let firstName = "";
  let lastName = "";
  let nickName = "SuperCoder";

  alert( firstName || lastName || nickName || "Anonymous");

  // here if we wish to add userName field , we can use the first
  // non-empty string encountered or else Anonymous shows up

  alert(alert(1) || 2 || null)

  //here op will be 1 then 2
  //because alert return undefined which is falsy


  // **  && ** just like or this tries to find first falsy value
  // from left to right
  alert( 1 && 2 && null && 3 ); // null
  alert( 1 && 2 && 3 ); // 3, the last one



  // && has higher precedence than ||

  // somepeople like to replace if with && like as :
  let x = 1;
  if(x > 0){
    alert("hi!");
  }

  (x > 0) && alert("hi"); //not reccomended though

  // ** ! ** has highest precedence
  //works by conv the value of arg to boolean and then return 
  //its inverse;

  //sometimes ** !! ** is used to convert to boolean
  // ie:
  alert (Boolean(x) == !!x)


  //Nullish Coalescing (Mar 3 2021)
  //treats null and undefined similarly.
  //returns the first encountered defined(non null and non undefined)
  result = a ?? b;
  //can also be written as
  result = (a != null && a != undefined) ? a : b;


  alert(firstName ?? lastName ?? nickName ?? "Anonymous");//as used in ||

  // so what's the diff?
  // || recognizes 0, '', false as falsy values and returns them first
  // ?? doesn't do that.
  //advantages:
  let height = 0;
  alert(height || 100); // return 100
  alert(height ?? 100); // returns 0
  //here if use || , then if the height entered is 0 
  // or makes it 100 , hence use ??
  // || has higher precedence than ??, refer: 
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
  

  // The operator ?? has a very low precedence, only a bit higher than ? and =, 
  // so consider adding parentheses when using it in an expression.

  // It’s forbidden to use it with || or && without explicit parentheses.


//**loops **
  
  //loops are syntactically similar to cpp
  //break and continue also work similar to proog conrol in cpp
  //continue is used to decrease the levels of nesting caused by an if
  //break or continue can't be used in ternary operator
  
  //labels(in genral, here used in loops)
  //break can be used to manipulate program flow in general buy continue is only used in loops
  //functions can be labelled as well(but not generator functions, ie. func* ())
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
  loop1:
  for(let i = 0; i < 5; i++){
    loop2:
      for(let j = 0; j < 5; j++){
          console.log(i,j);
      if(j == 3)
        break loop2;
      if(i == 4)
        break loop1;
    }
  }


  //code produces op:
  // 0 0 
  // 0 1  
  // 0 2 
  // 0 3  
  // 1 0  
  // 1 1  
  // 1 2  
  // 1 3  
  // 2 0  
  // 2 1  
  // 2 2  
  // 2 3  
  // 3 0  
  // 3 1  
  // 3 2  
  // 3 3  
  // 4 0

  

// **switches**

  // same as cpp but case can include anything

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