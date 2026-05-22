import React from 'react'
import { auth } from './firebase/init';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
 } from 'firebase/auth';

 function App() {
   const [user, setUser] = React.useState({})
   const [loading, setLoading] = React.useState(true)
 
   React.useEffect(() => {
      onAuthStateChanged(auth, (user) =>{
       setLoading(false)
       console.log(user);
       if (user) {
         setUser(user)
       }
      })
   }, [])
 
   function register() {
     console.log('register')
     createUserWithEmailAndPassword(auth, 'test2@email.com', 'test123')
       .then((user) => {
         console.log(user)
       })
       .catch((error) => {
         console.log(error)
       })
   }
 
   function login() {
     signInWithEmailAndPassword(auth, 'test2@email.com', 'test123')
     .then(({ user }) => {
       console.log(user)
       setUser(user)
     })
     .catch((error) => {
       console.log(error.message)
   })
 }
 
 function logout() {
   signOut(auth);
   setUser({})
 }


  

const Nav = () => {
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
}

export default Nav