//For In Loop on Array
const array=["Amen", "Abdul Mohiz", "Abdul Waseh" ,"Amaim"]
const result=[];
for(const iterator in array){
   result.push(array[iterator])
    
}
console.log(result)
//For in Loop on Object
const obj={
    name:'Amen',
    age:23,

}
for(const key in obj){
    console.log(key, ":" ,obj[key])
}

//For Of Loop on Array
const a1 = [1, 2, 3, 4];
const a2 = [1, 2, 3, 4];
const result=[]
index=0;
for (const element of a1) {
    result.push(element + a2[index])

    
    
    index++;

}
console.log(result);

For of On Object results in error because it wors only on iterable and object is ot iterabe

const obj={
    name:'Amen',
    age:23,

}
for(const key of obj){
    console.log(key, ":" ,obj[key])
}
For In isnt applicable on map becuase it workss on object properties.
const map=new Map()
map.set("name", "Amen")
map.set("age", 23)

for(const i in map){
    console.log(i)
}

const map=new Map()
map.set("name", "Amen")
map.set("age", 23)

for(const i of map){
    console.log(i)
}

//Map destructuring

for (const [key, value] of map) {
    console.log(key, ":", value);
}

// const a1 = [1, 2, 3, 4];
// const a2 = [1, 2, 3, 4];

// const result = [];

// for (let i = 0; i < a1.length; i++) {
//     result.push(a1[i] + a2[i]);
// }

// console.log(result);