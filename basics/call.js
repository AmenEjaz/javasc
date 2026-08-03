function setUserName(username) {
    this.username=username
    
}
function createUser(username,email,password) {
    
   setUserName.call(this,username)
  // this.username=username
    this.email=email
    this.password=password
    
}
const user1=new createUser("Amen",'abc@gmamil.com','123abc')
console.log(user1)