import React,{useEffect} from 'react';
import "../App.css";
import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from "../media/IMG_0554.webp"
import MyPDF from '../media/Rayan-Souici-CV.pdf';

const Presentation = () => {

    useEffect(() => {
        AOS.init();
      }, [])
    
    return(
        <section id="Presentation">
        <div>
        <h1>SOUICI Rayan</h1>
        <h2>Dèveloppeur Full-Stack</h2>
        <h5>20 ans</h5>   
        <h5>06 89 08 24 08</h5>  
        <h5>Lyon</h5>    
        <img  src={image} alt="moi"/>

        <div class="button">
            <a href={MyPDF} target='_black' download> Télécharger CV</a>
        </div>
        </div>

        <div>
            <h4>Lorem Ipsum is simply dummy text of the printing</h4>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
        a galley of type and scrambled it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was 
        popularised in the 1960s with the release of 
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
        </p>
        </div>
    </section>
    )
   
} 

export default  Presentation;