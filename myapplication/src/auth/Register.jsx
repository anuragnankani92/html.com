import React from 'react'

function Register() {
  return (
    <div>
        <form>
            <label>First Name:</label>
            <input type='text' placeholder='Enter Your Name' />
            <label>Last Name:</label>
            <input type='text' placeholder='Enter Your Last Name' />
            <label>Email:</label>
            <input type='email' placeholder='Enter Your Email' />
            <label>Password:</label>
            <input type='password' placeholder='Enter Your Name' />
            <input type='submit' />
        </form>

    </div>
  )
}

export default Register