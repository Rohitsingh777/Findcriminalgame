
export default function Cop(props){


    return(
        <div className=" bg-green-300 text-white w-1/3 h-1/2 bg-cover  justify-center items-center  bg-opacity-55  bg-center Onecop" style={{backgroundImage : `url(${props.img})` ,}}>

        <div className=" w-full h-1/5 flex text-center justify-center items-center bg-teal-300 opacity-80" >
        <span className=" font-bold text-slate-600 bg-white ">{props.name}</span>

        </div>
       
        </div>
    )

}