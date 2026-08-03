/*function multiply(num) {
    return num*5
    
}
console.log(multiply(3));
multiply.power=3
console.log(multiply.power);
*/
function createUser(username,score) {
    this.username=username
    this.score=score
}
createUser.prototype.increment=function(){
    this.score++
    console.log(score);
    
}
createUser.prototype.print=function(){
    console.log(`score: ${this.score}`)
}
const user1=new createUser('Amen',22)
const user2=new createUser('EMan',2)

  //  console.log(score);
    user1.print()
