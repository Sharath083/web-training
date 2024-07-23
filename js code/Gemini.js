import { GoogleGenerativeAI } from "@google/generative-ai";
const genAi=new GoogleGenerativeAI('AIzaSyBOVl17ZeB-CNupZAo1snRACyHqDDb6LC0')
const model=genAi.getGenerativeModel({
    model:'gemini-1.5-pro'
});

 const prompt= await model.generateContent('Who is sachin tendilkar')

 console.log(prompt.response.text()
 )
