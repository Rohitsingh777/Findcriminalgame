
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Cluestate } from "../../Store/Clue";
import Criminal from '../../Images/criminal/Criminal.png'
import { toast } from "react-toastify";


export default function Cluescreen() {
  const navigate = useNavigate();
  const [clue ,setclue] = useRecoilState(Cluestate)

  return (
    <div className="sm:h-3/4 sm:w-3/4 bg-red-400 justify-center items-center flex h-5/6 w-full">
      <div className=" font-mono w-3/4 h-3/4 " style={{backgroundImage : `url(${Criminal})`, backgroundSize: 'cover', }}>
        <div className=" bg-slate-400 text-black"> # The criminal sent a note for you</div>
        <div className= " text-gray-500 bg-white sm:mt-7 mt-3 h-1/3 font-serif opacity-60">Hello 
        Mr Whoever, its me again .Gotta get outta this town. <span className=" text-red-500">{clue}</span></div>

        <div>
          <button
            className=" mt-9 bg-black text-red-600 rounded-lg min-h-8 min-w-8 hover:text-green-600"
            onClick={() => {
              toast.dark('Do makeyourself Familiar with these places ')
              navigate("/cities");
            }}
          >
            Get With cops to find him 
          </button>
        </div>
      </div>
    </div>
  );
}
