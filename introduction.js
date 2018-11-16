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
	/*
	(function foo(i) {// i = 3
	  if (i < 0) // 3 < 0 = false
		return;
	  log(i);// i = 3
	  (function foo(i) {// i = 2
		if (i < 0) // 2 < 0 = false
		  return;
		log(i);// i = 2
		(function foo(i) {// i = 1
		  if (i < 0) // 1 < 0 = false
			return;
		  log(i);// i = 1
		  (function foo(i) {// i = 0
			if (i < 0) // 0 < 0 = false
			  return;
			log(i);// i = 0
			(function foo(i) {// i = -1
			  if (i < 0) // -1 < 0 = true
				return;
			  log(i);
			  foo(i - 1);
			  log(i);
			}(i - 1));
			log(i);// i = 0
		  }(i - 1));
		  log(i);// i = 1
		}(i - 1));
		log(i);// i = 2
	  }(i - 1));
	  log(i);// i = 3
	}(3));
	*/
var price = true;
if (price === true){
	var main =522;
	console.log(main);
}else{
	console.log('100');
}