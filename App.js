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
    createUserWithEmailAndPassword(auth, 'test3@email.com', 'test1234')
      .then((user) => {
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function login() {
    signInWithEmailAndPassword(auth, 'test3@email.com', 'test1234')
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
  <Nav 
    register={register}
    login={login}
    logout={logout}
    user={user}
    loading={loading}
  />
  );
}

export default App;
