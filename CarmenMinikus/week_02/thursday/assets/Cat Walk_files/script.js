var blackCat = document.getElementsByTagName("img")[0];

var makeCatBigger = function(){
  blackCat.setAttribute("width", blackCat.width + 1);
};

window.setInterval(makeCatBigger, 100);

var catWalk = function () {
  var originalPosition = parseInt(blackCat.style.left);
  var newPosition = originalPosition + 2
  blackCat.style.left = newPosition + "px" ;
};

window.setInterval(catWalk, 60);


console.log("cat");
