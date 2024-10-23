// 137. Single Number II from Leet Code

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
     for(let i = 0 ; i < 32 ; i++) {
         let sum = 0;
         for(let j = 0 ; j < nums.length ; j++) {
             if(nums[j] & (1 << i)) {
                 sum++;
             }
         }
         if(sum % 3 == 1) {
             result = result | (1 << i);
         }
     }
     return result;
 };