// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="relative h-screen w-full">
        <img
          src="/images/main.jpg"
          alt=""
          className="absolute  w-full h-full object-cover"
        />
        <nav className=" relative flex justify-between items-center px-10 py-3  text-sm  text-white  bg-[#222531]/70 ">
          <div className="flex justify-between px-10 py-2 text-sm -white/20">
            <div className="flex gap-8">
              <span className="text-[#fff]">Call Us: 548978478</span>
              <span className="text-[#fff]">Email us: demo@example.com</span>
              <span className="text-[#fff]">
                Our address: 45 Dream street Austria
              </span>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <img src="/images/facebook.svg" alt="" className="h-5 w-5" />
            </div>
            <div>
              <img src="/images/twitter.svg" alt="" className="h-5 w-5" />
            </div>
            <div>
              <img src="/images/linkedin.svg" alt="" className="h-4 w-4" />
            </div>
            <div>
              <img src="/images/pinterest.svg" alt="" className="h-5 w-5" />
            </div>
            <div><img src="/images/skype.svg" alt="" className="h-5 w-5" /></div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default App;
