let text = document.getElementById("myId")
text.setAttribute('src','')
// text.src='kk'
console.log(text)
text.innerText='<h2> hellllooooooooo </h2>'
console.log(text)
text.innerHTML=' <p> Abcd </p>'
console.log(text)

let images=document.getElementById('image').src='background.jpg'
console.log(images)

let newElement=document.getElementsByClassName('lorem')
// newElement.style.color;
// newElement.classList.remove('lorem')
console.log(newElement)

let accessId=document.getElementById('hey')
// accessId.classList.remove('back')
accessId.classList.add('newClass','classesss')

accessId.classList.remove('classesss')
// console.log(accessId)
// console.log(accessId)

let addNew = document.createElement("p");
addNew.innerText="Hello i am new paragraph";
let addElement = document.getElementById("hey");
console.log('iddd',addElement)
addElement.appendChild(addNew);
console.log('iddd',addElement)


//adding new element
let addChild= document.createElement('h1')
addChild.innerText='Hello i am junior coder'
console.log(addChild)

let accessNewId=document.getElementById('code')
console.log(accessNewId)
accessNewId.appendChild(addChild)
console.log(accessNewId)

let findTag=document.getElementsByTagName('h1')
console.log('find',findTag)
