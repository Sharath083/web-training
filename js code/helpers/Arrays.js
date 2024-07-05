// x=new Number(100);
// y=x.valueOf();
// z=100;
// console.log(y +" "+x);
// console.log(x===y)
// console.log(y===z)
// console.log(typeof x)//object
// console.log(typeof z)
// console.log(typeof y)

// c=Number("10")
// console.log(typeof c);//number
let d=Number(new Date("1970-01-01").getDate());
console.log(d);
let d1=Number(new Date("1970-01-03"));
console.log(d);
console.log(d1-d);
let f=new Date().getDate();
console.log(f);
Number.prototype.isPositive=function (){
    return this>=0;
}
let q=1;
console.log(q.isPositive())
let w=-2;
console.log(w.isPositive())

const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
console.log(person.length)
// Array.isArray(person)

let sA=["q","w","4",7]
// let joi=sA.join("_")
// console.log(typeof joi)

sA.unshift("stack");//[ 'stack', 'q', 'w', '4', 7 ] acts like stack
console.log(sA)
console.log(sA.shift()   + " removed,  "+ sA)//stack removed,  q,w,4,7

sA.push("queue")//use push and shift for queue property
console.log(sA)//[ 'q', 'w', '4', 7, 'queue' ]
console.log(sA.shift() + " removed,  "+ sA)//q removed,  w,4,7,queue

console.log(delete sA[2] + " "+sA[2])//true undefined

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);

const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 

console.log(myChildren +" "+Array.isArray(myChildren)); 
let ff=fruits.copyWithin(3, 0);
console.log(ff +" "+Array.isArray(ff));

nums=[1,2,34,5,6,7,83,34,5,435,345]
// nums.filter(data=>(filter.includes(data>18)));
numfi=[]
fi=nums.find(pred=>pred>1833)

function pred(value, index, array){
    value>230 ? numfi.push(value):null 
}
console.log(fi)
class Add{
    Add(a,b){
        this.a=a;
        this.b=b;
    }
    
}

Array.prototype.asc=function(){
    return this.sort((a,b)=>a-b)
}
Array.prototype.dsc=function(){
    return this.sort((a,b)=>b-a)
}
console.log(nums.sort())

nums.asc()
console.log(nums)
console.log(nums.dsc())

dd=nums.filter(data=>data>20)
ds=nums.reduce(data=>{
    if(data>20){
        return data
    }
})
console.log(ds)

for(let [x,y] of nums.entries()){
    console.log(x+ " : "+y)
    
}


let present=new Date();
Date.now()

let birth=new Date("2004-05-23");
const age_limit=18*365*24*60*60*1000;
if(present-birth<age_limit){
    console.log("You are under 18 years")
}else{
    console.log("You are over 18 years")
}



let text;
switch (4) {
  
    
  case 6,4,5:
    text = "Today is Saturday";
    
  case 0:
    text = "Today is Sunday";
  default:
    text = "Looking forward to the Weekend";
}
console.log(text)
let s="qwerty"


const fruitss = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  for(let [ss,sss] of fruitss){
    console.log(ss+" fgf "+sss )
}

let set=new Set([1,2,3,4,5,66,77,34])
sss=set.add(500)
console.log(set.delete(5))
console.log(set.delete(5)+" ----d")
console.log(sss)
for(v of set.keys()){
    console.log(v)
}
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const hm = new Map();

// Add new Elements to the Map
hm.set(apples, 500);
hm.set(bananas, 300);
hm.set(oranges, 200);
for([k,v] of hm){
    console.log(k.name+" "+v)
}

aa=1
sss="3"
console.log(sss*aa)
