const nums1=[5,3,2,4,1];
const nums2=[9,2,3,4,6,7,9,1]

function bubblesort(num)
{
    for(var i=0; i<num.length;i++)
    {
        for(var j=0;j<num.length-i-1;j++)
        {
            if(num[j]> num[j+1])
            {
                let temp=num[j];
                num[j]=num[j+1];
                num[j+1]=temp;
            }
        }
    }
    return num;
}

console.log(bubblesort(nums1));
console.log(bubblesort(nums2));