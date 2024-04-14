

import { useRecoilState, useResetRecoilState } from "recoil"
import { Locationsstate } from "../../Store/Locations"
import { useEffect, useState } from "react";
import { Selectedcitystate } from "../../Store/selectedcity";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Vehiclestate } from "../../Store/vehicle";
import { Selectvehiclestate } from "../../Store/selectvehicle";


export default function Selectvehicle(){
    const [cities , setcities ] = useRecoilState(Locationsstate)
    const [cityselected , setcityselected] = useRecoilState(Selectedcitystate)
  const [vehicles, setvehicles] = useRecoilState(Vehiclestate);
  const [vehicleselected, setvehiclselected] = useRecoilState(Selectvehiclestate);
  const navigate = useNavigate(); 
  const vehiclearr = Object.keys(vehicles);
  console.log(`your selection is ${vehicleselected}`);

  useEffect(()=>{
    vehicleselected && toast.success(`${vehicleselected} seems a Good ride`)
  },[vehicleselected])

  return (
    <div>
        SELECT A Vehicle
    <br/>

      {vehiclearr.map((vehicle) => {
        return (
          <label key={vehicle}>
            <input
              type="radio"
              value={vehicle}
              name="cityradio"
              onChange={(e) => {
                setvehiclselected(e.target.value);
              }}
            />
            {vehicle}--Range-{vehicles[vehicle]?.Range}KMs--Count:{vehicles[vehicle]?.Count}
            <br/>
          </label>
        );
      })}
             <button
            className=" mt-9 bg-black text-red-600 rounded-lg min-h-8 min-w-8 hover:text-green-600"
            onClick={() => {
                if(vehicleselected){
                
                    let kms = vehicles[vehicleselected].Range
                    let dist = cities[cityselected].Distance * 2 
                    if(kms>= dist){
                        navigate("/travel");
                    }
                    else{
                        toast.error('The vehicle seems to have range lower than required for a round trip')
                    }
                   
                }
                else{
                    toast.error('Please select a vehicle ')
                }
            }}
          >
           LETS GET A RIDE NOW 
          </button>
          <br/> 
          <br/> 
            OUR CITY IS {cities[cityselected].Distance}Kms far away.<br/> 
            {cities[cityselected].Distance*2}Kms needed for a round trip .
   </div>
  );
}