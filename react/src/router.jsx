import { Navigate, createBrowserRouter } from "react-router-dom"
import Login from "./views/Login";
import Cadastro from "./views/Cadastro";
import NaoEncontrado from "./views/NaoEncontrado";
import LayoutPadrao from "./components/LayoutPadrao";
import LayoutVistante from "./components/LayoutVisitante";
import Perfil from "./views/Perfil";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPadrao />,
        children: [
            {
                path: "/",
                element: <Navigate to="/perfil" />,   
            },
            {        
                path: "/perfil",
                element: <Perfil />,        
            }
        ]
    },
    {
        path: "/",
        element: <LayoutVistante />,
        children: [
            {
                path: "/",
                element: <Navigate to="/login" />,   
            },
            {
                path: "/login",
                element: <Login />,        
            },
            {
                path: "/cadastro",
                element: <Cadastro />,        
            },
        ]
    },
    
    {
        path: "*",
        element: <NaoEncontrado/>,
    }

]);

export default router;