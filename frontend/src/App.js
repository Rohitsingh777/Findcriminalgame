import React, { useEffect, useState } from "react";
import axios from 'axios';
import Main from "./Components/Main";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Startscreen from "./Components/Screens/Start";
import { RecoilRoot } from "recoil";
import Introscreen from "./Components/Screens/Intro";
import Cluescreen from "./Components/Screens/Clue";
import Cityscreen from "./Components/Screens/Cities";
import Copplayscreen from "./Components/Screens/Playcop";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Selectcity from "./Components/Screens/Selectcity";
import Selectvehicle from "./Components/Screens/Selectvehicle";
import Findcriminal from "./Components/Screens/Traveltime";
import Winnerscreen from "./Components/Screens/Winner";
import Nuravgram from "./Images/bg/gamebg.jpeg";

function App() {
 

  
  return (
    <RecoilRoot>
    <div className="  w-scree min-h-screen bg-black flex justify-center align-middle items-center bg-center bg-cover" 
      style={{ backgroundImage: `url(${Nuravgram})`}}>
    <Main/>
    <Router>
    <Routes>
    <Route path={"/"} element={<Startscreen />} />
    <Route path={"/intro"} element={<Introscreen />} />
    <Route path={"/clue"} element={<Cluescreen/>} />
    <Route path={"/cities"} element={<Cityscreen/>} />
    <Route path={"/play"} element={<Copplayscreen/>} />
    <Route path={"/cityselection"} element={<Selectcity/>} />
    <Route path={"/selectvehicle"} element={<Selectvehicle/>} />
    <Route path={"/travel"} element={<Findcriminal/>} />
    <Route path={"/winner"} element={<Winnerscreen/>} />
    
    </Routes>
   
  </Router>
 
  <ToastContainer
position="bottom-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>

    </div>
    </RecoilRoot>
  );
}

export default App;
