import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import Navbar from "./global/navbar";

export default function LayoutVistante() { 
    const location = useLocation();

    const { usuario, token } = useStateContext() /* Pega os valores contexto da ContextProvider*/
    if (token) { /*Caso tenha token, irá voltar para a tela de perfil */
        return <Navigate to="/" />
    }

    return (
        <div>
            <Navbar pathname={location.pathname} token={token}/>
            <Outlet/>
        </div>
    )

}