/*
Implement a method to perform basic string compression using the counts of repeated characters. 
"aabcccccaaa" would be 'a2b1c5a3'
If compressed is longer than original, return original.
*/

const string1 = "aabcccccaaa";
const string2 = "aabccdddddddde";

const stringCompress = (string) => {
	const length = string.length;
	const separate = string.split("");
	let result = [];
	let count = 0;
	for (i in separate) {
		if (i == 0) {
			count++;
		} else if (i == length - 1) {
			if (separate[i] === separate[i - 1]) {
				count++;
				result.push(separate[i - 1] + count);
			} else {
				result.push(separate[i - 1] + count);
				result.push(separate[i] + 1);
			}
		} else if (separate[i] === separate[i - 1]) {
			count++;
		} else if (separate[i] !== separate[i - 1]) {
			result.push(separate[i - 1] + count);
			count = 1;
		}
	}

	result = result.join("");

	if (result.length < length) {
		return result;
	} else {
		return string;
	}
};

console.log(stringCompress(string1));
console.log(stringCompress(string2));

const strComp = function (string) {
	let compressed = "";
	let currChar = "";
	// Records the previous character
	let currCount = "";
	// Records the count of the previous character
	for (let i = 0; i < string.length; i++) {
		if (currChar !== string[i]) {
			// Will always run if the character before doesn't match the character you're on. New letter.
			console.log(currChar, string[i], i);
			compressed = compressed + currChar + currCount;
			// Compressed is the resulting string. We are pushing it to the end.
			currChar = string[i];
			// You reassign the previous letter to the current at the very end.
			currCount = 1;
		} else {
			currCount++;
		}
	}
	compressed = compressed + currChar + currCount;

	return string.length < compressed.length ? string : compressed;
};

console.log(strComp("aabcdefg"));
