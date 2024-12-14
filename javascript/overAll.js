console.log('helloo')
    // let name = document.getElementById('fname')
    // let username = document.getElementById('username')
    // let email = document.getElementById('email')
    // let contact = document.getElementById('contact')
    // let password=document.getElementById('password')

    // console.log(name)
    // console.log(username)
    // console.log(email)
    // console.log(contact)
    // console.log(password)
    // console.log( JSON.parse(localStorage.getItem('uservalue')))
  

function registerUser(event){
    event.preventDefault()
    let name = document.getElementById('fname').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let contact = document.getElementById('contact').value;
    let password=document.getElementById('password').value


    let setUser= JSON.parse(localStorage.getItem('uservalue')) ? JSON.parse(localStorage.getItem('uservalue')):[];

    if( setUser.find((value)=>{
       return value.email == email && value.username == username
    }) ){
        alert('Email or UserName Already Registered')
    }else{
        setUser.push({
            'fname':name,
            'username':username,
            'email':email,
            'contact': contact,
            'password':password
        })
    
        localStorage.setItem('uservalue', JSON.stringify(setUser))
        window.location.href='./loginPage.html'
    }
}

function loginUser(event){
    event.preventDefault()
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let userData= JSON.parse(localStorage.getItem('uservalue')) || [];

    if( userData.find((value)=>{
        return value.email == email || value.username == email && value.password == password
    }) ){
        alert('Login Successful')

        let data =userData.filter((value)=>{
            return value.email == email || value.username == email && value.password == password 
        })[0]
        localStorage.setItem('firstname',data.fname)
        localStorage.setItem('email',data.email)

        window.location.href='./homePage.html'
    }else{
        alert('Email or Password is Invalid')
    }
}
// Get all Data from LocalStorage

function getAllUsers(){
    let data = JSON.parse(localStorage.getItem('uservalue')) || [];
    console.log(data)
    let showData= document.getElementById('myTable')
    console.log('dom', showData)


    let allData= data.map((value,index)=>{
        return `
        <tr> 
        <td> ${ index + 1 }  </td>
        <td> ${value.fname}  </td>
        <td> ${value.email}  </td>
        <td> ${value.username}  </td>
        <td> ${value.contact}  </td>
        <td> ${value.password}  </td>
        <td>
        <button onclick=editRow('${ value.email }') >Edit </button>
        <button onclick=deleteRow('${ value.email }') >Delete </button>
        </td>
        </tr>

        `    
    })
    console.log('my dataaa', allData)

    showData.innerHTML=allData.join('');

}
 console.log(getAllUsers()) 

function deleteRow(email){
let record = JSON.parse( localStorage.getItem('uservalue')) || [];
let deleteRow = record.findIndex((value)=>{
    return value.email == email;
})

if( deleteRow != -1 ){
    record.splice(deleteRow,1)
}
localStorage.setItem('uservalue',JSON.stringify(record));
getAllUsers()

}

function editRow(email){

    let record = JSON.parse( localStorage.getItem('uservalue')) || [];
let findEmail = record.findIndex((value)=>{
    return value.email == email;
})
console.log(findEmail)
if( findEmail !== -1 ){
    let { fname, username, email, contact, password }=record[findEmail];

    document.getElementById('editFname').value=fname;
    document.getElementById('editUsername').value=username;
    document.getElementById('editEmail').value=email;
    document.getElementById('editContact').value=contact;
    document.getElementById('editPassword').value=password;

    // record[findEmail].fname=fname

}

  document.getElementById('userId').style.display='block'
}

function closeForm(){
    // event.preventDefault()
    document.getElementById('userId').style.display='none'
}

function updateUser(event){
event.preventDefault()
// debugger
let fname= document.getElementById('editFname').value;
let username= document.getElementById('editUsername').value;
let email= document.getElementById('editEmail').value;
let contact= document.getElementById('editContact').value;
let password= document.getElementById('editPassword').value;


let record = JSON.parse( localStorage.getItem('uservalue')) || [];
let findEmail = record.findIndex((value)=>{
    return value.email == email;
})

if( findEmail !== -1 ){
    // if( email !== record[findEmail].email ){
    //     if( record.some((value)=>{
    //         return value.email == email;
    //     }) ){
    //         alert('Email Already Registered')
    //     }


        record[findEmail].fname=fname;
        record[findEmail].username=username;
        record[findEmail].email=email;
        record[findEmail].contact=contact;
        record[findEmail].password=password;
        localStorage.setItem('uservalue',JSON.stringify(record))

        
        getAllUsers()
        closeForm()

    // }
}



}






// function showAllRecord(){
//     let record= JSON.parse(localStorage.getItem('uservalue'))  || [];
//     console.log(record)
//     let showData=document.getElementById('myTable');

//     let allData=record.map((value, index)=>{
//        return `
//         <tr>
//         <td> ${index + 1 } <td/>
//         <td> ${ value.fname} <td/>
//         <td> ${ value.email} <td/>
//         <td> ${ value.username} <td/>
//         <td> ${ value.contact} <td/>
//         <td> ${ value.password} <td/>
//         <tr/>
//         `
//     })
//     console.log(allData)
//     showData.innerHTML=allData.join('')



// }
// showAllRecord()