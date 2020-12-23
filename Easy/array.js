/*
Write a function that takes in a non-empty array of distinct integers
representing a target sum. If any two numbers in in the input array sum
up to the target sum, the function should return them in an array, in order.
If no two numbers sum up to the target sum, the function should return an 
empty array.

Note that the target sum has to be obtained by summing two different integers in the array;
you can't add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of the numbers summing up the target sum.
*/

const twoNumberSum = (array, targetSum) => {
	let emptyArr = []
	let obj = {}
	for (let i = 0; i < array.length; i++) {
		let diff = targetSum - array[i]
		if(obj[diff]) {
			return [diff, array[i]]
		} else {
			obj[array[i]] = true
		}
	}
		return emptyArr
}
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
console.log(twoNumberSum([4, 6], 10))
console.log(twoNumberSum([4, 6, 1], 5))
console.log(twoNumberSum([4, 6, 1, -3], 3))
console.log(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17))
console.log(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18))
//==================================================================

