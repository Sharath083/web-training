import React from 'react';


const Greet=(props)=>{

    //props are immutable
    // props.name='Goku' gives error
    return(
        <div>
            <h1>Hello {props.name} {props.type}</h1>
            {props.children}
        </div>
    )
}
export default Greet;