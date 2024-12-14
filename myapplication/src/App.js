import log from './logo.svg';
import './App.css';
import Myfirst from '../src/pages/Myfirst';
import React,{useEffect, useState} from "react";
import A from './pages/A';
import Login from './auth/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './auth/Register';

function App() {

  const [data,setData]=useState('khushi');

  const [addition,setAddition]=useState(10);

  let fname = 'vaishnavi';

  const changeName=()=>{
      setData('pawan')
  }

  useEffect(()=>{
    console.log('i am main component')
  },[addition])

  const add=(()=>{
    setAddition(addition + 2)
  })
  let userName = 'anurag123'
  let arr = [1,2,3,4]

  return (
    <>
<BrowserRouter>
<Routes>
  <Route exact path='/aComponent' element={ <A />  } />
  <Route exact path='/' element={ <Login />  } />
  <Route exact path='/register' element={ <Register />  } />

</Routes>
</BrowserRouter>
    <div className='App' >
      {/* <Login /> */}
      {/* <h1> Hello </h1> */}
      {/* <A fruit='apple' /> */}
    {/* <Myfirst myname='anurag' username={userName} state={data} arr={arr} /> */}
    
    {/* <h1 > Hello My name is {fname}, my friend name is {data} </h1>
    <button onClick={changeName} > Click Me </button> <br /><br />
    {addition}
    <br />
    <button onClick={add} > Add Number </button> */}

    </div>


    </>
  );
}

export default App;
