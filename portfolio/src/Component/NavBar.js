import React from 'react';
import "../App.css";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const NavBar = () => {

    
    return(
        <div className="">
          <nav className="navbar navbar-expand-sm navbar-light fixed-top ">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#Presentation" className="nav-link">Présentation</a>
                    </li>
                    <li className="nav-item">
                        <a href="#parcours" className="nav-link">Parcours</a>
                    </li>
                    <li className="nav-item">
                        <a href="#competence" className="nav-link">Compétences</a>
                    </li>
                    <li className="nav-item">
                        <a href="#Projects" className="nav-link">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#Hobbies" className="nav-link">Centre d'intêrets</a>
                    </li>
                    <li className="nav-item">
                        <a href="#Coordonne" className="nav-link">Coordonnées</a>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    )
   
} 

export default  NavBar;