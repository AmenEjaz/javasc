// let name='Amen   '
// let sur_name='   Ejaz   '

// console.log((name.length));
// console.log((name.truelength));
/*
let heroes=['a','b','c']
let power={
    thor:'hammer',
    spiderman:"sling",
    //getSpiderPower=function(){
    //    console.log(`spider power : ${this.power}`);
        
   // }
}
Object.prototype.amen=function(){
    console.log('Amen is present');
    
}
Array.prototype.greet=function(){
    console.log('Welcome');
    
}
//heroes.amen()
power.amen()
heroes.greet()
//power.greet()
*/

const user={
    name:'amaim',
    city: 'mansehra',
}
const teacher={
    makevideo:true
}
const assistant={
    isAvailable:false
}
const support={
    makeAssignment:'Js Assignment',
    fullTime:true,
    __proto__:assistant
}
teacher.__proto__=user

//Modern syntax
Object.setPrototypeOf(assistant,teacher)
let userName='  Eman  Ejaz '
String.prototype.trueLength=function () {
    console.log(`${this}`);
    console.log((`true length: ${this.trim().length}`));
    
    

    
}
userName.trueLength()
"AMAIM".trueLength()