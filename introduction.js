// I try to pass function in java but not work  but in javascript is okey
/*
function f (b){
	return b + " -f";
}

function map(f, a) {
  var result = [],i; // Create a new Array
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}

var x = map(f,["name","address", "game"]);
console.log(x);
*/

function outside(x) {
  function inside(y) {
	  console.log(y);
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
                        // it
result = fn_inside(5); // returns 8
console.log(result);
result1 = outside(3)(5); // returns 8 , 3 for outside function and 5 for outwr function

