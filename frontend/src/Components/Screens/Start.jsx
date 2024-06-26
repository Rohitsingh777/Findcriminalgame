import Spans from "../Spans";
import { useNavigate } from "react-router-dom";

export default function Startscreen() {
    const navigate = useNavigate();

    return (
        <div className=" h-3/4 w-3/4 bg-red-800  justify-center items-center flex">
            <div className=" flex justify-center items-center  flex-wrap">
                <Spans text='WELCOME TO '></Spans>
                <Spans text='CRIME CITY'></Spans>
                <Spans text='LETS PLAY'></Spans>
            <div>
                    <button className=" mt-9 bg-black text-red-600 rounded-lg min-h-8 min-w-8 hover:text-green-600" onClick={() => {
                        navigate("/intro");
                    }}>CLICK TO PLAY  </button>
                </div>
            </div>


        </div>)
}