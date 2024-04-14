import { useRecoilState } from 'recoil';
import cop1 from '../../Images/cops/cop1.png';
import cop2 from '../../Images/cops/cop2.png';
import cop3 from '../../Images/cops/cop3.png';
import { Copstate } from '../../Store/cop';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Copplayscreen(){
    const [cop , usecop] =useRecoilState(Copstate)
    const navigate = useNavigate() ;
    const Namear = ["JOHN","SITA","Li"] ; 
    const name = Namear[cop-1] ; 
    let  copimg = cop1 ; 
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
        <h1 className=' font-serif sm:text-6xl text-lg font-bold text-yellow-300' >{name}</h1>
        </div>


        <div className=' w-full sm:h-1/4 h-3  flex justify-center items-center opacity-85'>
        <h1 className=' font-serif sm:text-3xl font-bold text-red-600 sm:w-1/3 w-full bg-slate-400' >My name is 
       <span className=' text-black '> {name} </span> 
        .I have volunteered in capturing the fugitive hiding and I need your help </h1>
        </div>
        
        <div className=' w-full h-1/4 flex justify-center items-center opacity-85'>
        <h1 className=' font-serif sm:text-3xl  text-lg font-bold text-black-600 w-full sm:w-1/3 bg-slate-400' > Can you help me spot where the criminal is from 5 cities </h1>
        </div>


        <div className=' w-full h-1/3 flex justify-center items-center opacity-85'>
        <div  className=" mt-9 ml-6 mr-6 bg-yellow-300 text-red-600 hover:text-green-600 flex justify-center items-center rounded-4xl  w-3/4 h-full text-2xl opacity-85 hover:font-bold hover:bg-white"
            onClick={() => {
            toast.info("CHOOSE A CITY TO GO TO");
              navigate("/cityselection");
            }}>
           LETS CHOOSE A CITY TO GO TO 
        </div>
        </div>


        </div>
    )



}