// const text = document.getElementById('text')
// text.setAttribute('class' , "container")
// console.log(text.getAttribute('class'))
// text.removeAttribute('class')

const text = document.getElementById('text')
const heading = document.getElementById('Heading')
const btn = document.getElementById('btn')
const userForm = document.getElementById('userForm')
const nameInput = document.getElementById('nameInput')

btn.addEventListener('click', () => {
    alert('Heading was clicked')
    heading.innerHTML = "button was clicked"
})
heading.addEventListener('mouseover', () => {
    heading.innerHTML = 'mouse over on the heading'
})
heading.addEventListener('mouseout', () => {
    heading.innerHTML = "JavaScript classes"
})
userForm.addEventListener('submit', (a) => {
    a.preventDefault()
})
nameInput.addEventListener('input', (e) => {
        console.log(e.target.value)
})

window.addEventListener('load' , ()=>{
    alert('reload the entire web page')
})
window.addEventListener('resize' , ()=>{
    console.log('Web page is resizing')
})

