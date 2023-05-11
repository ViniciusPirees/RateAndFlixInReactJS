import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from "./router.jsx"
import { ContextProvider } from './context/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider> {/*Necessário ser pai da rota para ver o contexto (se está autenticado ou não
      )*/}
      <RouterProvider router={router} /> {/* Rotas geradas no arquivo Router, irá mostrar na tela */}
    </ContextProvider>
  </React.StrictMode>,
)
