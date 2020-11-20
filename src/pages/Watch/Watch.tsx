import React from 'react'

//importado estilização
import './style.css'

//importando logo do E-Tran
import logo_etran from '../../assets/logo_etran.png'

//importando componentes
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'

/**
 * botão de próximo aparecer somente quando o vídeo acabar
 * 
 */

const Watch: React.FC = () => {
    return(
        <div className="container-watch">
            <div className="container-video">
                <VideoPlayer videoId="eih1iheQiAY"/>
            </div>
            <div className="content">
                <div className="header">
                    <img 
                        src={logo_etran} 
                        alt="Logo E-Tran"
                    />
                </div>
                <div className="main">
                    <p>Assista</p>
                </div>
                <div className="footer">
                    <ButtonPrimary label="Próximo"/>
                </div>
            </div>
        </div>
    )
}

export default Watch