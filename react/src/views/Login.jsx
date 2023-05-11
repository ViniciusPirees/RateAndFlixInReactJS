import { createRef, useState } from "react";
import { Link } from "react-router-dom"
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";
export default function Login() { 

    const emailRef = createRef();
    const senhaRef = createRef();
    const {setUsuario, setToken} = useStateContext()    
    const [errors, setErrors] = useState(null)
    const [message, setMessage] = useState(null)

    const onSubmit = (ev) => {
        setErrors(null)
        setMessage(null)
        ev.preventDefault()
        const payload = {
            email: emailRef.current.value,
            password: senhaRef.current.value,
        }
        axiosClient.post("/login", payload, {
            headers: {
                'Accept-Language': 'de'
            }
        })
            .then(({ data }) => { 
                setUsuario(data.usuario)
                setToken(data.token)
                
            }).catch(err => {
                const response = err.response;
                console.log(response)
                if (response && response.status == 422) {
                    setErrors(response.data.errors) //Adicionado resposta a variavel message
                    console.log(response.data.errors)
                    if (response.data.errors == null) {
                        setMessage(response.data.message)
                    }
                }
            }) 
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">   
                <form onSubmit={onSubmit}>
                <h1 className="title">Olá! Para continuar, digite o seu e-mail e senha</h1>
                {errors && //Se existir message/erro irá mostrar a div
                        <div className="alert">
                            {Object.keys(errors).map(key => (
                                <p key={key}>{errors[key][0]}</p>
                            ))}
                    </div>
                    }
                
                    {message &&
                        <div className="alert">
                        <p>{message}</p>
                        </div>
                    }
                    <input ref={emailRef} type="email" placeholder="Email" />
                    <input ref={senhaRef} type="password" placeholder="Senha" />
                    <button className="btn btn-block">Entrar</button>
                    <p className="message">
                        Não Registrado? <Link to="/cadastro">Crie uma Conta</Link>
                    </p>
                </form>
            </div>
        </div>
    )

}