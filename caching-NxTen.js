const cache = {};

const memoTime10 = (n) => {
	if (n in cache) {
		console.log("Fetching from cache", n);
		return cache[n];
	} else {
		//store new value in cache
		cache[n] = n * 10;
		//message
		console.log("Calculating results", n);
		//return n*10
		return cache[n];
	}
};

console.log(memoTime10(3));
console.log(memoTime10(3));
console.log(memoTime10(3));
