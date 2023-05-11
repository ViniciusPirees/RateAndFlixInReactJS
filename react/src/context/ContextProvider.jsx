import { createContext, useContext, useState } from "react";

const StateContext = createContext({ /* Cria os atributos do contexto StateContext*/
    usuario: null,
    token: null,
    setUsuario: () => {},
    setToken: () => {}
})

export const ContextProvider = ({children}) => {
    const [usuario, setUsuario] = useState({});
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN")); {/*Valor padrao será pego do localstorage se tiver+*/}

    const setToken = (token) => {
        _setToken(token)
        if (token) { {/*Se o token existir, irá salvar no localStorage do browser, caso autenticado*/}
            localStorage.setItem("ACCESS_TOKEN", token); 
            console.log(token,"1")
        } else {
            localStorage.removeItem("ACCESS_TOKEN"); {/* Caso n tenha remove do localstorage o token */}
            console.log(token, "2")
        }
    } 
    return (
        <StateContext.Provider value={{ /* Provider irá adicionar ao statecontext os valores, sempre atualizado */
            usuario,
            token,
            setUsuario,
            setToken,
            
        }}> {/*Um só é para o React, Dois colchetes pois o valor é um objeto*/}
        {children} {/* */}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext); {/* https://react.dev/reference/react/useContext */}