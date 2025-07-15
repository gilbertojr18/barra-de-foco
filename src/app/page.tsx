"use client"

import Image from "next/image";
import { tieList } from "./data/tieList";
import { Nota } from "./components/Nota";
import { List } from "./components/List";
import { CustomButton } from "./components/CustomButton";


export default function Home() {
  
  const mostrar1=()=>{

    return(alert('click1'))

  }
   const mostrar2=()=>{

    return()





  }
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-300 flex flex-col gap-2 justify-center items-center  w-screen h-screen text-white  mx-auto">
       
      
    

        <CustomButton click={mostrar1} label="tenho que aprender"/>
        <br />
        <CustomButton  click={mostrar2} label="tenho que aprender2"/>
        <Nota nota={1} />
    </div>


    
  );


}
