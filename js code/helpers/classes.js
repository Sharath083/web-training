class Class{
    constructor(fname,age,lname){
        this.fname = fname;
        this.age=age;
        this.lname=lname;
    }
    static fun(){
        return "static fun"

    }
    name() {
        return "normal fun"
    }
}

let obj1 = new Class("John",25);
let obj2=new Class("s",1,"ss");
console.log(Object.values(obj1)+" "+Object.values(obj2)+ obj1.lname)
export default Class;

