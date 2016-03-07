var blackCat = document.getElementsByTagName("img")[0];
var pikachu = document.getElementsByTagName("img")[2];
var neonCat = document.getElementsByTagName("img")[3];

var makeCatBigger = function(){
  blackCat.setAttribute("width", blackCat.width - 1);
};
window.setInterval(makeCatBigger, 100);


var makeNeonCatSmaller = function(){
  neonCat.setAttribute("width", neonCat.width - 5);
};
window.setInterval(makeNeonCatSmaller, 100);


var windowWidth =window.innerWidth;

var catWalk = function () {
  var originalPosition = parseInt(blackCat.style.left);
  var newPosition = originalPosition + 2
  blackCat.style.left = newPosition + "px" ;
};
window.setInterval(catWalk, 60);

var pikachuWalk = function () {
  var originalPosition = parseInt(pikachu.style.right);
  var newPosition = originalPosition + 6
  pikachu.style.right = newPosition + "px" ;
  if (newPosition > 600){
    pikachu.style.right = originalPosition + 1 + "px";
  }
};
window.setInterval(pikachuWalk, 30);




var looper;
var degrees = 0;
function rotateAnimation(el,speed){
	var elem = document.getElementById(el);
	if(navigator.userAgent.match("Chrome")){
		elem.style.WebkitTransform = "rotate("+degrees+"deg)";
	// } else if(navigator.userAgent.match("Firefox")){
	// 	elem.style.MozTransform = "rotate("+degrees+"deg)";
	// } else if(navigator.userAgent.match("MSIE")){
	// 	elem.style.msTransform = "rotate("+degrees+"deg)";
	// } else if(navigator.userAgent.match("Opera")){
	// 	elem.style.OTransform = "rotate("+degrees+"deg)";
	// } else {
		elem.style.transform = "rotate("+degrees+"deg)";
	}
	looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}
	document.getElementById("status").innerHTML = "rotate("+degrees+"deg)";
}

rotateAnimation("spacelama",10);
