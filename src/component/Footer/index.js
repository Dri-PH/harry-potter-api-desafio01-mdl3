import React from 'react'
import * as S from "./style.js"
import GlobalStyles from "./GlobalStyle.js"
import PNG from "../../images/varinha.png";
import PNG2 from "../../images/brasao.png";
import PNG3 from "../../images/reliquia.png";

export function Footer(){
    return(
        <S.Container>
            <GlobalStyles />
            <img src={PNG} alt="" />
            <img src={PNG2} alt="" />
            <img src={PNG3} alt="" />
        </S.Container>
    )
}