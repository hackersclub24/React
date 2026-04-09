"use client"
// import { useState } from "react";
import Link from "next/link";
 // import Image from "next/image";
// import { useCounter } from "@/services/CounterContext";
import { useCounter } from "@/app/services/CounterContext";


export default function Home() {
  const { a: counter } = useCounter();

  return (
    <>
    <div className="flex  flex-col justify-center width-full h-screen items-center">
    <h1 className="font-extrabold">counter</h1>
    <div className="flex gap-4 border-2 border-gray-300 p-4 rounded-lg">
     <p>The value for counter is: {counter}</p>
    </div>
     <Link href="/edit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
       Go to Edit Page
     </Link>
    </div>
    </>
  );
}
