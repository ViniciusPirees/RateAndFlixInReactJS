import React from 'react'
import '../../index.css'
import { Nav, NavBtnLink, Bars, NavBtn, NavLink, NavMenu } from './NavBarElements'
import { Link } from 'react-router-dom'
export default function Navbar({pathname, token}) { 
    if (pathname == "/login" || pathname == "/cadastro") {
        return (
            <div className='logoLogin'>
                <h1><Link to="/">Rate & Flix</Link></h1>
            </div>)
    }
    return (
      <>
        <Nav>
              <NavLink to="/">
                <h1 className='logo'>Rate & Flix</h1>
              </NavLink>      
              <Bars />
              <NavMenu>
                  <NavLink to="/cadastro" activeStyle>
                      NOTÍCIAS
                  </NavLink>  
                  <NavLink to="/" activeStyle>
                      DICAS
                  </NavLink>    
                  <NavLink to="/" activeStyle>
                      FILMES
                  </NavLink>    
                  <NavLink to="/" activeStyle>
                      SOBRE
                  </NavLink>    
                  <NavLink to="/" activeStyle>
                      CONTATO
                </NavLink>         
              </NavMenu>
              <NavBtn>
                  <NavBtnLink to="/">Entrar</NavBtnLink>
              </NavBtn>
        </Nav>
      </>
  )
}
