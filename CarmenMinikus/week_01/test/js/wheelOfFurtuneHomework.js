//Bonus: Wheel of Fortune


console.log("Guess a 3-letter word. Try typing a letter in this function: guess('_') ");
var reward = 0;
var foxArray = ["F","O","X"];
var guessedArray = ["_", "_", "_"];

var guess= function (x){
    x = x.toUpperCase();
    // for( i=0 ; i<foxArray.length ; i++ ){
          if ( x === "F"){
            guessedArray[0] = "F";
            reward += (Math.random()*10).toFixed();
            console.log("Thats correct! F is the first letter, and you got " + reward + " points now");
          } else if( x === "O"){
            guessedArray[1] = "O";
            reward += (Math.random()*10).toFixed();
            console.log("great! you got O! and " + reward + " points now");
          } else if (x === "X"){
            guessedArray[2] = "X";
            reward += (Math.random()*10).toFixed();
            console.log("Yay! you got X! and " + reward + " points now");
          }  else {
            reward = reward -(Math.random()*10).toFixed();
            console.log("sorry wrong letter, you have " + reward + " points now");
            }
      // } // end for loop
console.log(guessedArray);
// console.log(reward);
}//end function

// // console.log(guess("f"));
