var twoSum = function(nums, target) {
    // Can have a cache of seen numbers with their index. Do the remainder hack.
    cache = {}
    for (i in nums) {
        let remainder
        if (target > nums[i]) {
            remainder = target - nums[i]
        } else {
            remainder = nums[i] - target
        }


        console.log(`remainder is ${remainder}`);
        if (!cache[remainder]) {
            cache[nums[i]] = i
            console.log(cache)
        } else if (cache[remainder]) {
            return [cache[remainder], ]
        }
    }
};

console.log(twoSum([2,7,11,15]
    ,9))