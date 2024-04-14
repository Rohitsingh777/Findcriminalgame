import City from "../city";
import Lihaspur from "../../Images/cities/Lihaspur.png";
import Narmis from "../../Images/cities/NarmisCity.png";
import Nuravgram from "../../Images/cities/Nuravgram.png";
import Shekharvati from "../../Images/cities/Shekharvati.png";
import Yapkashnagar from "../../Images/cities/Yapkashnagar.png";
import { useRecoilState } from "recoil";
import { Locationsstate } from "../../Store/Locations";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Cityscreen() {
    const navigate = useNavigate()
    const [cities , usecities] = useRecoilState(Locationsstate)

  return (
   <div className=" align-middle justify-center flex flex-wrap h-3/4 w-3/4 items-center ">
    <div className="w-full flex align-middle justify-center bg-red-400 text-black">Possible cities </div>
    <div className="h-full w-full bg-red-400 justify-center items-center flex ">
      <div className=" w-full h-full bg-emerald-400 sm:flex sm:flex-wrap gap-y-1  sm:gap-y-0 "> 
        <City name="Lihaspur" desc={JSON.stringify(cities.Lihaspur?.Description)}  dis={JSON.stringify(cities.Lihaspur?.Distance)} img={Lihaspur} />
        <City name="NarmisCity " desc={JSON.stringify(cities.NarmisCity?.Description)}  dis={JSON.stringify(cities.NarmisCity?.Distance)} img={Narmis} />
        <City name="Nuravgram" desc={JSON.stringify(cities.Nuravgram?.Description)} dis={JSON.stringify(cities.Nuravgram?.Distance)} img={Nuravgram} />
        <City name="Shekharvati" desc={JSON.stringify(cities.Shekharvati?.Description)} dis={JSON.stringify(cities.Shekharvati?.Distance)} img={Shekharvati} />
        <City name="Yapkashnagar" desc={JSON.stringify(cities.Yapkashnagar?.Description)} dis={JSON.stringify(cities.Yapkashnagar?.Distance)}  img={Yapkashnagar} />

        <div  className=" mt-9 ml-6 bg-black text-red-600 hover:text-green-600 flex-grow flex justify-center items-center rounded-3xl"
            onClick={() => {
                toast.info("LETS MEET COP! ");
              navigate("/play");
            }}>
              Lets Meet our Cops 
        </div>

      </div>
    </div>
    </div>
  );
}
