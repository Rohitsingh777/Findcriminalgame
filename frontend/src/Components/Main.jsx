import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { Locationsstate } from "../Store/Locations";
import { Cluestate } from "../Store/Clue";
import { Ansstate } from "../Store/Ans";
import { Vehiclestate } from "../Store/vehicle";


export default function Main(){
    const [ data , setData] = useState(); 
    const [cities, setcities ]=useRecoilState(Locationsstate)
    const [clue , setclue ]= useRecoilState(Cluestate)
    const [ans , setans] = useRecoilState(Ansstate) 
    const [vehicles ,setvehicle] = useRecoilState(Vehiclestate)



    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(process.env.REACT_APP_GET_URL);
          setData(response.data);
          const locations = response.data.Locations ; 
          setcities(locations)
          console.log(cities)
          setvehicle(response.data.vehicles)
          console.log(vehicles)
          setclue(response.data.clue)
          setans(response.data.hideout)
          console.log(ans)

          console.log('========================='+JSON.stringify(data)) ; 
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

return (
   <></>
)


}