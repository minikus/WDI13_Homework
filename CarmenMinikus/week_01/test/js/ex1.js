var greaterNum = function (x,y){
  if (x>y){
    console.log("The greater number of " + x + " and " + y + " is " + x);
    return x;
  }
  else{
    console.log("The greater number of " + x + " and " + y + " is " + y);
    return y;
  }
}
greaterNum(10,5);



//The World Translator

var helloWorld = function (langCode){
  if (langCode === "de") {
    return "Guten Morgen Welt";
    }
  else if (langCode === "es") {
    return "Hola";
  }
  else {
    return "Hello World";
  }
}

console.log(helloWorld("de"));



//Grade Assignor

var assignGrade = function (x){
   if (x<=50){
     return "F";
   }
   else if (x>=50 && x<70){
     return "D";
   }
   else if (x>=70 && x<80){
     return "C";
   }
   else if (x>=80 && x<90){
     return "B";
   }
   else {
     return "A";
   }
}
  console.log(assignGrade(80));


  //Pluralizer

  var pluralize = function (noun, num){
   if (num > 1){
     return num + " " + noun + "s";
  }
  else {
    return num + " " + noun;
  }
   }

  console.log(pluralize("chicken", 20));
  console.log(pluralize("kitten", 1));
