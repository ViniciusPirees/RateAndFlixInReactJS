import { createBrowserRouter } from "react-router-dom"
import Login from "./views/Login";
import Cadastro from "./views/Cadastro";
import NaoEncontrado from "./views/NaoEncontrado";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,        
    },
    {
        path: "/cadastro",
        element: <Cadastro />,        
    },
    {
        path: "*",
        element: <NaoEncontrado/>,
    }

]);

export default router;