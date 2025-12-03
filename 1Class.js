// let num1 = "ALi"
// console.log(num1)

// num1 = "asif"
// console.log(num1)

// const numberStore = 1

// numberStore = 2
// console.log(numberStore)

//datatypes of the javascript

// non-primative datatypes in JavaScript

let person = {
    name: "Ali",
    emailL: "ali123@gmail.com",
    Number: "0348027340234"
}

console.log(person)

//array
let colors = ["red", "green", "blue"];
console.log(colors)
console.log(colors[1]) //green


//Assignment Operator

let a = 10
console.log(a)
console.log(a += 5) // out put = 15
console.log(a -= 10) // out put = 5
console.log(a *= 5) // out put = 25
console.log(a **= 2) // output = 625

//Comparison

let z = 10
console.log(z == "10") // ture
console.log(z === 10) // ture
console.log(z != 10) // false
console.log(z > 10) // true
console.log(z < 9) // false
console.log(z <= 9) // false
console.log(z >= 10) // false

///Gates

//AND
let condition1 = true
let condition12 = false

console.log('AND Gate :', condition1 && condition12)
console.log('OR Gate :', condition1 || condition12)
console.log('NOT Gate', !condition1)

// Increment/Decrement
let i = 1
let y = i++ // y = 1 i++ 2
let r = i-- // r = 2 i-- 1
console.log('Y :', y)
console.log('R :', r)
console.log('Final I = ', i)



//conditions
let personAge = 16

if (personAge >= 18) {
    console.log("You can drive")
}

else if (personAge >= 17) {
    console.log('Please wait one year ')
}
else if (personAge >= 12) {
    console.log("you are a boy focus on studies !!!")
}
else {
    console.log('You are a child stay home!!!')
}

//Nested Conditions

let userLogin = false;

if (userLogin) {
    const admin = true
    if (admin) {
        console.log("user login")
    }
} else {
    console.log("Please login your site")
}


//array 
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits)
fruits.push("Grape")
console.log(fruits)
fruits.pop()
console.log(fruits)

//using shift
fruits.shift()
console.log(fruits)
//using unshift
fruits.unshift('Apple')
console.log(fruits)

//using indexOf()

let indexNo = fruits.indexOf('Banana')
console.log(indexNo)

// using slice()
let newFruits = fruits.slice(0, 2);
console.log(newFruits)

// using map()
let newNumbersArray = [1, 4, 5]
let MapingArray = newNumbersArray.map(item => item + 3)
console.log(MapingArray)

//filter 
let longFruits = fruits.filter(f => f.length > 3); //
console.log(longFruits)