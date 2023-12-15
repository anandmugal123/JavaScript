let count=1;
// let empcount=10;
// for (let  i= 1;i<=A; i++) {
//     if (i%2==0) {
//         console.log(`Even Numbers are${i}`);
//     }    
// // }
// for (let i=1;i<=A;i++){
//     console.log(`Table for ${i}`);
//     for (let j = 1; j <=10; j++) {
//         console.log(i+"*"+j+"="+i*j);
        
//     }
// 

// const emp=["AVADHUT","PRATIK","ANAND"]
// for (let itr = 0; itr < emp.length; itr++) {
//     const rt = emp[itr];
//     console.log(rt)
    
// }
// while loop
// while (count<=20) {
//     console.log(count);
//     count++;
// }
let empdt=["AVADHUT Shinde","Pratik Adhane","Anand Mugal",1,2,3,4,5,6,7,8,9,10,11,12,14,16,18,20]
let ct=0
// while (ct<empdt.length) {
//     console.log(`EMPLOYEE Working are ${empdt[ct]}`);
//     ct++;
// }

// Do While Loop
//  do {
//      console.log("Welcome TO Datav")
//      ct++
//  } while (ct<5);
// empdt.forEach((Name,index,empdt)=>{
//      if (Name%2==0) {
//         console.log(`${Name} is Even`);
//         console.log(Name,index,empdt);   
//      }
        
//     }
// )



// const  data=[
//     {
//         EName:"ANAND Mugal",
//         ADress:"PUNE"
//     },
//     {
//         EName:"AVADHUT Shinde",
//         ADress:"PNQ",
//     },
//     {
//         EName:"PRATIK  Adhane",
//         ADress:"pnq",
//     }
// ]
 
// for (const iter of empdt) {
//     console.log(iter);
// }

// const Wish="Anand Mugal";
// for (const ISH of Wish) {
//     console.log(`Hello ${ISH} Welcome to Team`);
    
// }
//filter
// const newnumber=empdt.filter((num)=> num%2==0);
// console.log(newnumber);

// const newnumber=empdt.filter((num)=>{

//     if (num%2==0) {
//         console.log(`${num} is Even`);
//     } else {
//         console.log(`Not Even Number`);
        
//     }

// })
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 ,price:750},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 ,price:1000},
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007,price:1000 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010,price:1500 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014,price:1200 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010,price:1400 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996,price:1800 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016,price:1000 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 ,price:800},
  ];

// //   const FAV= books.filter((books)=>books.genre==='History');
// //   console.log(FAV)
// const FAV=books.filter((pb)=>{
//     return pb.edition>='2000' && pb.genre==='Science'}
//     );
// console.log(FAV);
 
// const num=[1,2,3,4,5,6,7,8,9,10]
// const newnumber=num
//                    .map((num)=>num*10)
//                    .map((num)=>num+1);

// console.log(newnumber);

    
// const newnumber=num.reduce((acc,crval)=>acc+crval,0)
// console.log(newnumber)

// Reduce Function
const subTotal=books.reduce(function(acc,crrval){
  return acc+crrval.price
},0);

console.log(`Your subTotal of you cart is ${subTotal}`);