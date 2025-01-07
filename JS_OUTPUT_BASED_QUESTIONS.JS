 //Q.1
let a=[]
let b=[] 
console.log(a==b)   //false
console.log(a===b)  //false

//array a and b different location pe store hoga ,isliye dono false hoga.

//primitive data type me direct value ko stack memory me store karte h,

/*Arrays, Objects, Functions, etc., stack memory mein reference (pointer or address) store karte 
hain aur, uska actual data heap memory mein hota hai.
*/

//Q.2
let z=[1,2,3,4]
console.log(z)    //  [ 1, 2, 3, 4 ]
console.log(...z)  // array destructuring and output= 1 2 3 4
//array destructuring -> elements array se bahar nikal jayenge

//Q.3
console.log(typeof NaN)  //number

//Q.4 set store only unique value 
let mySet = new Set([1, 2, 3, 4,3,2]);
console.log(mySet); // Output: Set(4) {1, 2, 3, 4}

// mySet.add(value) , mySet.delete(value) ,  mySet.has(value) , mySet.clear() , size

//Q.5
let data={name:"yadav"};
console.log(delete data.name);  //true ->it means,agar ye delete ho jayega to true return karega ,otherwise false return karega

console.log(delete data); //false

//Q.6 Array Destructuring
let data1=["a","b","c","d"];
[...y]=data1;
[p,q,r,s]=data1;
[x]=data1;
console.log(y);  //[ 'a', 'b', 'c', 'd' ]
console.log(x);  //a
console.log(p,q,r,s) //a b c d

//Q.7 Object Destructuring
const data2={
    name:"sagar",
    age:20,
    gender:"M"
}

const { age ,gender}=data2;
console.log( age ,gender);  // 20 M

//Q.8 merge 2 object
const data3 = {hobby:"gaming", name: "a", age: 23, iscorect: true };
const info = { hobby: "coding", country: "India" };

const data4 = { ...data3, ...info };
console.log(data4);

/*output->
{
  hobby: 'coding',
  name: 'a',
  age: 23,
  iscorect: true,
  country: 'India'
}
*/

//Q.9 merge 2 Array
const data6=[2,3,4,5];
const data7=[9,8,0,8];
const final=[...data6,...data7];
console.log(final[5]);  //[ 2, 3, 4, 5, 9, 8, 0, 8]

//Q,10 OR me first positive value hi lenge
const z1=10 || "sagar" || 30
console.log(z1)  //10

const z2=false ||"sagar"  || 30
console.log(z2) // sagar

//AND last wala value return karega
const z3=12 &&"sagar"  && 30
console.log(z2) // 30

//Q.11
console.log(Promise.resolve(6))  // Promise <fullfilled/>  { 6 }

//Q.11 JSON.parse()
convert JSON to javascript value(like object,array,string,number)

=>agar data api se fetch kar rhe h to, response.json() ->convert json to  object

=>JSON.stringify() to convert a Js object into a JSON string. ->convert  object to json  

//Q.12
let name ="abc"

function getname(){
  console.log(name)   //cannot access 'name' before initialization 
  let name="dfff"     //agar yaha name ko fir se initialize nhi kiye hote to error nhi aata
}
getname();


//Q.13 
const name="sagar"

console.log(!typeof name)  //false
console.log(!typeof name==='object') //false
console.log(!typeof name==='string')  //false
console.log(typeof name==='string') //true

//Q.14
let person={name:"yadav"}
Object.seal(person)

person.age=23 
//agar object ko seal kar diye to ,
// uss object ke andar koi bhi new key:value pair insert nhi kar sakte,
// but jo existing value h usko sirf change kar skate h

console.log(person.name) //yadav
console.log(person.age)  //undefined

person.name="sagar"
console.log(person.name) //sagar

//Q.15)  slice
const arr=[1,2,3,4]
console.log(arr.slice(1,3))   //[ 2, 3 ]

//arr.slice(start_index,end_index)  //end_index inlcude nhi hoga

// Q.16 ->Array all properties
arr.push(20)  , arr.shift() ->remove first , arr.pop() ->remove last value ,
arr.sort() ,arr.reverse(),arr.fill(-1) ->fill all element to -1 

//Q.17 map vs forEach
map->returns new array , doesn't affect oiginal array ,
sort,filter,reduce y sab map function ke last me laga sakte h. 

forEach ->doesn't return anything , it affects original array ,
sort,filter,reduce ye sab nhi laga sakte

//Q.18
let a=10

setTimeout(()=>{
console.log(a)
},0)

a=30
//pehel a=10 call stack me jayega ,fir setTimeout web api me chala jayega,fir a=30 call stack me jayega ,
//ab a=30 ho gya and ab setTimeout call stack me aayega and a=30 print kar dega.

//Q.19
let s="ddd"
let t=`ddd`
console.log(s===t) //true
console.log(s==t)  //true

//Q.19) JS always compare from left to right
let x=1
let y=1
let z=2
console.log(x === y === --z) //false
//x===y ->true  and ab true jo hai wo --z se compare hoga 
// to ye false return karega ,because true kabhi bhi 1 ke equal nhi ho sakte(--z=1) 

// Q.20 
console.log(h)  //undefined
var h=9  

//or let me pehle delare karna hoga,fir usse use kar sakte h
console.log(d)  //error:Cannot access 'd' before initialization//error:Cannot access 'd' before initialization
let d=9  

//Q.21
for(var i=0;i<3;i++)
{setTimeout(()=>console.log(i),2)}  // 3 3 3

// or
for(let i=0;i<3;i++)
  {setTimeout(()=>console.log(i),2)} //0 1 2 

//Q.22
const obj={name:"sagar"}
let obj2=obj
obj.name="yadav"
console.log(obj2.name)  //yadav

//non-primitive datatype jo hai wo as a reference store hota h.
//agar obj me kuch change hoga to obj2 me bhi change hoga

//Q.23
console.log(typeof 3+4+"5" )  //number45  ->  typeof 3=number and number+4+5=number45

console.log(2+2+ +"6")  //10 ->agar kisi string ke samne + laga dete hao to wo number ban jata h

//Q.24
console.log("abc"+ +"dfr") //abcNaN
// +"dfr"  ->jab bhi kisi string ke pehle unary operaor(+,-..) lagate hai to js uss string ko
// number me convert karta h,agar string me number nhi h to NaN return karega.

console.log("abc"+ +"3") //abc
//+"3" ->string "3" me number 3 h, to wo number me convert hoga.


//Q.25 call
//call ke help se hum function borrow kar sakte h.

//1st way
const person1={
  name:"akash",
  age:20,
  myfunction:function(){
    console.log(this.name)
    console.log(this.age)
  }
}

person1.myfunction(); //akash 20


const person2={
  name:"megha",
  age:25
}

person1.myfunction.call(person2)  //megha 25


//2nd way->if function is outside the object

const person3={
  name:"bittu",
  age:22
}

const person4={
  name:"vishal",
  age:21
}

let myfunction=function(){
  console.log(this.name)
  console.log(this.age)
}

myfunction.call(person3)  //bittu 22

myfunction.call(person4)  //vishal 21



//Q.26 APPLY

const person5={
  name:"bittu",
  age:22
}

const person6={
  name:"vishal",
  age:21
}

let myfunction2=function(mycity1,mycity2){
  console.log(this.name)
  console.log(this.age)
  console.log(mycity1,mycity2)
}

myfunction2.call(person5,"koderma","barhi") //bittu 22 koderma barhi

myfunction2.call(person6,"ranchi","mumbai")  //vishal 21 ranchi mumbai

//Note: hum multiple argument pass kar sakte h


// apply me liye hum ek ek karke argument pass nhi karenge ,direct array paas kar denge
//mujhe apply me bhi sam ouput milega ,but apply me array pass kar sakte h
let arr1=["koderma","barhi"]
let arr2=["ranchi","mumbai"]

myfunction2.apply(person5,arr1) //bittu 22 koderma barhi

myfunction2.apply(person6,arr2)  //vishal 21 ranchi mumbai


//Q.27 BIND  ->same as call,, but hum sirf bind ko ek new function me store karwa lete hai 
//                            and baad me uss function ko call akrte h

let mybind=myfunction2.bind(person5,"goa","chennai")
mybind()

