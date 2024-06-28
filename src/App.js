import './App.css';
import AddressForm from './components/AddressForm';
import Review from './components/Review';
import PaymentForm from './components/PaymentForm';
import SignIn from './components/signin';
import Checkout from './components/checkout';
import SignUp from './components/signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { auth } from './firebase/config';
import { set } from 'firebase/database';
import React from 'react';
import { FaBuffer } from 'react-icons/fa'

function App() {

  const handleClick = () => {
    let element = document.getElementById("navlinks")
    const computedStyle = window.getComputedStyle(element, null)
    console.log(computedStyle.display)

    if (computedStyle.display === "none") {
      element.style = "display:flex"
    } else {
      element.style = "display:none"
    }
  }

  const[user, setUser] = React.useState(null)

  return (
    <div>
      <div className='"navbar'>
      <div className='logo'>Logo</div>
      <div className='navlinks'>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SHOP</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className='burger' onClick={handleClick}>
        <FaBuffer />
      </div>
    </div>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignIn setUser={setUser}></SignIn>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      <Route path='/checkout' element={user?<Checkout ></Checkout>:<SignIn setUser={setUser}></SignIn>}></Route>
    </Routes>
    </BrowserRouter>

    </div>
  
    
  );
}

export default App;
