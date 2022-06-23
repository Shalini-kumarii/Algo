const words = 'the sky is blue';
function reverseWord(s) {
    let i = 0;
    let j = 0;
    let n = s.length;
    console.log("length=" + n);
    let result = " ";
    let words=[];
    let temp=[];

    while (i < n) {
        console.log("first while");
        console.log(s[i]);
        while (i < n && s[i] == " ") {
            console.log("inside i");
            i++;

            if (i >= n) {
                break;
            }
        }

        j = i;
        console.log(j);
        while (j < n && s[j] != " ") {
            j++;
            console.log("inside j"+s[j]);
        }
       let rev= reverse(s,i,j-1);
       
       
        if (result.length == 0) {
            result = rev;
        }
        else {
            result = rev + " " + result;
            console.log("result=" + result);
        }
        i = j + 1;
    }

    function reverse(s,start,end)
{
    console.log("reverse="+s,start,end);
    while(start<=end)
    {
         temp=s[start];
         console.log("s[start]="+s[start]);
        s[start]=s[end];
        s[end]=temp;
        console.log("s[end]="+s[end]);
        let revw=
        start++;
        
       
    }
    console.log("temp="+temp);
}
    return result;
}


console.log(reverseWord(words));