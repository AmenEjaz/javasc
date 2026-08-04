class User{
    constructor(username){
        this.username   =username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
        
    } 

    }
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password
    }
    addCourse(){
        console.log(`New course is added by ${this.username}`);
        
    }
}
const user=new Teacher('AMen','abc@gmail.com','123abc')
const user1=new User('Eman')

user.addCourse()
user1.logMe()
user.logMe()
console.log(user1 instanceof User);
console.log(user instanceof User);
console.log(user1.constructor)
console.log('email' in user);


