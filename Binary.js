// Sorted array
// divide and conqures method
// middle item greater or smaller or equal
const nums1=[5,7,9,11,13];

function binarySearch(arr,num){
    let left =0;
    let right = arr.length-1;
        while(left <= right){
            let mid =Math.floor((right-left)/2);
            // ignore left half
            if(arr[mid] == num){
                return true;
            }
            if(arr[mid] < num){
                if(arr[left] == num){
                    return true;
                }
                left = mid+1;

            }
            else{
                if(arr[right] == num){
                    return true;
                }
               right= mid-1;
            }
        }


return false;

}

console.log(binarySearch(nums1,11));
console.log(binarySearch(nums1,4));
//console.log(binarySearch(nums1,9));