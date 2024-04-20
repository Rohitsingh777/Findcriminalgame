import { useNavigate } from "react-router-dom";

export default function Introscreen() {
  const navigate = useNavigate();

  return (
    <div className="sm:h-3/4 sm:w-4/5 w-full h-screen   bg-red-400 justify-center items-center flex sm:bg-green-500 ">

      <div className=" font-mono">

      <span className="font-bold underline  text-gray-800 text-3xl  transform rotate-x-2 translate-y-1"> INTRO : </span>
      <br></br>
        <div> # In this game You are supposed to catch a criminal.  </div>

        <div> # Choose a city based on the clue.  </div>
        <div> # The criminal is a psychopath so he leaves a clue at the end of each of his heists.    </div>
        <div> # You are supposed to read the clue and find the criminal based on the note he left behind for you.</div>

        <div className=" flex items-center justify-center">
          
          <button
            className=" mt-9 bg-black text-red-600 rounded-lg min-h-8 min-w-8 hover:text-green-600"
            onClick={() => {
              navigate("/clue");
            }}
          >
           See clue 
          </button>
        </div>
      </div>
    </div>
  );
}
