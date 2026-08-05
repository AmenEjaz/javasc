// // const arr=[]
// // %DebugPrint(myArr)
// const array=[1,2,3,4,5]
// // packed_SMI_Elements/Continuous
// //best type of array: array of numbers
// array.push(6.0) //Packed double elements
// //now the array has become packed_DOUBLE_element we cant make it Packed _SMI_element again
// array[10]=11   //now it bbecame hoely
// console.log(array)
// //accessing empty item index
// console.log(array[7]) //undefined are costly 
// //BOUND CHECK: accessing an element of an array
// console.log(array[19]);
// //to check whether an element esist at 9th position
// hasOwnProperty(array,9) //most expensive checks
// hasOwnProperty(array.prototype,10)
//HOLES are very expensive.so arrays shouldnot have hole
//const array2=[1,2,3,4,5]
//console.log(array[6]);


//Order of optimization:
//SMI > Double > Packed
//Order of optimization in Holes
//H_SMI> H_Double > H_Packed

//Once an array is downgraded then it can never be upgraded

const array3=new Array(3)
//just 3 holes ,HOLET_SMI_ELEMENTS
array3[0]='AMEN'  //HOLEY_ELEMENTS

array3[1]='Ejaz' //HOLEY_ELEMENTS

array3[2]='Khan'  //HOLEY_ELEMENTS
console.log(array3);

const array5=[] //more optimize than array3
array5.push('1')  //PACKED_ELEMENTS
array5.push('1')  //PACKED_ELEMENTS
array5.push('1')  //PACKED_ELEMENTS


console.log(array5);

array6=[1,2,3,4,5]
array6.push(Infinity)
console.log(array6);






