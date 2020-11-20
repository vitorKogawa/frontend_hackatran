import React, { InputHTMLAttributes } from 'react'
import './style.css'

interface INPUT extends InputHTMLAttributes<HTMLInputElement>{
    type: string,
    id: string,
    name: string,
    label: string
}

const Input: React.FC<INPUT> = ({
    type,
    id,
    name,
    label,
    ...rest
}) =>{
    return (
        <div className="container-input">
            <label>{label}</label>
            <input
                type={type}
                name={name}
                id={id}
                {...rest}
            />
        </div>
    )
}

export default Input