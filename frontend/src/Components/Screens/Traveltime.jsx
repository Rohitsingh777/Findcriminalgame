import { constSelector, useRecoilState, useResetRecoilState } from "recoil"
import { Selectedcitystate } from "../../Store/selectedcity"
import { Ansstate } from "../../Store/Ans"
import { useNavigate } from "react-router-dom"
import { Locationsstate } from "../../Store/Locations"
import { Copstate } from "../../Store/cop"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"
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

   
    useEffect(()=>{
        function handleclick(){
            if(selectedcity === ans ){
                console.log('corrrecet as the ' +`${selectedcity} was selectd and ${ans} was hiding here`)
               
                navigate('/winner');
               
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
                }, 4000);

            }
        }


        handleclick(); 



    },[])


    return(
        <div className=" w-full h-screen  bg-red-700 flex justify-center items-center ">
        { winner && <div className=" animate-bounce w-full sm:w-3/5 h-28 text-3xl font-bold text-white text-wrap"> 
        <span className=" text-black text-wrap bg-white animate-pulse"> YOU FAILED : </span><br/>
        YOU FAILED TO FIND THE CRIMINAL . <br/>
        TRY AGAIN WITH <span className="underline ">  COP {cop}. </span> </div>     }
        
   </div>
    )
}