"use client";
import { useCounter } from "@/app/services/CounterContext";
import Link from "next/link";
export default function Edit() {
  const { increase, decrease } = useCounter();

  return (
    <>
      <button 
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={increase}
      >
        Increase +{" "}
      </button>
      <button 
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={decrease}
      >
        Decrease -
      </button>

      <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go to Home Page
      </Link>
    </>
  );
}
