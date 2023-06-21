import React,{useEffect} from 'react';
import "../App.css";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Parcours = () => {

    useEffect(() => {
        AOS.init();
      }, [])
    
    return(
        <section id="parcours">
        <h3>Parcours</h3>
        
        <div>

            <div className="timeline">
                <div
                className="aos-item" 
            data-aos="fade-left"
            data-aos-offset="0"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-once="false">
                    <h4>Web@cademie</h4>
                    <h6>2022-2024</h6>
                    <p>Obtention d'un Bac S specialité SVT, J'ai pu acquerir durant cette année d'études, la capacité à solutionner rapidement à des problémes posés, grace a une méthodologie rigoureuse.  </p>
                </div>
            </div>

            <div className="timeline">
                <div className="aos-item" 
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-once="false">
                    <h4>Formation Simplon</h4>
                    <h6>2021-2022</h6>
                    <p>Durant ma premiére année de faculté j'ai pu acquérir une capacité accrue d'analyse scientifique grace aux différentes experiences que nous avons effectué sur des cellules animales et végétales.</p>
                </div>
            </div>

            <div className="timeline">
                <div
                className="aos-item" 
            data-aos="fade-left"
            data-aos-offset="0"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-once="false">
                    <h4>Formation Simplon</h4>
                    <h6>2021-2022</h6>
                    <p>Obtention d'un Bac S specialité SVT, J'ai pu acquerir durant cette année d'études, la capacité à solutionner rapidement à des problémes posés, grace a une méthodologie rigoureuse.  </p>
                </div>
            </div>

            <div className="timeline">
                <div className="aos-item" 
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-once="false">
                    <h4>L1 SVT - Hanna Arendt</h4>
                    <h6>2020-2021</h6>
                    <p>Durant ma premiére année de faculté j'ai pu acquérir une capacité accrue d'analyse scientifique grace aux différentes experiences que nous avons effectué sur des cellules animales et végétales.</p>
                </div>
            </div>
        
            <div className="timeline">
                <div
                className="aos-item" 
            data-aos="fade-left"
            data-aos-offset="0"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-once="false">
                    <h4>Bac S - Marguerite de Valois</h4>
                    <h6>2019-2020</h6>
                    <p>Obtention d'un Bac S specialité SVT, J'ai pu acquerir durant cette année d'études, la capacité à solutionner rapidement à des problémes posés, grace a une méthodologie rigoureuse.  </p>
                </div>
            </div>
        
            <div className="timeline">
                <div
                className="aos-item" 
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-once="false">
                    <h4>Stage d'observation - LEROY-SOMER</h4>
                    <h6>f.2016-f.2016</h6>
                    <p>Stage d'observation sur un poste technique de montage de frein pour ascenceur.</p>
                </div>
            </div>
        </div>
    </section>
    )
   
} 

export default  Parcours;
