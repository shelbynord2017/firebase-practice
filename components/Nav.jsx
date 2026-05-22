import React from 'react'


const Nav = ({ register, login, logout, user, loading }) => {
  return (
    <div className="nav__container">
      <div className="App">
        <button onClick={register} className="btn register__btn">Register</button>
        <button onClick={login} className="btn login__btn">Login</button>
        {loading ?
         <>
          <div className="skeleton__wrapper">
            <div className="skeleton skeleton__register--btn"></div>
            <div className="skeleton skeleton__login--btn"></div>
          </div>
        </>
        :
        user?.email 
        } 
      </div>
    </div>
  )
}


export default Nav