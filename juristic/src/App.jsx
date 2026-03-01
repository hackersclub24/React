// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <nav className="one flex bg-[#21202a]/50 gap-10 justify-around p-1">
         <div className="flex justify-between px-10 py-2 text-sm border-b border-white/20">
          <div className="flex gap-8">
            <span>Call Us: 548978478</span>
            <span>Email us: demo@example.com</span>
            <span>Our address: 45 Dream street Austria</span>
          </div>
        </div>
        <div className="flex">
          <div></div>
          <div>
            <img src="/images/facebook.svg" alt="" className="h-5 w-5" />
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <div>
        <img
          src="/images/main.jpg"
          alt=""
          className="absolute  w-full h-full object-cover"
        />
      </div>
    </>
  );
}

export default App;
