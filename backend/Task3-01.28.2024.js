function search(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
           
            return i
        }
    }
    return nums.length
      
}

const nums1 = [1, 3, 5, 6]
const target1 = 5
console.log(search(nums1, target1))

const nums2 = [1, 3, 5, 6]
const target2 = 2
console.log(search(nums2, target2))

const nums3 = [1, 3, 5, 6]
const target3 = 7
console.log(search(nums3, target3))
