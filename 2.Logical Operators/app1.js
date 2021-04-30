"use strict"


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
