"use strict"
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
