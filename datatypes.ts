let lname : string;

lname = "John";

let newname = lname.toUpperCase();
console.log(newname)

let age : number;
age = 25;
age = 25.5

let dob = "25"
let result = parseInt(dob)
console.log(result)

let isValid : boolean = false
console.log(isValid)

let empList : string [];
empList = ["John","Mark","Symon"]

let numList : Array<number>;
numList = [1,2,5,8,6];

let results = numList.filter((num)=> num >2);

let num = numList.find((num)=> num ===2);

console.log(results)
console.log(num)

//lname = 10