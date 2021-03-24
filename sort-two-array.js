// You are given two arrays, each one is sorted, now merge the sorted arrays to make one sorted array. 
// ie. [0,3,4,31], [3,4,6,30]
// desired result [0,3,3,4,4,6,30,31]

const first = [0,3,4,31]
const second = [3,4,6,30]

const sortThem = (arr1, arr2) => {
    const sortedArr = []
    
    // Check for empty array
    if (!arr1) {
        return arr2
    } else if (!arr2) {
        return arr1
    }
    
    return sortedArr
}


console.log(sortThem(first, second))
