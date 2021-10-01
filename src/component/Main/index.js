import React, { useState, useEffect } from 'react'

import * as S from "./style.js"
import GlobalStyles from "./GlobalStyle.js"
import { api } from '../../services/api'



export function Main(){

    const [list,setList] = useState([])

    useEffect(() => {
        api.get()
        .then(response => setList(response.data))
        console.log(api.get())
    }, [])

    return(
        <S.Container>
            <GlobalStyles/>
            <S.ScrowBox>
                {list.map((item,index) => (
                    <div key={index}>
                        <ul>
                            <S.BGcontainer>
                                <S.ScrowItens src={item.image} alt=""/>
                                <li>{item.name}</li>
                            </S.BGcontainer>
                        </ul>
                    </div>
                ))}
            </S.ScrowBox>
        </S.Container>
    )
}