import React from 'react';
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const Space = () => {

    const navigate = useNavigate()


    
    function Blackhole(){

        navigate("/Portfolio");
    }
    
    return(
        <div className="space">
            <div className='blackhole'>
                <div className='hole'></div>
            </div>
            <FontAwesomeIcon icon={faShuttleSpace} beatFade style={{color: "#ffffff",}} size='2xl' onClick={() => Blackhole()}/>
        </div>
    )
   
} 

export default Space;