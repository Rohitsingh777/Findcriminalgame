

import { useRecoilState, useResetRecoilState } from "recoil"
import { Locationsstate } from "../../Store/Locations"
import { useEffect, useState } from "react";
import { Selectedcitystate } from "../../Store/selectedcity";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Vehiclestate } from "../../Store/vehicle";
import { Selectvehiclestate } from "../../Store/selectvehicle";

import Lihaspur from '../../Images/cities/Lihaspur.png'
import NarmisCity from '../../Images/cities/NarmisCity.png'
import Nuravgram from '../../Images/cities/Nuravgram.png'
import Shekharvati from '../../Images/cities/Shekharvati.png'
import Yapkashnagar from '../../Images/cities/Yapkashnagar.png'

export default function TSelectcity(){
    const [cities, setcities] = useRecoilState(Locationsstate);
    const [cityselected, setcityselected] = useRecoilState(Selectedcitystate);
    const navigate = useNavigate(); 
    const cityarr = Object.keys(cities);
    console.log(`your selection is ${cityselected}`);
  
    useEffect(()=>{
      cityselected && toast.success(`${cityselected} seems a fine guess sir lets get a ride `)
    },[cityselected])
  

  return (
    <div className=" bg-red-300 sm:w-3/4 mt-5">
    <label className="  bg-red-400 text-yellow-500 flex items-center justify-center 
        hover:bg-slate-200 animate-pulse animate-bounce font-bold text-shadow-black">SELECT A City</label>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 ">
      {cityarr.map((city) => {
        let src  = Lihaspur ; 
        if (city === 'Lihaspur') {
            src = Lihaspur 
        }else if( city === 'NarmisCity'){
            src = NarmisCity
        }else if( city === 'Nuravgram'){
            src = Nuravgram
        }else if( city === 'Shekharvati'){
            src = Shekharvati
        }
        else {
            src = Yapkashnagar 
        }
        return (
            <label
          key={city} // Use a unique identifier for each image
          className="relative block cursor-pointer focus:outline-none hover:scale-90 transition duration-300 ease-in-out rounded-sm"
        >
          <input
            type="radio"
            id={city}
            name="cityradio"
            value={city}
            onChange={(e) => {
                setcityselected(e.target.value);
              }}
            className="absolute opacity-0 w-full h-full z-10"
          />
          <img
            src={src}
            alt={city}
            className="w-full h-48 object-cover rounded-lg shadow-md "
          >
            </img>
          <div
            className={`absolute inset-0 bg-gray-900 bg-opacity-50 invisible group-hover:visible`}
          >
            <span className="text-white text-center p-2">{city}</span>
          </div>
          <div className=" w-full">
            <span className="font-bold">{city}</span> is {cities[city]?.Distance}Kms far away.
            <br/>
            <span className="font-bold">Description</span> is {cities[city]?.Description}

            
        </div>

        </label>
        );
      })}
      </div>
             <button
             className=" mt-9 bg-black text-red-600 rounded-lg min-h-8 min-w-8 hover:text-green-600"
             onClick={() => {
                 if(cityselected){
                     navigate("/selectvehicle");
                 }
                 else{
                     toast.error('Please select a city first')
                 }
             }}
           >
            LETS GET A RIDE NOW 
          </button>
          <br/> 
          <br/> 
            Our selected city <span className="font-bold">{cityselected}</span> is {cities[cityselected]?.Distance}Kms far away.<br/> 
            {cities[cityselected]?.Distance*2}Kms needed for a round trip .
   </div>
  );
}




