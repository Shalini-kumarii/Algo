const n=4;
const roads=[[0,1],[0,3],[1,2],[1,3]]

function maxRoad(n,roads)
{
    let rank=0;
   
    for(let i=0;i<n;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            let count=0;
            for(let road of roads)
            {
                if(road[0]==i||road[0]==j || road[1]==i||road[1]==j) 
            {
                count++;
            }           
           
        }
        rank=Math.max(rank,count);
        }
       
    }
    return rank;
}

console.log(maxRoad(n,roads));