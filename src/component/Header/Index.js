import React from 'react'
import { Link } from 'gatsby'
import GlobalStyles from "../GlobalStyle.js"
import * as S from "./style.js"


export function Header(){
    return(
        <S.Container>
            <GlobalStyles/>
            <nav>
                <ul>
                    <Link to="/Main">Inicio</Link>
                    <Link to="/Sobre">Sobre</Link>
                    <Link to="/Footer">Contatos</Link>
                </ul>
            </nav>
        </S.Container>
    )
}