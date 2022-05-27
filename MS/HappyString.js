const a=4;
const b=2;
const c=2;
function longestHappyString(a,b,c)
{
    let happyString="";
    const total=a+b+c;
    console.log(total);
    let currA=0;
    let currB=0;
    let currC=0;
    for(let i=0;i<=total;i++){
        console.log("inside A="+a);
        if((a>=b && a>=c &&currA!=2)|| (a>0 &&(currB==2 || currC==2)))
        {
            if(a>0 && currA!=2){
            happyString= happyString.concat('a');
            console.log(happyString);
            
            currA = currA+1;
            console.log(currA);
            a--;
            }
            currB==0;
            currC==0;
        }
        else if((b>=a && b>=c && currB!=2)|| (b>0 &&(currA==2 || currC==2)))
        {
            console.log("indise B")
            happyString= happyString.concat('b');
            currB==currB+1;
            currA==0;
            currC==0;
            b--;

        }
        else((c>=a && c>=b && currC!=2)|| (c>0 &&(currB==2 || currA==2)))
        {
            console.log("inside c");
            happyString=happyString.concat('c');
            currC==currC+1;
            currB==0;
            currA==0;
            c--;

        }
    }
    return happyString;
}

console.log(longestHappyString(a,b,c));

