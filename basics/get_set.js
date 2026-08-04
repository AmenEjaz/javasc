class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
 
    get password(){
                // return this._password.toUpperCase()
                 return `${this._password}amen`

            }
    set password(value){
        this._password=value

    }
     get email(){
                // return this._password.toUpperCase()
                 return `${this._email}`

            }
    set email(e){
        this._email=e

    }
}    
    const Amen=new User('abc@gmail.com',123)
    console.log(Amen.password);
        console.log(Amen.email);

    
