import { useState } from 'react'
import './App.css'
import Users from './Components.jsx/Users';

const userPromise= fetch('http://localhost:3000/users').then(res=>res.json());

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Hello
      <Users userPromise={userPromise}></Users>
    </>
  )
}

export default App
