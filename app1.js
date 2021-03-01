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

