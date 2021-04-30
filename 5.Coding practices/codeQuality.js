//general coding (good!)practices involve : 
  // 1. indent blocks with 2/4 spaces(tabs don't help when we change the construct of the code)
  // 2. space between parameters after a comma
  // 3. space around nested calls
  // 4. spaces around operators
  // 5. make semicolon mandatory
  // 6. empty lines between logic blocks
  // 7. it's bet to create a logical block for every part of code (even for one liners )
  // 8. lines must be short in character length(else wrap accross multiple lines)
  // 9. no space between parenthesis and parameters or func name
  // 10. opening brace shall be present in the line where block begins(after a space if its a function or loop)
        // and close after a line break where the block ends
  // 11. no rule is a hard rule and rules shall be agreed upon among team members

  function divideName(fullName) {
    let name = fullName.split(' ');
    let firstName = name[0];
    let middleName = '';
    let lastName = '';



    if(name.length > 1) {
      lastName = name[name.length - 1];
      middleName = String( name.slice(1, name.length-1) );
    }

    let message = `
      your name is = ${firstName}\n
      your middleName = ${middleName}\n
      and your lastname is = ${lastName}
    `;
    
    console.log(message);
  }

  divideName('Chandler Muriel Bing');
  