let arr = [1, 2, 3, 4, 5];

let output = [1 * 2, 2 * 3, 4 * 3, 5 * 4];

let test = arr.reduce((acc, curr, i) => {
	console.log(i, arr.length);
	if (i > 0) {
		let data = arr[i] * arr[i - 1];
		acc.push(data);
	}
	return acc;
}, []);

console.log(test);
 