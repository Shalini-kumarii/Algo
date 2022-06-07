/*  Input: s = "the sky is blue"
Output: "blue is sky the" */

const words='the sky is blue';
function reverseWord(s)
{
    let i=0;
    let j=0;
    let n=s.length;
    console.log("length="+n);
    let result=" ";
     while(i<n){
         console.log("first while");
         console.log(s[i]);
        while(i<n && s[i]==" ")
        {
            console.log("inside i");
            i++;
            
            if(i>=n)
            {
                break;
            }
        }

            j=i+1;
            console.log(j);
            while(j<n && s[j]!=" ")
            {
                j++;
                console.log("inside j");
            }
                let substrings = s.substring(i,j);
                console.log("substrings="+substrings);
                if(result.length==0)
                {
                    result = substrings;
                }
                else{
                    result=substrings+" "+result;
                    console.log("result="+result);
                }
                i=j+1;
    }
    return result;
}

console.log(reverseWord(words));