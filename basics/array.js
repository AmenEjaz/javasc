const arr=[1, 2, 3, 4, 5];
const heroes=['Superman','Batman','Spiderman','Ironman','Hulk'];
const myArr=new Array(1,2,3,4,5,6,7,8,9);
//console.log(myArr[3])  // Output: 4
//console.log(arr.length) // Output: 5
arr.push(6) // Add element at the end of the array
//console.log(arr) // Output: [ 1, 2, 3, 4, 5, 6 ]
arr.pop() // Remove element from the end of the array
//console.log(arr) // Output: [ 1, 2, 3, 4, 5, 6 ]
myArr.unshift(9)
///console.log(myArr) // Output: [ 1, 2, 3, 4, 5, 6 ]
myArr.shift()

//console.log(arr) // Output: [ 1, 2, 3, 4, 5, 6 ]

const newArr=arr.concat(heroes)
//console.log(newArr) // Output: [ 1, 2, 3, 4, 5, 'Superman', 'Batman', 'Spiderman', 'Ironman', 'Hulk' ]

const newArr2=arr.join()
console.log(newArr2)
console.log(typeof newArr2)
 const slicedArr=arr.slice(1,3)
console.log(slicedArr) // Output: [ 1, 2, 3 ]
console.log(arr)

 const splicedArr=arr.splice(0,3)
 console.log(arr) // Output: [ 4, 5 ]
console.log(splicedArr) // Output: [ 1, 2, 3 ]