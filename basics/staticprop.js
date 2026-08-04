class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
        
    }
    static createId(){
        return `123`
    }
}
class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const Eman= new Teacher('Eman','abc@gmail.com')
const Amen =new User('Amen')
//console.log(Amen.createId());
Eman.logMe();
//console.log(Eman.createId())
