// class User{
//     constructor(username,email,password){
//             this.username=username,
//             this.email=email,
//             this.password=password

//     }
//      encryptPassword=()=>{
//                  return  `{this.password}abc`

//     }

//     capitalizeName(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const user1=new User("Amen",'abc2gmail.com','123')
// console.log(user1);
// console.log(user1.encryptPassword());
// console.log(user1.capitalizeName());

//Backend
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

    User.prototype.encryptPassword = function () {
       return `${this.password}abc`;
 };

    User.prototype.capitalizeName = function (name) {
   return this.username.toUpperCase();
 };
     capitalizeName=function(name){

       return `${this.username.toUpperCase()}`
    }
const encryptPassword=function(password){
      return `${this.password}abc`;

}

const user1 = new User("Eman Khan", "123@gmail.com", 148);

console.log(user1.encryptPassword());
console.log(user1.capitalizeName());
