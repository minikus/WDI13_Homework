//HW The Word Guesser
console.log("Guess a 3-letter word. Try typing a letter in this function: guess('_') ");

var doodleArray = ["D","O","O","D","L","E"];
var guessedArray = ["_", "_", "_","_", "_", "_" ];

var guess= function (x){
    var reward = 0;
    x = x.toUpperCase();
    for(i=0; i<doodleArray.length; i++){
      if( x === doodleArray[i] ){
        guessedArray.splice([i], 1,x);
        reward += (Math.random()*10).toFixed();
        console.log("Thats correct! " + x + " you have " + reward + " points now");
      } else{
        reward += (Math.random()*10).toFixed();
        console.log("wrong, guess again. You have " + reward + " points now");
      }
    }//end for

console.log(guessedArray);
}//end function
// console.log(guess("f"));
// for( i=0 ; i<foxArray.length ; i++ ){

//
//
//
// if (arrValues.indexOf('Sam') > -1) {return true;}
// else {return false;}
