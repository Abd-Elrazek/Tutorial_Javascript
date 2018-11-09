function roughScale(base) {
	var parsed = parseInt(base);
	console.log(parsed);
	if (isNaN(parsed)) {
		return 0
	}
	return parsed * 100;
}

console.log(roughScale(16));
// expected output: 1500

console.log(roughScale('88'));
// expected output: 0
