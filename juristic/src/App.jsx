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
          className="absolute  w-full h-[92%] object-cover"
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
            <div>
              <img src="/images/skype.svg" alt="" className="h-5 w-5" />
            </div>
          </div>
        </nav>
        <nav className=" flex  relative border-b border-white/20 w-full h-20 ">
          <div className=" flex justify-center items-center gap-10 text-white font-bold w-5/6 h-full justify-around  border-r border-white/20">
            <img
              src="/images/logo.png"
              alt=""
              className="h-13 translate-x-[-50%]"
            />
            <span className="flex justify-center items-center gap-2">
              Home{" "}
              <img src="/images/down-arrow.svg" alt="" className="w-3 h-3" />
            </span>
            <span className="flex justify-center items-center gap-2">
              Page{" "}
              <img src="/images/down-arrow.svg" alt="" className="w-3 h-3" />
            </span>
            <span className="flex justify-center items-center gap-2">
              Shop{" "}
              <img src="/images/down-arrow.svg" alt="" className="w-3 h-3" />
            </span>
            <span className="flex justify-center items-center gap-2">
              Projects{" "}
              <img src="/images/down-arrow.svg" alt="" className="w-3 h-3" />
            </span>
            <span className="flex justify-center items-center gap-2">
              Blog{" "}
              <img src="/images/down-arrow.svg" alt="" className="w-3 h-3" />
            </span>
            <span className="flex justify-center items-center gap-2">
              Contact{" "}
              <img src="/images/down-arrow.svg" alt="" className="w-3 h-3" />
            </span>
          </div>
          <div className="flex  w-1/6 p-4 gap-5 ">
            <span className="cursor-pointer">
              <img src="/images/search.svg" alt="" className="h-7 w-7" />
            </span>
            <span className="relative cursor-pointer">
              <img src="/images/cart.svg" alt="" className=" h-7 w-7" />
              <span
                className="absolute -top-1 -right-1 bg-[#c9b38c] text-white text-xs 
                   w-5 h-5 flex items-center justify-center rounded-full"
              >
                1
              </span>
            </span>
          </div>
        </nav>
        <span className="text-white absolute text-6xl robo  left-30 top-50 ">
          {" "}
          <h1>
            Our Independence <br /> Makes the Difference
          </h1>
        </span>
        <span className="text-white absolute text-2xl font-serif left-30 top-90 font-thin muli tracking-wide">
          <h1>Nationally Established. Internationally Recognized</h1>
        </span>
        <button className="absolute text-white border p-4 bg-[#c9b38c] cursor-pointer top-110 left-30">
          Free Consultation
        </button>
        <button
          className="w-16 h-16 rounded-full border border-gray-300 
                flex items-center justify-center left-8
                cursor-pointer hover:bg-white/10 transition absolute top-1/2 -translate-y-1/2"
        > <img src="images/left-arrow.svg" alt=""  /></button>
      </div>
    </>
  );
}

export default App;
