import React from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";


async function GoogleGem(props){
const genAi=new GoogleGenerativeAI('AIzaSyBOVl17ZeB-CNupZAo1snRACyHqDDb6LC0')
const model=genAi.getGenerativeModel({
    model:'gemini-1.5-pro'
});

 const prompt= await model.generateContent(props.ip)


 return <p>prompt.response.text()</p>
}

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