// synchronously

// console.log("fetching first line")

// for(let i = 0; i < 100000; i++){
//     console.log(`time taking ${i}`)
// }
// console.log("fetching third line")

// Asynchronous function

console.log("fetching first line")

setTimeout(()=>{
    for(let i = 0; i < 1000; i++){
    //  console.log(`time taking ${i}`)
    }
},[])
console.log("fetching the third line")

///Promises

// let p = new Promise((resolve , reject )=>{
//     let fetchTheData = false // api
//     if(fetchTheData){
//         resolve("We fetch the data from the server")
//     }else{
//         reject(new Error("sorry check you internet connections"))
//     }
// })
// p.then((value)=>{
//     console.log(`catching the value in .then function: ${value}`)
//     alert("Your are connected to our server")
// }).catch((err)=>{
//     console.log(`handle the error : ${err.message}`)
// })

// async function fetchWorking() {
//     try{
//         let promise1 = await p;
//         // console.log(promise1)
//     } catch (err){
//         // console.log('handle the error  ' + err.message)
//     }
// }

///fetching the api from the internet


let Container = document.getElementById('container')
async function fetchingApi() {
    let url = await fetch('https://jsonplaceholder.typicode.com/posts')
    let response = await url.json()
    for (let i = 0; i <= 3 && i < response.length ; i++){
        // console.log(`title : ${response[i].title}`)
        let div = document.createElement('div')
        let title = document.createElement('h3')
        let description = document.createElement('p')

        title.innerHTML = response[i].title;
        description.innerHTML = response[i].body;

        div.className = 'childComponent'

        div.appendChild(title)
        div.appendChild(description)

        Container.appendChild(div)


    }
}
fetchingApi()