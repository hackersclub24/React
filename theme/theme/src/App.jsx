// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import UserContext from './context/UserContext'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1>Hello, World!</h1>
    </UserContextProvider>
  )
}

export default App
