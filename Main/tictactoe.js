const moves1=[[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]];
const moves2 = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
function tictactoe(moves)
{
    let n=3;
    let rows=[n];
    let cols=[n];
    let diag=0;
    let anti_diag=0;

    //two player having value player1 with value 1 and player2 value -1

    let player=1;
    for(let move of moves)
    {
        let row=move[0];
        let col=move[1];

        //Update the rows and column value

        rows[row]+=player;
        cols[col]+=player;

        if(row==col)
        {
            diag+=player;
        }
        if(row+col == n-1){
            anti_diag +=player;
        }

        if(Math.abs(rows[row])==n || Math.abs(cols[col])==n ||
            Math.abs(diag)==n || Math.abs(anti_diag == n))
            {
                if(player== 1)
                {
                    return "A";
                }
                else{
                    return "B";
                }
            }

            player *=-1;
    }

    if(moves.length == n*n)
    {
        return "Draw";
    }
    else{
        return "Pending";
    }
}

console.log(tictactoe(moves1));
console.log(tictactoe(moves2));