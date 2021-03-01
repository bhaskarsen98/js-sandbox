"use strict"





//conditional branching (Mar 1 2021)

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

//Logical operators
  
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