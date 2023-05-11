import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import Navbar from "./global/navbar";

export default function LayoutPadrao() { 
    
    const { usuario, token } = useStateContext() /* Pega os valores contexto da ContextProvider*/
    if (!token) { /*Caso n tenha token, irá voltar para a tela de login */
        return <Navigate to="/login" />
    }

    return (   
        <div>
            <Navbar />
            <Outlet/>
        </div>
    )

}