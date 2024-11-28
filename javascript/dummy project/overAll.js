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
// Get all Data from LocaoStorage
let newdata= document.getElementById('hii');
console.log( 'show New Data', newdata)
function getAllUsers(){
    let data = JSON.parse(localStorage.getItem('uservalue')) || [];
    console.log(data)
    let showData= document.getElementById('myTable')
    console.log('dom', showData)


    let allData= data.map((value,index)=>{
        return `
        <tr> 
        <td> 1  </td>
        <td> ${value.fname}  </td>
        <td> ${value.email}  </td>
        <td> ${value.username}  </td>
        <td> ${value.contact}  </td>
        <td> ${value.password}  </td>
        </tr>

        `
       
    })
    console.log('my dataaa', allData)
    showData.innerHTML=allData.join('');

}
 console.log(getAllUsers()) 