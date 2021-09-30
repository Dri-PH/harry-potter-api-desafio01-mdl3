import React, { useState, useEffect } from 'react'
import GlobalStyles from "../GlobalStyle.js"
import * as S from "./style.js"
import { api } from '../../services/api'


export function Main(){

    const [list,setList] = useState([])

    useEffect(() => {
        api.get()
        .then(response => setList(response.data))
        console.log(api.get())
    }, [])

    return(
        <div>
            <GlobalStyles/>
            {list.map((item,index) => (
                <div key={index}>
                    <ul>
                        <img src={item.image} alt=""/>
                        <li>{item.name}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}