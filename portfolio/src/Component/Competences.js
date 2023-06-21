import React,{useEffect} from 'react';
import "../App.css";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Competences = () => {

    useEffect(() => {
        AOS.init();
      }, [])
    
    return(
        <section id="competence">
            <h3>Programmation</h3>
            <div className='container'>
                <div className="bar">HTML</div>
                <div className="bar">CSS</div>
                <div className="bar">PHP</div>
                <div className="bar">Javascript</div> 
            </div>     
        </section>
    )
   
} 

export default  Competences;

