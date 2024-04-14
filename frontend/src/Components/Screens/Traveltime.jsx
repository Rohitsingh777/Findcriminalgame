import { constSelector, useRecoilState, useResetRecoilState } from "recoil"
import { Selectedcitystate } from "../../Store/selectedcity"
import { Ansstate } from "../../Store/Ans"
import { useNavigate } from "react-router-dom"
import { Locationsstate } from "../../Store/Locations"
import { Copstate } from "../../Store/cop"
import { toast } from "react-toastify"
import { useState } from "react"
import { Selectvehiclestate } from "../../Store/selectvehicle"


export default function Findcriminal(){
    const [cop, setcop ] = useRecoilState(Copstate) ; 
    const [locations , setlocations] = useRecoilState(Locationsstate)
    const [selectedcity ,setselectedcity ] = useRecoilState(Selectedcitystate)
    const [ans , setans ] = useRecoilState(Ansstate)
    const [vehicleselected, setvehiclselected] = useRecoilState(Selectvehiclestate);
    const [cityselected , setcityselected] = useRecoilState(Selectedcitystate)
    const [winner ,setwinner] =useState(false)
    const navigate = useNavigate()

    function handleclick(){


        if(selectedcity === ans ){
            console.log('corrrecet as the ' +`${selectedcity} was selectd and ${ans} was hiding here`)
            // navigate('/winner'); 
            setTimeout(() => {
                navigate('/winner')
            }, 500);
        }
        else{
            setwinner(true)
            setvehiclselected();
            setcityselected();
            toast.error('YOU DIDNT FIND THE CRIMINAL MAYBE THE NEXT COP CAN DO IT ')
            console.log(`Better luck next time `)
            setlocations((prev)=>{
                const Newlist = Object.fromEntries(
                    Object.entries(prev).filter(([key]) => key !== selectedcity)
                  );
                  return Newlist ; 
            })
            setcop((prev)=>{
                if (prev === 3 ){
                    console.log(`cop 1`)
                    return 1 ; 
                }
                else{
                    console.log(`cop ${prev+1}`)
                    return prev+1 ; 
                }
            })

            setTimeout(() => {
                navigate('/play')
            }, 2000);
        }
    }
    

    return(
        <div className=" w-full h-full bg-fuchsia-700 flex justify-between items-center ">
        <div className=" bg-yellow-300 " onClick={handleclick}>
        {`CLICK TO KNOW IF YOU FOUND THE CRIMINAL`}
        </div>
        { winner && <div className=" text-2xl bg-red-600 font-bold text-white"> YOU FAILED TO FIND THE CRIMINAL TRY AGAIN </div>     }
        
        <div></div>     


   </div>
    )
}