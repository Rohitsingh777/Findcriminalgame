export default function City(props) {
  return (
    <div
      className=" bg-green-300 text-white sm:w-1/3 sm:h-52  w-full  h-48 bg-cover  justify-center items-center  bg-opacity-55 Onecity"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div className=" w-full h-1/5 flex text-center justify-center items-center bg-teal-300 opacity-80">
        <span className=" font-bold text-slate-700 bg-white ">
          {props.name}
        </span>
      </div>
      <div className=" w-full h-1/2 flex text-center justify-center items-center opacity-50 bg-white">
        <span className=" font-bold text-slate-900">{props.desc}</span>
      </div>
      <div className=" w-full h-1/5 flex text-center justify-center items-center opacity-50">
        <span className=" font-bold text-slate-600 bg-white">
          {" "}
          Distance from Camp :{" "}
        </span>

        <span className=" font-bold text-slate-600 bg-white"> {props.dis}</span>
      </div>
    </div>
  );
}
