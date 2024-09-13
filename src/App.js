
import React, { useState } from 'react'

export default function App() {

    const [gridArray, setGridArray] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState('');
    const [isX,setIsX] = useState(true);

    const handleOnClick = (index)=>{
        let tempArr = [...gridArray];
        if(tempArr[index] || winner)
            return;
        tempArr[index] = isX ? 'X' :'O';
        setGridArray(tempArr);
        setIsX(prev =>!prev);
        let winnerName =claculateTheWinner(tempArr);
        setWinner(winnerName);
    }
  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <h1>Winner is : {winner}</h1>
        <div style={{width:'300px', height:'300px'}}>
            <div style={{ height:'100%', width:'100%', display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'4px'}}>
            { gridArray.map((val, index)=><button style={{backgroundColor:'lightblue', color:'white', fontWeight:'bold',fontSize:'1rem'}} key={index} onClick={()=>handleOnClick(index)}>{val}</button>)}
            </div>
        </div>
           
       
    </div>
  )
}



function claculateTheWinner(tempArr){

        let winnerArr = [[0,1,2],
                        [3,4,5],
                        [6,7,8],
                        [0,4,8],
                        [2,4,6],
                        [0,3,6],
                        [1,4,7],
                        [2,5,8]];
        
        for(let i = 0; i < winnerArr.length ; i++){
            const [a,b,c] = winnerArr [i];
            if(tempArr[a] === tempArr[b] && tempArr[a] === tempArr[c])
                return tempArr[a];
        }
        if(tempArr.filter(Boolean).length === tempArr.length)
            return `It's a Draw`
}