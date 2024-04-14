import { useNavigate } from "react-router-dom";

export default function Introscreen() {
  const navigate = useNavigate();

  return (
    <div className="h-3/4 w-3/4 bg-red-400 justify-center items-center flex sm:bg-green-500">

      <div className=" font-mono">
        <div> # In this game You are supposed to catch a criminal  </div>

        <div> # Choose a city based on the clue   </div>
        <div>
          
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
