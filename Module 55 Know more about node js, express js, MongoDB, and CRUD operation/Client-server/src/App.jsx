import { useState } from 'react'
import './App.css'
import Users from './Components/Users'

const usersPromise = fetch('http://localhost:3000/users').then(res=>res.json());


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello</h1>
    <Users usersPromise={usersPromise}></Users>
    </>
  )
}

export default App
