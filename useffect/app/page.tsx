"use client";
// import Image from "next/image";
import { useEffect, useState } from "react";
// import { useWindowSize } from "react-use";
import Confetti from "react-confetti";



export default function Home() {
  const [count, setcount] = useState(0);
  const [max, setmax] = useState("0");
  const [showConfetti, setShowConfetti] = useState(false);
  const handleClick = () => {
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 3000); // stop after 3 sec
  };

  function check() {
    if (count % 10 == 0 && count != 0) {
      console.log(count);
      setmax(`u have reached ${count}`);
      handleClick();
    }
  }
  useEffect(() => {
    check();
  }, [count]);
  return (
    <>
      <div className="px-10">{count}</div>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        |+|
        {/* {showConfetti && <Confetti gravity={9} />} */}
        {/* {showConfetti && (
          <Confetti numberOfPieces={500} gravity={0.6} initialVelocityY={20} />
        )} */}
        {/* {showConfetti && (
          <Confetti numberOfPieces={500} gravity={0.6} initialVelocityY={20} />
        )} */}
        {showConfetti && (
          <Confetti
            colors={[
              "#ff0000",
              "#ff7f00",
              "#ffff00",
              "#00ff00",
              "#0000ff",
              "#4b0082",
              "#8f00ff",
            ]}
            numberOfPieces={400}
            gravity={0.25}
          />
        )}
      </button>
      <div>{max}</div>
      <div>{/* <button onClick={handleClick}>Celebrate 🎉</button> */}</div>
    </>
  );
}
