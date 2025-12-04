//object
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2023
};
// console.log(car)
// console.log(car.year) ///output is 2023
// console.log(car["make"]);

// updating the object
car.year = 2025
// console.log(car)

//adding a new key in the object
car.color = "red"
// console.log(car)

//deleting the object
delete car.color
delete car.year
console.log(car)


//Advanced Object Concepts

//nusted object
const persone = {
    name: "tiki",
    address: {
        city: "pakistan",
        zip: 3279
    },
}

// console.log(persone.name, persone.address.city)
// console.log(persone.details)


//using the this in object
const person = {
    name: "Alice",
    email: "alice12@gmail.com",
    greet: function () {
        console.log("Hello, " + this.name + ' and Email is :' + this.email);
    }
};
// console.log(person.greet())

//using the object in the array
const books = [
    {
        title: "JS Intro", author: "JaneDoe"
    },
    {
        title: "Advanced JS", author:
            "John Smith"
    }
];
console.log(books[1].author, books[1].title)


//function

function adding() {
    let num1 = 10;
    let num2 = 12;
    // console.log("adding the elements :", num1 + num2)
};
adding()

//Parameters vs Arguments
function greet(name) {
    //console.log("Hello, " + name);
}
greet("World");

function personDetails(name, email) {
    //console.log(`The data of the user is : name is ${name} and the email is ${email}`)
}
//personDetails('karan', "karan12@gmail.com")

//return

function personDataRetrun(name, email) {
    return `the name of the user is : ${name} and the Email is ${email}`
}

let user1 = personDataRetrun('Asif', "asif43@gmail.com")
//console.log(user1)
let user2 = personDataRetrun('Alam', "Alam638@gmail.com")
//console.log(user2)

//arrow function
let addingArrow = (name) => {
    return name
};

//console.log(addingArrow("khan"))

let shortArrow = (name) => name;
// console.log('arif')

//loops

for (let i = 0; i <= 10; i++) {
    // console.log('the value of the i is :', i)
}

//for loop using on Array
let color = ['red', 'green', 'yellow']
for (let i = 0; i <= color.length; i++) {
    // console.log(`The name of the color is ${color[i]} and the index number is: ${i}`)
}


//while loop
// let count = 0;
// while (count <= 2) {
//     // console.log('count is : ', count); // 0, 1
//     // count++;
// }

//do while loop
// let i = 0;
// do {
//     console.log(i); // 0
//     i++;
// } while (i < 0);

const products = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 }
];
for (let j = 0; j < products.length; j++) {
    console.log(`${products[j].name}: $${products[j].price}`);
}
// Output:
// Laptop: $1200
// Mouse: $25
// Keyboard: $75




