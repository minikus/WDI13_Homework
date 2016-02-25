//HW The Word Guesser
console.log("Guess a 3-letter word. Try typing a letter in this function: guess('_') ");
var foxArray = ["F","O","X"];
var guessedArray = ["_", "_", "_"];

var guess= function (x){
    x = x.toUpperCase();
          if ( x === "F"){
            guessedArray[0] = "F";
            console.log("Thats correct! F is the first letter");
          } else if( x === "O"){
            guessedArray[1] = "O";
            console.log("great! you got O!");
          } else if (x === "X"){
            guessedArray[2] = "X";
            console.log("Yay! you got X!");
          }  else {
            console.log("sorry wrong letter")
            }
console.log(guessedArray);
}//end function
// console.log(guess("f"));
// for( i=0 ; i<foxArray.length ; i++ ){




var reward = 0;
