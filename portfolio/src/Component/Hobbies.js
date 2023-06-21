import React,{useEffect} from 'react';
import "../App.css";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hobbies = () => {

    useEffect(() => {
        AOS.init();
      }, [])
    
    return(
        <section id="Hobbies"
    class="aos-item" 
            data-aos="fade-down-right"
            data-aos-offset="0"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-once="true">
        <h3>Programmation</h3>
        <div>

            <div className="bar"><img src="" alt="html-icon"/> HTML</div>
               

                <div className="bar"><img src="" alt="css-icon"/> CSS</div>
             

                <div className="bar"><img src="" alt="PHP-icon"/> PHP</div>

                <div className="bar"><img src="" alt="javascript-icon"/> Javascript</div>

        
        </div>        
    </section>
    )
   
} 

export default  Hobbies;