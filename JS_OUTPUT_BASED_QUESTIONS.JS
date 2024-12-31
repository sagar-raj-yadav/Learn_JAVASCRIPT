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
const data4 = { name: "a", age: 23, iscorect: true };
const info = { hobby: "coding", country: "India" };

const data3 = { ...data, ...info };
console.log(data3);

/*output->
{
  name: 'a',
  age: 23,
  iscorect: true,
  hobby: 'coding',
  country: 'India'
}
*/