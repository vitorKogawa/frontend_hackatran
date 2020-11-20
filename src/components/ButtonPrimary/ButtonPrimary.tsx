import React, { ButtonHTMLAttributes } from 'react'
import './style.css'

interface BUTTON extends ButtonHTMLAttributes<HTMLButtonElement>{
    label: string
}

const ButtonPrimary: React.FC<BUTTON> = ({ label }) => {
    return(
        <div className="container-button">
            <button>{label}</button>
        </div>
    )
}

export default ButtonPrimary