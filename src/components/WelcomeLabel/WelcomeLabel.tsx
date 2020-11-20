import React, { ParamHTMLAttributes } from 'react'
import './style.css'

interface WELCOME_LABEL extends ParamHTMLAttributes<HTMLParagraphElement>{
    text: string;
}

const WelcomeLabel: React.FC<WELCOME_LABEL> = ({
    text,
    ...rest
}) => {
return <p className="welcome-label" {...rest}>{text}</p>
}

export default WelcomeLabel
