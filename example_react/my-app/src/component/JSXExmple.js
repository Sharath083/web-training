import React from "react";

export const Hello=(props)=>{
    // return(
    //     <div>
    //         <h1 id="Hi" className="Hi">Hello, World!</h1>
    //     </div>
    // )

    //props are immutable
    // props.name='Goku' gives error

    return React.createElement(
        'div',
        null,
        React.createElement('h1',{id:"Hi",className:"Hi"},'Hello '+props.name +' '+props.type ),
        props.children
    )
}