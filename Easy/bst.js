/*
Find Closest Value In BST

Write a function that takes in a Binary Search Tree (BST) and a target 
integer value and returns the closest value to that target value contained 
in the BST. You can assume that there will only be one closest value.

Each BST node has an integer value, a left child node, and a right child node.
A node. A node is said to a valid BST node if and only if it satisfies the BST
property: its value is strictly greater than the values of every node to its left;
its value is less than or equal to the values of every node to its right; and its 
children nodes are either valid BST nodes themselves or None/null.
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

const findClosestValueInBst = (tree, target) => {
	return findClosestValueInBst2(tree, target, -Infinity)
}


const findClosestValueInBst2 = (tree, target, closest) => {
	let currNode = tree
	console.log('check', closest)
	console.log('check',currNode.value)
	while (currNode !== null) {
		if(Math.abs(closest-target) > Math.abs(currNode.value - target)){
			closest = currNode.value
				console.log('check', closest)
		}
		// console.log('check',currNode.value)
		if (currNode.value > target) {
		 currNode = currNode.left
			// console.log(currNode.value) 
		} else if (currNode.value < target) {
			 currNode = currNode.right
		} else {
			break;
		}
	}
	console.log('closest', closest)
	return closest
}


