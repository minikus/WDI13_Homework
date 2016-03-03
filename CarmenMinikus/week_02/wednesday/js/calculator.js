var sqInput = document.getElementById("square-input");
var sqButton = document.getElementById("square-button");
var halfInput = document.getElementById("half-input")
var halfButton = document.getElementById("half-button");

var fractionInput = document.getElementById("percent1-input");
var wholeNumberInput = document.getElementById("percent2-input");
var percentButton = document.getElementById("percent-button");

var radiusInput = document.getElementById("area-input");
var areaButton = document.getElementById("area-button");


var square = function (){
  alert(Math.pow(sqInput.value, 2));
}
sqButton.addEventListener('click',square);

var half = function(){
  alert(halfInput.value/2);
}
halfButton.addEventListener('click',half);

var fraction = function (){
  alert (wholeNumberInput.value/fractionInput.value);
}
percentButton.addEventListener("click", fraction);

var circleArea = function (){
  alert(Math.PI * (Math.pow(radiusInput.value, 2)));
}
areaButton.addEventListener("click", circleArea);
