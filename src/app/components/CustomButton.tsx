import { Click } from "./Click";


type Props = {
  label:string;
  click:()=>void;
}
export const CustomButton =( {label,click}:Props)=>{
    return(

        <button className="p-3 rounded-md bg-blue-800" onClick={click}>{label} </button>



    )

}