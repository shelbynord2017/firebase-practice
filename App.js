import React from 'react'
import './App.css';
import { auth } from './firebase/init';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
 } from 'firebase/auth';
import Nav from './components/Nav';



 
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


  return (
    <Nav />
  );
}

export default App;
