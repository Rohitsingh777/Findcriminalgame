import { useRecoilState } from "recoil"
import { Locationsstate } from "../../Store/Locations"
import { useEffect, useState } from "react";
import { Selectedcitystate } from "../../Store/selectedcity";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function Selectcity(){
  const [cities, setcities] = useRecoilState(Locationsstate);
  const [cityselected, setcityselected] = useRecoilState(Selectedcitystate);
  const navigate = useNavigate(); 
  const cityarr = Object.keys(cities);
  console.log(`your selection is ${cityselected}`);

  useEffect(()=>{
    cityselected && toast.success(`${cityselected} seems a fine guess sir lets get a ride `)
  },[cityselected])

  return (
    <div className=" bg-slate-400  w-full">
        SELECT A CITY FORM BELOW 
    <br/>

      {cityarr.map((city) => {
        return (
          <label key={city}>
            <input
              type="radio"
              value={city}
              name="cityradio"
              onChange={(e) => {
                setcityselected(e.target.value);
              }}
            />
            {city}--{cities[city]?.Description}--{cities[city]?.Distance}KMs from Base
            <br/>
          </label>
        );
      })}
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
   </div>
  );
}