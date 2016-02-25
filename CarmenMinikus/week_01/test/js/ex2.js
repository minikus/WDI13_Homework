
for (var i = 0;i<20;i++){
  if (i%2 === 0){
    console.log(i + " is even");
  }
  else {
    console.log(i);
  };
}

console.log("hello");

//Multiplication Tab

for (var i = 0; i < 10; i++){
  console.log (i + "*" + 9 + " = " + (i*9));
};

//Grade Assignor
for (var g=i; g<100; g++){
  if (g<90){
    console.log("For "+ g + " you got a B");
  }
  else {
    console.log("For "+ g + " you got a A");
  }
};

//Bonus: Use a nested for loop to show the tables for every multiplier
//from 1 to 10 (100 results total).

for (var i = 0; i <=10; i++){
    for (var j = 0; j <=10; j++){
      console.log(i + "*" +j+"="+(i*j));
    }
}
