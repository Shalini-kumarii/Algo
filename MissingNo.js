//Input: arr[] = {1, 2, 4, 6, 3, 7, 8}
//Output: 5
// sum (n*(n+1)/2
const arr1 = [1, 2, 4, 6, 3, 7, 8];

//Pseudo code
// find sum of all consecutive number
// calculate sum of given array
// then substract (its a missing number)

function missingNo(arr){

    let sum = 0;
    let missNo=0;
    let n =arr.length+1;
    let total = (n*(n+1))/2;
    for(var i =0; i<arr.length; i++){
        sum +=arr[i];

    }
   return (missNo = (total-sum));


}

console.log(missingNo(arr1));