module.exports = function check(str, bracketsConfig) {

    let stack = [];
    let brace;

    for(let i = 0; i < str.length; i++){

        if(stack.length != 0){

            brace = find_second_brace(bracketsConfig, str.charAt(i));

            if(stack[stack.length-1] == brace){
                stack.pop();
                continue;
            }
            else{
                return false;
            }
       }

        brace = find_first_brace(bracketsConfig, str.charAt(i));

       if(brace == -1){         
          return false;
       }

        stack.push(str.charAt(i));
    }

    return stack.length == 0;
}


/*Function searching the opening brace in bracketsConfig*/
function find_first_brace(array, char){

  for(let i = 0; i < array.length; i++){
    if(array[i][0] == char){
        return array[i][0];
    }
  }

  return -1;
}


/*Function searching the closing brace in bracketsConfig*/
function find_second_brace(array, char){

    for(let i = 0; i < array.length; i++){
      if(array[i][1] == char){
          return array[i][0];
      }
  }

  return -1;
}