const user= new Object()     //Singleton object
//   const user={} //   non Singleton object 
console.log(user) // Output: {}
console.log(typeof user) // Output: object
user.name='Amen Ejaz',
user.id=12,

console.log(user) // Output: { name: 'Amen Ejaz', if:12 }

const regualarUser= {
fullName:{
    username:{
        firstName:'Amen',
        lastName:'Ejaz',
            }
    
          },
     id:13,
     email:'eman@example.com',
}

console.log(regualarUser.fullName.username) // Output: { fullName: { username: { firstName: 'Amen', lastName: 'Ejaz' } }, id: 13, email: 'eman@example.com' }

const obj1={
    1:'amen', 
    2:'kanwal'
}
const obj2={
    3:'ejaz',
    4:'sheikh'
}
/*Object assign is a static object which copies all enumerable properties 
fro source to target object and returns the target object. It will return the same reference of the target object.*/
const obj3=Object.assign(obj1,obj2)
console.log(obj3) //
const obj4=Object.assign({},obj1,obj2)

//merging using spread operator
const mergedObj={...obj3,...obj4}
//console.log(mergedObj) // Output: { '1': 'amen', '2': 'kan

console.log(Object.keys(mergedObj)) // Output: [ '1', '2', '3', '4' ]
console.log(Object.values(mergedObj))
console.log(Object.entries(mergedObj))
console.log(Object.hasOwn(mergedObj, 'firstName')) // Output: true