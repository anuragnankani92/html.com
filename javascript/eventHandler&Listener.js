const clickMe=()=>{
    console.log('I am Click Me Function')
}
const clickAgain=()=>{
    console.log('I am again function')
}


//event listener funtion 1
let callEvent = document.getElementById('event');
callEvent.addEventListener('click',()=>{
    console.log('i am New Javascript Function')
})
console.log(callEvent)
//event listener funtion 2
let callEvent1 = document.getElementById('event');
callEvent.addEventListener('click',()=>{
    console.log('i am event function of javascript')
})

let neFunction = document.getElementById('double');
neFunction.addEventListener('mouseover',()=>{
    console.log('I am double click')
})