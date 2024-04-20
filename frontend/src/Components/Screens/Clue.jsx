import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Cluestate } from "../../Store/Clue";
import Criminal from "../../Images/criminal/Criminal.png";
import { toast } from "react-toastify";

export default function Cluescreen() {
  const navigate = useNavigate();
  const [clue, setclue] = useRecoilState(Cluestate);

  return (
    <div className="sm:h-4/5 sm:w-3/4 bg-red-400 justify-center items-center flex h-screen w-full">
      <div
        className=" font-mono bg-cover bg-center sm:h-96 w-full h-screen"
        style={{ backgroundImage: `url(${Criminal})`, backgroundSize: "cover" }}
      >
        <div className=" bg-slate-400 text-black  mb-2 font-bold font-sans text-xl text-center">
      
          The criminal sent a note for you
        </div>
        <div className=" text-gray-500 bg-white sm:mt-7 mt-3 h-1/3 font-serif opacity-80">
          Hello Mr Whoever,
          <br />
          Its me again .Gotta get outta this town.
          <br />
          <span className=" text-2xl text-red-700 text-pretty uppercase  opacity-95">
            {clue}
          </span>
        </div>
        <div className="flex items-center justify-center">
          <button
            className=" animate-bounce mt-9 bg-black text-red-600 rounded-lg min-h-8 min-w-8 hover:text-green-600 font-bold"
            onClick={() => {
              toast.dark("Do makeyourself Familiar with these places ");
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
