'use strict';

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var largest = 0;
    var secondLargest = 0;
    for (var i = 0; i < nums.length; i++){
        if (nums[i] > largest) {
            secondLargest = largest
            largest = nums[i];
        }
        if (nums[i] > secondLargest && nums[i] < largest) {
            secondLargest = nums[i];
        }
    }
    return secondLargest;
}
