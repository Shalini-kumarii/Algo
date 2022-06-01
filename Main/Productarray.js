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
