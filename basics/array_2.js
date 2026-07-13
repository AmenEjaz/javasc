const heroes=['Superman','Batman','Spiderman','Ironman'];
const heroes2=['Hulk','Thor','Captain America'];
/*heroes.push(heroes2)
console.log(heroes)
console.log(heroes[3][1])*/

const mergedArr=heroes.concat(heroes2)
//console.log(mergedArr)

const allHeroes=[...heroes,...heroes2, ...[1,2,3]]
//console.log(allHeroes)
//console.log(typeof allHeroes) // Output: object

const array=[1,2,3,[4,5,6],[7,8]]
//const flatArray=array.flat(Infinity)
//console.log(flatArray)

console.log(Array.isArray(['Amen']))
//to convert string into array
console.log(Array.from('Amen Ejaz')) // Output: [ 'A', 'm', 'e', 'n', ' ', 'E', 'j', 'a', 'z' ]
