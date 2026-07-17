

//Reduce

const total= numbers.reduce((accumulator, currentValue)=>{
   console.log(`current Value ${currentValue} : accumulator Value ${accumulator}`)
    return accumulator+currentValue
}, 0
)
 console.log(total)

const sub= numbers.reduce(function (accumulator, currentValue){
   console.log(`current Value ${currentValue} : accumulator Value ${accumulator}`)
    return accumulator-currentValue
}, 100
)
console.log(`Subtraction: ${sub}`)


const cart=[
    {
        itemName: 'js course',
    price: 2000
    },
    {
    itemName: 'db course',
    price: 2999
    },
    {
    itemName: 'cn course',
    price: 6999
    }
]
const totalPrice=cart.reduce((accu, item)=>{
    return accu+item.price;
},0
)
console.log(totalPrice)