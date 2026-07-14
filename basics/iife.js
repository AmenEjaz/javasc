
//Normal Function
function Greeting(){
    let username="Amen"
    console.log(`${username}, Welcome to JS Course`)
}
Greeting    ();
//To avoid global manipulation We wrap function into ()
//Now  JS treat it as function expression
//Here the function Greeting1 is the name of function so we call it a named IIFE
(function Greeting1(){
    let name="Eman"
    console.log(`${name}, Welcome to JS Course`);
})();

(
   function Greeting2() {
      console.log(`Hello`);
   }
)();


//Arrow Function as IIFE
//Normal Function
(()=>{
    let user="Amaim"
    console.log(`${user}, Welcome to JS Course`)
}
) ();
//unnamed IIFE
((course)=>{
    let user="Amaim"
    console.log(`Welcome to ${course} course`)
}
) ('javascript');