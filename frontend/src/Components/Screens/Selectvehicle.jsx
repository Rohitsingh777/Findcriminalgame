
import { useRecoilState, useResetRecoilState } from "recoil"
import { Locationsstate } from "../../Store/Locations"
import { useEffect, useState } from "react";
import { Selectedcitystate } from "../../Store/selectedcity";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Vehiclestate } from "../../Store/vehicle";
import { Selectvehiclestate } from "../../Store/selectvehicle";
import EVBike from '../../Images/vehicles/EV Bike.png'
import EVCar from '../../Images/vehicles/EV Car.png'
import EVSuv from '../../Images/vehicles/EV SUV.png'

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
    <div className=" sm:w-3/4  w-full">
      <label
        className="  bg-red-400 text-yellow-500 flex items-center justify-center 
        hover:bg-slate-200 animate-bounce font-bold text-shadow-black mb-3 "
      >
        SELECT A Vehicle
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {vehiclearr.map((vehicle) => {
          let src = EVBike;
          if (vehicle === "EV Bike") {
            src = EVBike;
          } else if (vehicle === "EV Car") {
            src = EVCar;
          } else {
            src = EVSuv;
          }
          return (
            <label
              key={vehicle} // Use a unique identifier for each image
              className="relative block cursor-pointer focus:outline-none hover:scale-90 transition duration-300 ease-in-out"
            >
              <input
                type="radio"
                id={vehicle}
                name="cityradio"
                value={vehicle}
                onChange={(e) => {
                  setvehiclselected(e.target.value);
                }}
                className="absolute opacity-0 w-full h-full z-10"
              />
              <img
                src={src}
                alt={vehicle}
                className="w-full h-48 object-cover rounded-lg shadow-md "
              />
              <div
                className={`absolute inset-0 bg-gray-900 bg-opacity-50 invisible group-hover:visible`}
              >
                <span className="text-white text-center p-2">{vehicle}</span>
              </div>

              <div className=" bg-slate-400">Range : {vehicles[vehicle].Range}</div>
            </label>
          );
        })}
      </div>
      {vehicleselected && (
        <button
          className=" w-full mt-9 bg-black text-red-600 rounded-lg min-h-8 min-w-8 hover:text-green-600  font-bold"
          onClick={() => {
            if (vehicleselected) {
              let kms = vehicles[vehicleselected].Range;
              let dist = cities[cityselected].Distance * 2;
              if (kms >= dist) {
                navigate("/travel");
              } else {
                toast.error(
                  "The vehicle seems to have range lower than required for a round trip"
                );
              }
            } else {
              toast.error("Please select a vehicle ");
            }
          }}
        >
          LETS GO FIND HIM
        </button>
      )}
      <br />
      <br />
     <span className=" bg-slate-300 "> OUR CITY IS {cities[cityselected]?.Distance}Kms far away.</span>
      <br />
      <span className=" bg-slate-300 "> {cities[cityselected]?.Distance * 2}Kms needed for a round trip .</span>
    </div>
  );
}



























