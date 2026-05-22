import React from 'react'

const Nav() {
  return (
    <div className="nav__container">
      <div className="App">
        <button onClick={register}>Register</button>
        <button onClick={login}>Login</button>
        {loading ? 'loading...' : user.email} 
      </div>
    </div>
  )
}

export default Nav