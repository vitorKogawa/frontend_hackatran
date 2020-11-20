import React from 'react'
import './style.css'

//importando logo do E-Tran
import logo_etran from '../../assets/logo_etran.png'

//importando componentes
import WelcomeLabel from '../../components/WelcomeLabel/WelcomeLabel'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'

const Welcome: React.FC = () => {
    return(
        <div className="container-welcome">
            <div className="container-logo">
                <img
                    src={logo_etran} 
                    alt="Logo E-Tran"
                />
            </div>
            <div className="content">
                <p>
                    <span>Olá,</span>
                    <WelcomeLabel text="Danilo Nogueira"/>
                </p>
                <ButtonPrimary label="Iniciar Quiz"/>
            </div>
        </div>
    )
}

export default Welcome