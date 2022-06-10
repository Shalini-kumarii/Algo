/*You are given a string s consisting only of characters 'a' and 'b'​​​​.

You can delete any number of characters in s to make s balanced. s is balanced if there is no pair of indices (i,j) such that i < j and s[i] = 'b' and s[j]= 'a'.

Return the minimum number of deletions needed to make s balanced.

Input: s = "aababbab"
Output: 2
Explanation: You can either:
Delete the characters at 0-indexed positions 2 and 6 ("aababbab" -> "aaabbb"), or
Delete the characters at 0-indexed positions 3 and 6 ("aababbab" -> "aabbbb").
Example 2:

Input: s = "bbaaaaabb"
Output: 2
Explanation: The only solution is to delete the first two characters.*/


//const s="aababbab";
const s="bbaaaaabb";

function mindel(str)
{
    let N=str.length;
    if(str==null || N==0)
    {
        return 0;
    }

    let counta=0;
    let countb=0;

    for(let i=0;i<N;i++)
    {
        if(str[i]=='a')
        {
            counta+=1;
        }
        else{
            counta +=0;
        }
    }

    let res = counta;

    for(let j=0;j<N;j++)
    {
        countb+=str[j]=='b' ? 1:0;
        counta-=str[j]=='a' ? 1:0;

        console.log("counta="+counta);
        console.log("countb="+countb);
        

        res= Math.min(res,countb+counta);

    }
    return res;
}

console.log(mindel(s));