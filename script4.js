//Array and its method 
let fruits = ["Apple", "Banana", "Orange" , 'Grape'];
console.log(fruits)
fruits.push('Grape')
fruits.pop()
fruits.shift()
console.log(fruits)
fruits.unshift('Apple')
console.log(fruits)
console.log(fruits.indexOf('Banana'))
console.log(fruits.includes('Banana'))

let newArray = fruits.slice(0 , 2)
console.log(newArray)

fruits.splice(0 , 3 , "Mango")
console.log(fruits)

let numberArray = [1 , 2 , 3 , 4];
numberArray.map((items)=>{
    console.log(items + 2)
})
let longFruits = fruits.filter(f => f.length >= 5)
console.log(longFruits)