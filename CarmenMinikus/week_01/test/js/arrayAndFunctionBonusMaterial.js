// //1
//
// var maxOfTwoNumber = function (x,y){
//   if (x > y ) {
//     console.log(x + " is greater than " + y);
//   }
//   else {
//     console.log(y + " is greater than " + x);
//   }
// }
// maxOfTwoNumber(46,5);
//
// //2
//
// var maxOfThree = function (x,y,z){
//   if (x > y && x > z) {
//     console.log(x + " is greater than " + y + " and " + z);
//   }
//   else if (y>z && y>x){
//     console.log(y + " is greater than " + x + " and " + z);
//   }
//   else {
//     console.log(z +" is greater than " + x + " and " + y)
//   }
// }
// maxOfThree(2,5,4);
//
// //3
// var ifVowel = function (x){
//   x = x.toLowerCase();
//   if(x === "a"|| x === "e" || x === "i" || x === "o" || x === "u"){
//     console.log(true);
//   }
//   else {
//     console.log(false);
//   }
// }
// ifVowel("e");
// ifVowel("g");

//4

// var numArray =[3,4,5,6]
//   sum =0;
//   for (var i = 0; i < numArray.length; sum += numArray[i++]);
//   console.log(sum);
//


// second way to write this



// var x = [3,4,5,6]
//   var sumArray = function (x) {
//     var total = 0;
//     for (var i =0;  i < x.length; i++) {
//       total += x[i];
//     }
//     return total;
//   }
//   console.log(sumArray(x));


  // var  myArray= [1,2,3,4]
  //
  // var multiplyArray = function(array){
  //   var total = 1;
  //   for (i = 0; i < array.length; i++){
  //     total = total * array[i];
  //   }
  //   return total;
  // }
  // console.log(multiplyArray(myArray));


//Bonus: #1 Reverse a word

// var reverseString = function (sentence) {
//   return sentence.split("").reverse().join("");
// };
//
// console.log(reverseString("Hello"));
//
// //2
//
var colors = ["red", "yellow", "white", "pink", "grey", "black", "blue", "green"];

// var findLongestWord = function (arrayOfWords){
// var longestWord;
// var length = 0;
//   for(var i=0; i<arrayOfWords.length; i++){
//     if(arrayOfWords[i].length > length){
//     var length = arrayOfWords[i].length;
//     longestWord = arrayOfWords[i];
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord(colors));

//i = nth number of word
//the # nth word--> 0th, 1st, 2nd word increases one by one
//if the nth word's length is greater than 0, then "var length" takes value of the length of nth word
//this repeats "if" the next word  (nth word) is greater in length than stored "var length".

var filterLongWords = function (arrayWords, number) {
  var wordsLongerThanNumber = [];
  for ( i=0 ; i<arrayWords.length ; i++){
    if (arrayWords[i].length > number ){
      wordsLongerThanNumber.push(arrayWords[i]);
    } //end if
  } //end for
console.log(wordsLongerThanNumber);
};

filterLongWords(colors, 4);
