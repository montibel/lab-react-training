import React, { Children } from "react"; 

function Random ({min, max}) {
   const randomNumber = Math.floor(Math.random()* max);
    return(
 
    <div>Random value between {min} and {max} = {randomNumber}</div>
        
   
  ); 
}

export default Random;