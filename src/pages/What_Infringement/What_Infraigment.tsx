import React from 'react'

//importando componentes
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'
import Input from '../../components/Input/Input'

//importando logo etran
import logo_etran from '../../assets/logo_etran.png'

//importando estilização
import './style.css'

const What_Infraigment: React.FC = () => {
    const infraigment = [
        {
            name: 'infração leve',
            value: 'leve'
        },
        {
            name: 'infração média',
            value: 'media'
        },
        {
            name: 'infração grave',
            value: 'grave'
        },
        {
            name: 'infração gravissíma',
            value: 'gravissima'
        }
    ]

    return(
        <div className="container-infracao">
            <div className="header">
                <img 
                    src={logo_etran} 
                    alt="Logo E-Tran"
                />
            </div>
            <div className="main">
             <p className="question-title">Qual foi a sua infração</p>
             <div className="topics-infracao">
                 {
                     infraigment.map(infracao => (
                         <Input 
                            label={infracao.name}
                            type="radio" 
                            name="infracao" 
                            id={infracao.value}
                            value={infracao.value}
                        />
                     ))
                 }
             </div>
            </div>
            <div className="footer">
                <ButtonPrimary label="Começar"/>
            </div>
        </div>
    )
}

export default What_Infraigment