
//Q.1 given string,find longest word in the given string.
function findlongestword(s){
    let arr=s.split(" ");
    let maxi=0;
    for(let i=0;i<arr.length;i++){
    maxi=Math.max(maxi,arr[i].length);
    }
    return maxi
}

let a=findlongestword("hy my name is sgaratttttttt raj yadav") 
console.log(a) //13

//Q.2 

let s="my name is a b c d"
let arr=s.split(" ");
 //yaha split me ek space denge " " ,because s me haar word ke baad string h


console.log(arr)  // [ 'my','name','is','a','b','c','d' ]

//Q.3
const numbers = [10, 20, 30, 40];
console.log(Math.max(...numbers)); //40

console.log(Math.max(67,9,54)) //67

/* 
Math.Max(67,9,54) , Math.Min(67,9,54) , Math.random() , Math.sqrt(16) , console.log(Math.pow(2, 3)) , 
console.log(2 ** 3) , console.log(Math.round(4.5)) ->5 , console.log(Math.floor(4.5)) ->4
*/

//Q.4
// give a string and convert all first character to capitalize and then concatinate give string

function capitalize(s){

let arr=s.split(" ")
//method 1
// for(let i=0;i<arr.length;i++)
// {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
// }

//method 2
arr=arr.map((elem)=>elem.replace(elem[0],elem[0].toUpperCase()));

console.log(arr) // [ 'I', 'Am', 'Not', 'Good', 'As', 'You' ]

let ans=arr.reduce((value,curr)=>value.concat(curr),"")
return ans
}

let result=capitalize("i am not good as you")

console.log(result) // IAmNotGoodAsYou

//Q.6  give string and char ,return number of times char present in the string

function countchar(s,ch){
    s=s.toLowerCase();  //ye isliye kiye h,because mujhe nhii pata input me string kaisa aayega
    ch=ch.toLowerCase();

    let arr=s.split("");  //yaha space nhi dnege because s me space nhi h

 let s1=   arr.filter((elem)=> elem===ch )

 console.log(s1) //[ 'i', 'i', 'i', 'i' ]

 return s1.length



}
let ans=countchar("minimanabibi","i")
console.log(ans) //4

// Q.7  ye corect hai because agar variable ko declare nhi kiya gya h wo to by default "var" hai.
s=10
console.log(s);   //output=10
