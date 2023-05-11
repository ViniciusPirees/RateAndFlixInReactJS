import { createRef, useState } from "react"
import { Link } from "react-router-dom"
import { useStateContext } from "../context/ContextProvider"
import axiosClient from "../axios-client.js"

export default function Cadastro() { 

    const nomeRef = createRef();
    const emailRef = createRef();
    const senhaRef = createRef();
    const senhaconfirmRef = createRef();
    const {setUsuario, setToken} = useStateContext()    
    const [errors, setErrors] = useState(null)
    
    const onSubmit = ev => {
        ev.preventDefault()

        const payload = {
            name: nomeRef.current.value,
            email: emailRef.current.value,
            password: senhaRef.current.value,
            password_confirmation: senhaconfirmRef.current.value, //password_confirmation
        }

        axiosClient.post("/cadastro", payload)
            .then(({data}) => { 
                setUsuario(data.usuario)
                setToken(data.token);
            }).catch(err => {
                const response = err.response;
                if (response && response.status == 422) {
                    setErrors(response.data.errors)
                }
            })
    }
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Olá! Para continuar, digite as informações abaixo</h1>
                    {errors &&
                        <div className="alert">
                            {Object.keys(errors).map(key => (
                            <p key={key}>{errors[key][0]}</p>
                            ))}
                        </div>
                    }
                    <input ref={nomeRef} placeholder="Nome" />
                    <input ref={emailRef} type="email" placeholder="Email" />
                    <input ref={senhaRef} type="password" placeholder="Senha" />
                    <input ref={senhaconfirmRef} type="password" placeholder="Confirme a senha" />
                    <button className="btn btn-block">Cadastrar</button>
                    <p className="message">Já Registrado? <Link to="/login">Entrar</Link></p>
                </form>
            </div>
        </div>
    )

}