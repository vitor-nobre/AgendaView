import React from 'react'
import { Link } from 'react-router-dom'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'

import './styles.css'

function Landing() {

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <h2>Sua agenda de contatos.</h2>
                </div>
                <div className="buttons-container">
                    <Link to="/contatos" className="contatos">
                        <img src={studyIcon} alt="Contatos" />
                        Contatos
                    </Link>
                    <Link to="/criarContato" className="give-classes">
                        <img src={giveClassesIcon} alt="Novo Contato" />
                        Novo Contato
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing