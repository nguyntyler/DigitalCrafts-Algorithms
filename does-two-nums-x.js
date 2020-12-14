// 2. From an unsorted array, check whether there are any two numbers that
// will sum up to any given number (example: ([1,5,7,8,4,3,9] ,6) returns
// true & ([1,5,7,8,4,3,9] , 3) returns false)

const checker = (arr, checkingNum) => {
	let remainder;
	let counter = 1;
	let endCount = arr.length;

	while (counter < endCount) {
		lastIndex = arr.length - 1;
		if (checkingNum > arr[lastIndex]) {
			remainder = checkingNum - arr[lastIndex];
		} else {
			remainder = null;
		}
		arr.pop();

		if (arr.includes(remainder)) {
			return true;
		}
		counter++;
	}
	return false;
};

console.log(checker([1, 5, 7, 8, 4, 3, 9], 3)); // false
console.log(checker([1, 5, 7, 8, 4, 3, 9], 6)); // true
console.log(checker([1, 2, 4, 5, 6], 6)); // true
console.log(checker([1, 2, 3, 6, 7, 3], 6)); // true

// try using set
