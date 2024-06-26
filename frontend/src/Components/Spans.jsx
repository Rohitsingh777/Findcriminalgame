
export default function Spans(props) {

    const ARR =  props.text.split('') ; 
    console.log(ARR)
    return (
        <div className=" w-full justify-center  flex item-center ">
            {ARR.map((char , index )=>{
                if (char === ' '){
                    return (
                        <span key={index} className=" text-black hover:text-red-600 text-pretty font-serif font-extrabold inline-block text-4xl SPANCHAR" style={{hover: 'color:red'}}>&nbsp;</span>
                    )
                }
                return (
                    <span key={index} className=" text-black  hover:text-red-600 text-pretty font-serif font-extrabold inline-block   SPANCHAR" style={{hover: 'color:red'}}>{char}</span>
                )
            })}
        </div>
    )
}