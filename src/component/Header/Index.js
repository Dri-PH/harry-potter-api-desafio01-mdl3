import React from 'react'
import { Link } from 'gatsby'
import * as S from "./style.js"
import GlobalStyles from "./GlobalStyle.js"



export function Header(){
    return(
        <S.Container>
            <GlobalStyles />
            <S.NavigationBar>
                <ul>
                    <li>
                        <Link to="#">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/Sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="#">Contatos</Link>
                    </li>
                </ul>
            </S.NavigationBar>
        </S.Container>
    )
}