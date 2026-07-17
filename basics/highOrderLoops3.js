 const subjects=["js", "db", "cn","c++"]
 subjects.forEach( (item)=>{
    console.log(item)
 })
 console.log()
 //Asynchronous
 const name=["Amen","Amaim"]
 const names=(value)=>{
   console.log(value)
 }
 name.forEach(names)
console.log()

 const array=[]
 const sub=(i)=>{
       array.push(i)
     console.log(array)

 }
   subjects.forEach(sub)
     console.log()

 const arr=[]
 const subject=subjects.forEach((value)=>{
   
    arr.push(value)
     return value

 });
 console.log(subject)

 const numbers=[-3,1,2,4,6,8,10]
 const nums=numbers.filter((num)=>num>4)
 console.log(nums)

 const n=numbers.filter((nu)=>{
    return  nu<4 // if we dont use Return keyword output will be[]
 })
 console.log(n)

// //For Each
 const newNumbers=[]

 numbers.forEach((num)=>{
      if(num<4){
         newNumbers.push(num)
     }
 })
 console.log(newNumbers);

const books = [
  {
    bookName: "The Alchemist",
    genre: "Fiction",
    publicationDate: "1988"
  },
  {
    bookName: "Clean Code",
    genre: "Programming",
    publicationDate: "2008"
  },
  {
    bookName: "The Pragmatic Programmer",
    genre: "Programming",
    publicationDate: "1999"
  },
  {
    bookName: "Think and Grow Rich",
    genre: "Personal Finance",
    publicationDate: "1937"
  },
  {
    bookName: "Deep Work",
    genre: "Productivity",
    publicationDate: "2016"
  },
  {
    bookName: "Eloquent JavaScript",
    genre: "Programming",
    publicationDate: "2018"
  }
];
const book= books.filter((bk)=>{
    //return bk.genre==='Programming';
    //return bk.publicationDate>2010
    return bk.publicationDate>2010 && bk.genre=='Productivity'

})
console.log(book)
const numbers=[1,2,3,4,5,6,7]
let number= numbers.map((num)=>{
    return num+10;
})
console.log(number)

// const n= numbers.forEach((numb)=>{
//     return numb*2;
// })
// console.log(n)
//Chaining
// let numb= numbers
//         .map((num)=> num*10)
//         .map((num)=>num+1)
//         .filter((num)=>num>50);

// console.log(numb)





