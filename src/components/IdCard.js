import React from "react"; 

function IdCard ({ firstName, lastName, gender, picture, height, birth}) {
    return(
    <div class="idcard">
        
        <img src= {picture} alt=""/> 
        <p> <b>First name:</b> {firstName} </p>
        <p> <b>Last name:</b> {lastName} </p>
        <p> <b>Gender:</b> {gender} </p>
        <p> <b>Height:</b> {height}</p>
        <p> <b>Birth:</b> {birth.toDateString()}</p>
        
   </div>
  ); 
}

export default IdCard;