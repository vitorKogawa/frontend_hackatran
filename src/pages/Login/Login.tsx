import React, { ChangeEvent, FormEvent, useState } from 'react'

//importando componentes
import Input from '../../components/Input/Input'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'

//importando logo
import logo_etran from '../../assets/logo_etran.png'

//importando estilização do site
import './style.css'

const Login: React.FC = () => {
    const [getCpf, setCpf] = useState('')
    const [getPassword, setPassword] = useState('')

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        if(name == 'cpf'){
            setCpf(String(value))
        }else if(name == 'password'){
            setPassword(String(value))
        }
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        const data = {
            cpf: String(getCpf),
            password: String(getPassword)
        }

        console.log(data)
    }
    
    return (
        <div className="container-login">
            <div className="container-logo">
                <img 
                    src={logo_etran} 
                    alt="Logo E-Tran"
                />
            </div>
            <div className="container-form">
                <form onSubmit={handleSubmit}>
                    <h1>Acesse sua conta:</h1>
                       <Input
                            type="number"
                            name="cpf"
                            id="cpf"
                            label="CPF"
                            placeholder="Digite seu CPF"
                            onChange={handleChangeInput}
                       /> 

                    <Input
                        type="password"
                        name="password"
                        id="password"
                        label="SENHA"
                        placeholder="Digite sua Senha"
                        onChange={handleChangeInput}
                    />

                    <ButtonPrimary label="Acessar"/> 
                </form>
            </div>
        </div>
    )
}

export default Login