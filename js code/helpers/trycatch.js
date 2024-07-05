import Class from "../helpers/classes.js"
class CommonException {
    constructor(infoID, infoMsg) {
        this.infoID = infoID;
        this.infoMsg = infoMsg;
    }
}
function trycatch(age){
    try {
        if(age <18)
            throw new CommonException(1,"Age should be greater than or equal to 18");
        else if(isNaN(age)){
            throw "Invalid Type"
        }
        
    } catch (ex) {
        console.log(ex) 
    }
}

trycatch(12)
trycatch(undefined)
var x=3
console.log(x+" "+y)
var y=4

var ssd=""
console.log(!ssd+",fkmkmmk")
console.log(Class.fun())
let ob=new Class("1",2)
console.log(Object.values(ob))
