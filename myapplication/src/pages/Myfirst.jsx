import React from 'react'

function Myfirst(props) {
    console.log(props);
    // props.myname='hello'
  return (
    <div>
    <div>My name is First Page</div>
    <h1> {props.myname} </h1>
    <h1> {props.username} </h1>
    <h1> {props.state} </h1>
    
    </div>
  )
}

export default Myfirst