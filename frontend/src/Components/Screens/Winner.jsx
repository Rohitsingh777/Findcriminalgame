import { useRecoilState } from 'recoil';
import cop1 from '../../Images/cops/cop1.png';
import cop2 from '../../Images/cops/cop2.png';
import cop3 from '../../Images/cops/cop3.png';
import { Copstate } from '../../Store/cop';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Winnerscreen(){
    const [cop , usecop] =useRecoilState(Copstate)
    const navigate = useNavigate() ;
    const Namear = ["JOHN","SITA","Li"] ; 
    const name = Namear[cop-1] ; 
    let copimg = cop1 ;
    console.log(`the winner cop is ${cop}`)

    function handleclick(){
        toast.info("LET PLAY AGAIN ");
          navigate("/");
          window.location.reload() 
        }


    if (cop === 1 ){
          copimg = cop1
    }else if(cop === 2 ){
         copimg = cop2 
    }
    else if (cop === 3 ){
          copimg = cop3 ;
    }
    

    return(
        <div className=" w-screen sm:h-screen h-3/4 bg-blue-500 bg-cover opacity-85 backdrop-blur-2xl onecop" style={{ backgroundImage: `url(${copimg})`}}>
        
        <div className=' w-full sm:h-1/4  h-16 flex justify-center items-center align-middle mb-3'>
        <h1 className=' font-serif sm:text-6xl text-lg font-bold text-yellow-300' >WINNER : {name}</h1>
        </div>


        <div className=' w-full sm:h-1/4 h-3  flex justify-center items-center opacity-85'>
        <h1 className=' font-serif sm:text-3xl font-bold text-red-600 sm:w-1/3 w-full bg-slate-400' > I have captured the fugitive with your help  </h1>
        </div>
        
        <div className=' w-full h-1/4 flex justify-center items-center opacity-85'>
        <h1 className=' font-serif sm:text-3xl  text-lg font-bold text-black-600 w-full sm:w-1/3 bg-slate-400' >THANK YOU FOR YOUR HELP  </h1>
        </div>


        <div className=' w-full h-1/3 flex justify-center items-center opacity-85'>
        <div  className=" mt-9 ml-6 mr-6 bg-yellow-300 text-red-600 hover:text-green-600 flex justify-center items-center rounded-4xl  w-3/4 h-full text-2xl opacity-85 hover:font-bold hover:bg-white"
             onClick={handleclick}>
             Lets do that again 
        </div>
        </div>


        </div>
    )







    // return(
    //     <div className=" w-screen h-screen bg-blue-500 bg-cover opacity-85 backdrop-blur-2xl onecop" style={{ backgroundImage: `url(${copimg})`}}>
        
    //     <div className=' w-full h-1/4 flex justify-center items-center'>
    //     <h1 className=' font-serif text-6xl font-bold text-yellow-300 bg-red-800' >WINNER : {name}</h1>
    //     </div>


    //     <div className=' w-full h-1/4 flex justify-center items-center opacity-85'>
    //     <h1 className=' font-serif text-3xl font-bold text-red-600 w-1/3  bg-slate-400' >
    //     I have captured the fugitive with your help  </h1>
    //     </div>
        
    //     <div className=' w-full h-1/4 flex justify-center items-center opacity-85'>
    //     <h1 className=' font-serif text-3xl font-bold text-black-600 w-1/3 bg-slate-400' > THANK YOU FOR YOUR HELP  </h1>
    //     </div>

    //     <div  className=" mt-9 ml-6 bg-yellow-300 text-red-600 hover:text-green-600 flex justify-center items-center rounded-4xl  w-full h-1/6 text-2xl opacity-85 hover:font-bold hover:bg-white"
    //         onClick={handleclick}>
    //        Lets do that again 
    //     </div>


    //     </div>
    // )



}