import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import brandImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg';
import lessonIcon from '../../assets/images/icons/give-classes.svg';
import heartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';
import api from '../../services/api';

function Landing(){

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;
            setTotalConnections(total);
        })
    }, []);

    return (
    <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={brandImg} alt="Proffy"/>
                <h2>Sua plataforma de estudos online.</h2>
            </div>
            <img 
                className="hero-image"
                src={landingImg}
                alt="Landing"
            />

         <div className="buttons-container">
             <Link to="/study" className="study">
                <img src={studyIcon} alt="Estudar"/>
                Estudar
             </Link>

             <Link to="/give-classes" className="give-classes">
                <img src={lessonIcon} alt="Dar aulas"/>
                Dar aulas
             </Link>
         </div>

         <span className="total-connections">
             Total de {totalConnections} conexões já realizadas <img src={heartIcon} alt="Coração Roxo"/>
         </span>
        </div>
    </div>
    )
}

export default Landing;