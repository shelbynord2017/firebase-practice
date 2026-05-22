import React from 'react'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
 } from 'firebase/auth';

const Nav = ({ register, login, logout, user, loading }) => {
  return (
    <div className="nav__container">
      <div className="App">
        <button onClick={register} className="btn register__btn">Register</button>
        <button onClick={login} className="btn login__btn">Login</button>
        {loading ? 'loading...' : user.email} 
      </div>
    </div>
  )
}


export default Nav