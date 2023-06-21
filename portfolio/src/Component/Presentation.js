import React,{useEffect} from 'react';
import "../App.css";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Presentation = () => {

    useEffect(() => {
        AOS.init();
      }, [])
    
    return(
        <section id="Presentation">
        <h1>SOUICI Rayan</h1>
        <h2>Dèveloppeur Full-Stack</h2>
        <h5>19 ans</h5>   
        <h5>06.89.08.24.08</h5>  
        <h5>Lyon,caluire-et-cuire,69300</h5>   
        <div className='image'></div>   
        <img src="../media/IMG_0554.webp" alt="moi"/>

        <div class="button">
            <a href="../media/Rayan-Souici-CV.pdf"  download="CV_RAYAN_SOUICI"> CV en pdf</a>
        </div>
        
    </section>
    )
   
} 

export default  Presentation;