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

/*
Validate Subsequence 
	Given two non-empty arrays of integers, write a function that determines
	whether the second array is a subsequence of the first one.

	A subsequence of an array is a ser of numbers tat aren't necessarily adjacent
	in the array but that are in the same order as they appear in the array. For 
	instance the numbers [1,3,4] form a subsequence of array [1,2,3,4], and so do 
	the numbers [2,4]. Note that a single number in an array itself are both valid 
	subsequences of the array.
 */

 const isValidSubsequence = (array, sequence) => {
	let tracker = 0

 	for (let i = 0; i < array.length; i++) {
	 	// console.log(array[i])
	 	if (sequence[tracker] === array[i]) {
		 	tracker++
		 	console.log('tracker:', tracker)
		 	// array[i] = array[i + 1]
		} 
	 	if (sequence.length  === tracker) {
			console.log('tracker2:', tracker)
			return true
		}

 	}
	return false
}
console.log(isValidSubsequence([1, 1, 6, 1],[1, 1, 1, 6]))
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[5, 1, 22, 25, 6, -1, 8, 10]))
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 6, -1, 8, 10]))
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [22, 25, 6]))
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, 10]))
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 10]))
console.log(isValidSubsequence([1, 1, 1, 1, 1],[1, 1, 1]))