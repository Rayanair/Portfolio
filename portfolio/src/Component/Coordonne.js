import React,{useEffect} from 'react';
import "../App.css";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Coordonne = () => {

    useEffect(() => {
        AOS.init();
      }, [])
    
    return(
        <section id="Coordonne">
        <div>

        </div>
    </section>
    )
   
} 

export default  Coordonne;