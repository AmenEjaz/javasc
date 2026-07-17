// // const subjects =["English","Urdu", "Mathematics"]

// // subjects.forEach(function (item){
// //     console.log(item)
// // })

// // //displaying array as output
// // const arrSubjects=[];
// // subjects.forEach(function (item){
// //    arrSubjects.push(item);
// // })
// //     console.log(arrSubjects);
    
// // //Array Function
// // subjects.forEach( (item)=>{
// //     console.log(item)

// // })
// // //
// // // function printMe(item){
// // //     console.log(item)
// // // }
// // // subjects.forEach(printMe)

// // subjects.forEach( (item, index, subjects)=>{
// //     console.log(item, index, subjects)

// // })
// const obj=[{
//     name:"Amen",
//     age: 23},
//     {name:"Amaim",
//     age: 13},
// ]
// obj.forEach( (item)=>{
//     console.log(item.name)
// })

const a1 = [1, 2, 3, 4];
const a2 = [1, 2, 3, 4];
    const result = [];

function printResult(a1,a2,result){

for (let i = 0; i < a1.length; i++) {
    result.push(a1[i] + a2[i]);
}
        return result;

}
console.log(printResult(a1,a2,result))

// console.log(result);


