const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function selectionSort(array) {
// 	for (let j = 0; j < array.length; j++) {
// 		let smallestIndex = 0;
// 		let index = j;
// 		for (i in array) {
// 			if (array[i] < array[smallestIndex]) {
// 				smallestIndex = i;
// 			}
// 		}
// 		let temp = array[index];
// 		array[index] = array[smallestIndex];
// 		array[smallestIndex] = temp;
// 		console.log("index", index, "is now", array[smallestIndex]);
// 		console.log(index);
// 		smallestIndex = index;
// 	}
// }

function selectionSort(array) {
	const length = array.length;
	for (let i = 0; i < length; i++) {
		// This goes through each item in the array. The min is assigned to what item it's currently on
		let min = i;
		let temp = array[i];
		for (let j = i + 1; j < length; j++) {
			// j loop will find the smallest index starting from the element above the i element. You don't need to look through it all since the indexs before are already sorted.
			if (array[j] < array[min]) {
				// if a smaller number is found up ahead, it will assign the new min index to min.
				min = j;
			}
		}
		// i loop will figure out where to replace the min element and swap them.
		array[i] = array[min];
		array[min] = temp;
	}
	return array;
}

selectionSort(numbers);
console.log(numbers);
