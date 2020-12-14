// 1. From an unsorted array of numbers 1 to 100 excluding one number, how
//you find the missing number?

nums = [1, 2, 6, 7, 3, 4, 8, 9, 10];

const missingNum = (arr) => {
	const start = Math.min(...arr);
	const end = Math.max(...arr);
	const allNums = [];
	let missingNum;
	const range = (start, end) => {
		for (let i = start; i <= end; i++) {
			allNums.push(i);
		}
	};
	range(start, end);
	for (num of allNums) {
		if (!arr.includes(num)) {
			missingNum = num;
		}
	}
	// return `min${start}  max${end}
	// all${allNums} missing number is ${missingNum}`
	return `the missing number is ${missingNum}`;
};
nums = [10, 7, 3, 8, 2, 1, 4, 5, 6];
nums2 = [10, 7, 3, 8, 2, 1, 9, 5, 6];
console.log(missingNum(nums));
console.log(missingNum(nums2));
