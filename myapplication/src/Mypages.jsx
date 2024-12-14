import React, { useEffect, useState } from 'react'

function Myfirst() {
const [ state, setState ]= useState('hello');
const [data, setData]=useState(0);
const [record, setRecord]=useState([]);
const [obj,setObj]=useState({
    name:'ritik',
    mob:7676768978,
    email:'ritik@gmail.com'
})

console.log(obj.name)

const handelClick=()=>{
    setState('MERN Developer')
}
// const handelMarks=()=>{
//     setData( data + 1 )
// }

useEffect(()=>{

},[])

console.log(data)

console.log(state)

  return (

    <div>
        <h1> i am {state} </h1>
        <h1> My Project marks are {data} </h1>
        <button  onClick={handelClick} > Click Me </button>
        <button  onClick={()=>setData(data + 1)} > Click Me For Marks </button>
        
        
        </div>
  )
}

export default Myfirst;