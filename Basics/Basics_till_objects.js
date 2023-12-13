"use strict";
let Name="Anand Mugal";
console.log(typeof Name);
console.log(2*89+"10");
var str=`Pune`;
console.log(`Name is ${Name.toUpperCase()}  and base location is ${str.toUpperCase()}`);
console.log(Name.charAt(10))
const email="anand@g.com";
console.log(email);
console.log(email.replace('g','datavsn'));
console.log(email.includes('anand'));
const empNAME="AnandMugal PratikAdhane AvadhutShinde"
console.log(empNAME.split(' '));
const salary=100000000;
console.log(salary.toLocaleString("en-IN"));
let date=new Date()
console.log(date.toString());
const EMP=["AnandMugal","PratikAdhane","AvadhutShinde",["PUNE","HYDERABAD","BENGLURU"][100000,100000,100000]]
console.log(EMP.includes("PUNE"));
console.log(EMP.includes("Delhi"));
console.log(EMP.includes(200000));
console.log(EMP.includes(100000));
console.log(EMP.indexOf(100000));
console.log(EMP.indexOf("AvadhutShinde"));
console.log(EMP.indexOf("HYDERABAD"));
console.log("A",EMP);
console.log("B",EMP.slice(0,5));
console.log("C",EMP.splice(0,5));
console.log(EMP);
console.log(EMP);
const FLt=EMP.flat(Infinity);
console.log(FLt);
const sym=Symbol("Key1")
const User={
       name:"Anand Mugal",
       [sym]:"key1",
       age:23,
       email:"anandmugal@g.com",
       location:"Pune"
 }

console.log(User.email);
console.log(User["location"]);
console.log(User[sym]);
console.log(typeof [sym]);
 User.Welcome=function(){
       console.log(`Welcome ${this.name} to JavaScript Tutorial`)
 }
console.log(User.Welcome());
const ob1={1:"P",2:"O"}
const ob2={3:"e",4:"r"}
const ob3=Object.assign({},ob1,ob2);
console.log(ob3)
