// var a,g;
// let d=5,f="3";
// console.log(a  +" "+ g +" "+d+" "+f);
// x=4;
// console.log(x);
// s();
// console.log(x);
// function s(){
//     x=x*x;
// }
// var e=3;
// var e="2"+3+4;//234
// console.log(e);
// var e=2+3+"4";
// console.log(e);//54

// // ca=3;
// // console.log(ca);
// // var ca;
// function ss(){
//     ca=3
//     console.log(ca);

// }
// ss();
// var ca;
// console.log(ca);

function oper() {
    let s=3;
    let ss="3";
    t=(s==ss);
    console.log(t);//true
    t=(s===ss);
    console.log(t);//false
    t=(s!=ss);
    console.log(t);//false
    t=(s!==ss);
    console.log(t);//true
    t=typeof(ss)
    console.log(t);
    return "return";
    
}
// console.log(oper())



function obj(name,age,marks){
    const student={};
    // student.name=name;
    // student.age=age;
    // student.marks=marks;

    const stud=new Object();
    // student.name=name;
    // student.age=age;
    // student.marks=marks;

    const stu={
        lname:name,
        mage:age,
        pmarks:marks,
        // info:name +" "+age+" "+marks
        info:function() {
            return this.lname + " " + this.pmarks;
        }
    };
    const person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {
          return this.firstName + " " + this.lastName;
        }
      };
    return person;
}
let stu=obj("a",1,3);
// document.getElementById("demo").innerHTML+= " "+stu.firstName;

// console.log(stu);
function objIter(stu){
    let details="";
    for(let data in stu){
        details+=stu[data]+" "
    }
    return details;
}
data=objIter(stu);
const myArray = Object.values(stu);
console.log(data[10]);
stringStuu=JSON.stringify(stu);
document.getElementById("demo").innerHTML+= data;
let ht=document.getElementById("string");
ht.innerHTML+=stringStuu;
ht.style.fontSize="30px";
ht.style.color="red";

