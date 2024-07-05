function Person(first, last, age, eye) {//construtor
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName =  this.firstName + " " + this.lastName;
    this.toString=function(){
        return this.fullName+","+this.age+","+this.eyeColor;
    }

}
const car=["aa","aa1"];
Person.prototype.changeName=function(name){
    this.firstName=name;
}//add new function to constructor
Person.prototype.addNewCar=function (cars){
    cars.forEach(c=>{
        this.cars.push(c);
    })
}
Person.prototype.cars=car
const a=new Person("s","a",10,2);
const a1=new Person("s1","a1",1,2);
a.age=10000000
console.log(a.toString())
// da=Object.values(a);
// console.log(a.fullName+" "+a1+" ");
// a1.changeName("name change");
// a.cars=car
// da=Object.values(a);
// console.log(da);
// const array=new Array();
// array.push(a);
// array.push(a1);
// array.forEach(element => {
//     console.log(element)
//     console.log("----------------------------")
    
// });
// let small =
//     array.map(data=>{
//         if(data.age<5){
//             return data;
//         }
//     }
// )


// console.log(small);

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);