const name='Amen Ejaz'
const surName='Khan'
console.log(`Hello, My name is ${name} ${surName}`)
const fullName=new String(' Eman Khan ')
console.log(fullName[2]) // Output: a
console.log(fullName.length); //    Output: 9
console.log(fullName.toUpperCase()); // Output: EMAN KHAN
console.log(fullName.charAt(5))
console.log(fullName.indexOf('K')) // Output: 5
console.log(fullName.lastIndexOf('a')) // Output: 7
/*Slicing convert string into sub string. It need the place where we 
want to slice and where it should it end. Last value isnt included*) 
Slice can also have a negative value*/

console.log(fullName.slice(0,-2)) // Output: Eman Kh
const substring=fullName.substring(0,6)
console.log(substring) // Output: Eman K
//trime remove the starting and ending spaces from the string
 const trimName=fullName.trim(' ')
 console.log(trimName) // Output: Eman Khan
  console.log(fullName.trimStart()) // Output: Eman Khan
  //Replace
  console.log(fullName.replace('Eman','Amen')) // Output: Amen Khan
  console.log(fullName.includes('Ejaz')) // Output: true
  //Converting into Arary
  console.log(fullName.split(')) // Output: [ '', 'Eman', 'Khan', '' ]






