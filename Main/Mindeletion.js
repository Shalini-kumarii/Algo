/*A string s is called good if there are no two different characters in s that have the same frequency.

Input: s = "aaabbbcc"
Output: 2
Explanation: You can delete two 'b's resulting in the good string "aaabcc".
Another way it to delete one 'b' and one 'c' resulting in the good string "aaabbc".*/

const s="aaabbbcc";
function minCharDelFreq(str)
{
    let N=str.length;
    console.log(N);
    //Stroe freq of each distinct char of str
    let mp = new Map();
    
    // Store freq of each distinct char so that largestfreq store at the top
    let pq=[];

    //store min count of charto be deleted
    let countchar=0;

    //travese the string

    for(let i=0;i<N;i++)
    {
        //Update freq of str[i]
        if(mp.has(str[i])){
            mp.set(str[i],mp.get(str[i])+1) //getting key and values
        }
        else{
            mp.set(str[i],1);
        }
    }
        //Travers the map
        for(let[key,value] of mp.entries())
        {
            //insert current freq into pq array
            pq.push(value);
        }
        //sort the array
        pq.sort(function(a,b){return b-a;})

        console.log("pq="+pq);

        //traverse the priority queue
        while(pq.length !=0)
        {
            //store topmost element of pq
            let freq=pq[0];

            //pop the topmost element
            pq.shift();
            
            //if pq is empty
            if(pq.length==0)
            {
                return countchar;
            }
            //if freq and topmost element of pq ar equal

            if(freq ==pq[0])
            {
                console.log("freq="+freq);
                if(freq >1)
                {
                    //insert the decreamented value of freq

                    pq.push(freq-1);
                    //console.log("freq after decrement="+freq);
                    pq.sort(function(a,b){return b-a;})
                    console.log("pq after decrement="+pq)
                
                    //update countchar
                    countchar++;
                    console.log("count="+countchar);
                }
            }
           
    }
    return countchar;
}

console.log(minCharDelFreq(s));