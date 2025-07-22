'use client';



import  {Counter} from "./components/Counter";


import { useState } from "react";


export default function Home() {

  return (
    <>
      <div className="bg-gradient-to-r from-sky-500 to-indigo-300 flex flex-col  justify-center items-center  w-screen h-screen text-white  mx-auto">

        <div className=" mt-25">
          <Counter c={1}/>

        </div>

      </div>

    </>
  );


}
