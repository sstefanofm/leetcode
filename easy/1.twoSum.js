/*
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  You can return the answer in any order.

  Example 1:
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

  Example 2:
  Input: nums = [3,2,4], target = 6
  Output: [1,2]
*/

const t1 = {
  nums: [1, 9, 2, 7],
  target: 9,
}

const t2 = {
  nums: [5, 0, 1],
  target: 6,
}

/* HashMap */
const hm_twoSum = (nums = [], target = 0) => {
  const indexMap = new Map()

  for (let i = 0; i < nums.length; ++i) {
    const remainder = target - nums[i]

    if (indexMap.has(remainder))
      return [indexMap.get(remainder), i]

    indexMap.set(nums[i], i)
  }

  return []
}

/* Brute Force */
const bf_twoSum = (nums = [], target = 0) => {
  for (let i = 0; i < nums.length - 1; ++i)
    for (let j = 1; j < nums.length; ++j)
      if (target === nums[i] + nums[j])
        return [i, j]

  return []
}

console.log('HashMap solution:')
console.log(hm_twoSum(t1.nums, t1.target))
console.log(hm_twoSum(t2.nums, t2.target))
console.log('Brute Force solution:')
console.log(bf_twoSum(t1.nums, t1.target))
console.log(bf_twoSum(t2.nums, t2.target))

