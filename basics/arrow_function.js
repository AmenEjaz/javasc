const user={
    username:"Amen",
    price:22,
     welcomeMsg: function(){
       // console.log(`${this.username} Welcome`)
       console.log(this)
     }
}
/*user.welcomeMsg()
user.username="Eman"
user.age=22
console.log(user)
user.welcomeMsg()
function display(){
    let myName="Amaiam"
    console.log(this.myName);
}
display()
*/
const display=()=>{
    myName="Amaim"
    console.log(this)
}
display()

//Explicit
const addTwo=(num1,num2)=>{
return num1+num2
}

console.log(addTwo(2,3))

//Implicit Return dont need parenthesis and return keyword
const addNum=(num3,num4)=> num3+num4

console.log(addNum(9,3))

//Another method
const addVal=(num5,num6)=>(num5+num6)

console.log(addVal(2,6))


///Object Return need to be in parenthesis

const obj=(obj1,obj2)=>({
    username:"Amen"
})
console.log(obj('Amaim', 'Amen'))

