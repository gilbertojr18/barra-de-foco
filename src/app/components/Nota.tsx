import { students } from "../data/students"

type notaProps = {
    nota: number

}

export const Nota = ({nota}: notaProps) => {
    
    Math.floor(nota) /*transforma  o número da nota em inteiro*/
    let rating= nota -5
    let carinha = ''

    if(nota>=5){ //trata caso o usuário colocar um número maior que 5
        nota = 5
 
    }else if(nota<=0){ //trata se o usuário tratar um número menor que 0
        nota=0
    }


    return (


        <>
            {nota <= 1 && <h1 className="text-red-500 text-5xl">sua  nota:{nota} ,que triste parça ,{'😭'.repeat(nota)}{'😶'.repeat(5-nota)} </h1>}
            {nota >1 && nota<=3 && <h1 className="text-red-500 text-5xl">sua  nota:{nota} ,Rapaz, estude mais heim ,{'😐'.repeat(nota)}{'😶'.repeat(5-nota)} </h1> }
            {nota >3 && nota <5 && <h1 className="text-red-500 text-5xl">sua  nota:{nota} ,ta quase né ,{'🙂'.repeat(nota)}{'😶'.repeat(5-nota)} </h1>} 
            {nota === 5 && <h1 className="text-red-500 text-5xl">sua  nota:{nota} ,O brabo tem nome ,{'😆'.repeat(nota)}{'😶'.repeat(5-nota)} </h1>} 
                            </>




    )

}