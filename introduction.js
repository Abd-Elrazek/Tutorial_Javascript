var i = 0;
var n = 0;
while (i < 5) {
  console.log('i before if condition is : ' + i);
  if (i == 3) {
	  console.log("i before continue : " + i);
	  console.log("i after continue : " + i);
  }
  n += i;
  console.log(n);
  i++;
}
//1,3,7,12