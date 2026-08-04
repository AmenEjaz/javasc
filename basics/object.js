// let des=Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(des);
// Math.PI=5;
// console.log(Math.PI);

const newObj={
    name:'ABC',
    price:2000,
    isAvailable: true,
    order:function(){
        console.log("chai is available");
        
    }

}
console.log(Object.getOwnPropertyDescriptor(newObj,'name'));
Object.defineProperty(newObj,'name',{
    enumerable:true,
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(newObj,'name'));

for (let [key,value] of Object.entries(newObj)) {
    if(typeof value !=='function'){
    console.log(`${key} : ${value}`);
    }
    
}