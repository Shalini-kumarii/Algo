/**There is a function signFunc(x) that returns:

1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.
You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product).

Example 1:

Input: nums = [-1,-2,-3,-4,3,2,1]
Output: 1
Explanation: The product of all values in the array is 144, and signFunc(144) = 1
*/

const arr1=[-1,-2,-3,-4,3,2,1];
const arr2=[1,5,0,2,-3];
function signFunc(arr)
{
    let product = arr[0];    // first 
    for(let i=1;i<arr.length;i++){
        if(arr[i]==0)
        {
            return 0;

        }
        product= product*arr[i];
        //console.log(product);
        
    }
    if(product >0)
        {
            return 1;
        }
        else{
            return -1;
        }
}

console.log(signFunc(arr1));
console.log(signFunc(arr2));
