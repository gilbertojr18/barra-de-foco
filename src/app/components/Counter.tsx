

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { h1 } from "framer-motion/client";

type Props = {
    c: number;
}
export function Counter({ c }: Props) {
    const [cont, setCount] = useState(c);

    const incrementar = () => {

        setCount(cont + 1);

    };
    useEffect(() => {
        if (cont === 100) {
            confetti({
                particleCount: 200,
                spread: 100,
                origin: { y: 0.6 }
            });
        }
    }, [cont]);

    const progress = Math.min(cont, 100); // trava em 100%
    return (
        <>

                {cont===100 && <h1 className="text-3xl text-center" >🫵100% FOCADO 🫵 </h1>}
            <div className="flex items-center gap-6 p-4">
                {/* BARRA LATERAL */}
                <div className="w-6 h-64 bg-black relative overflow-hidden rounded">
                    <div
                        className="absolute bottom-0 left-0 w-full bg-green-500 transition-all duration-300"
                        style={{ height: `${Math.min(cont, 100)}%` }} // trava em 100%
                    ></div>

                    {/* BOTÃO */}
                    
                    <motion.div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-2xl"
                        animate={{ y: `${-((progress / 100) * 256)}px` }}
                        transition={{ type: "spring", stiffness: 100, damping: 30 }}
                    >
                        🚀
                    </motion.div>
                </div>
                <div >
    

                    <button
                        onClick={incrementar}
                        className={` m-10 p-3 text-white rounded ${cont < 20 ? "bg-blue-600" : "bg-green-600"
                            }`}
                        disabled={cont >= 100}
                    >

                        CARREGUE SUA BARRA DE FOCO  {cont}
                    </button>
                            
                 
                </div>
                
            </div>
        </>
    );
}