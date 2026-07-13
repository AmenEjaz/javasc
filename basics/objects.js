
mySymbol=Symbol('mySymbol')
const user={
    name:'Amen Ejaz',
    "full name":'Amen Ejaz',
    [mySymbol]: 'Key',
    age:22,
    location:'Pakistan',
    email:'abc@gmail.com',
    isLoggedIn:true,
    lastLogin:['Thursday','Friday'],
    greeting : function(){
        console.log(`Assalam o Alaikum! ${this.name}`)
    }


};
//Over riding the value of name property
 user.name=' Eman Ejaz '
 Object.freeze(user.age) // This will prevent any changes to the user object
age=23
 console.log(user.name)
console.log( `My age is ${user['age']}`)
console.log(user[mySymbol])   

user.greeting()