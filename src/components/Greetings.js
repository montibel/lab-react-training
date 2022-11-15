import React from "react"; 

function Greetings ({lang, children}) {
    const hello = {
        de: 'Hallo',
        fr: 'Bonjour',
        }
    return(
 
    <div>{hello[lang]} {children}</div>
        
   
  ); 
}

export default Greetings;