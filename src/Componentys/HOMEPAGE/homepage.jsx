import React from "react";
import "./homepage.css";
import man from "./man.png";
import keyb from "./keyboard.png";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Navbar from "../NAVBAR/navbar";
const Homepage = () => {
  const navigate=useNavigate();
  return (
    <div className="home-out">
      <Navbar></Navbar>
      <div className="welcome-content">
        <div className="welcome">

          <h1 className="welcomemsg">Quiz o Mania</h1>
          <p>
            Thank you for visiting. Explore and enjoy the content. If you have
            any questions or feedback, feel free to reach out. Have a wonderful
            time!
          </p>
        <Button sx={{marginTop:"15px"}} onClick={()=>
        {
          navigate('/quiz');
        }
        }variant="contained" className="submitbt">START QUIZ</Button>
        <br></br>
        <img className="keyb" src={keyb} />
        </div>
        <img className="imageman" src={man} />
      </div>
    </div>
  );
};

export default Homepage;
