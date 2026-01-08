console.log('conditions class in JavaScript')

let age = 16
let age2 = 12

if(age >= 18 && age2 >= 18){
    console.log("Now you can drive a car")
}
else if (age >= 16 && age2 >= 18){
    console.log('Wait 2 or 1 year to drive a car')
}
else if (age <= 12 && age2 <= 18){
    console.log('Sorry you are a child play GTA Game')
}
else{
    console.log('Sorry you can not drive a car')
}

