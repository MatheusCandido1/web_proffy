import React from 'react';


import Input from '../../components/Input';

import brandImg from '../../assets/images/logo.svg'

import './style.css';

function Login() {
    return(
        <div id="login-page">
            <div id="brand-rectangle">
                <div className="logo-container">
                    <img src={brandImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
            </div>

            <div id="form-rectangle">
                <div className="login-form">
                    <h2>Fazer login</h2>
                </div>

                <div className="input-container">
                <Input 
                    name="email"
                    label="" 
                    placeholder="E-mail"
                />
                <Input 
                    name="password"
                    label="" 
                    placeholder="Senha"
                />
                </div>

                <div className="options-container">

                </div>
            </div>

        </div>
    )
}

export default Login;
