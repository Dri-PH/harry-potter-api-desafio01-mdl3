import styled from 'styled-components'
import BG from "../../images/harrypotterwallpaper.jpg";

export const Container = styled.section`
    background: url(${BG});
    background-size: cover;
    height: 20vh;
    display: flex;
    align-items: end;
    justify-content: center;
    background-size: cover;
    border-bottom:solid 1px;
    ul{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width:90vw;
        height: 5vh;
        border-radius: 5px;
        background: linear-gradient(90deg, 
            rgba(102,102,102,0.0984768907563025) 0%, 
            rgba(255,255,255,0.2861519607843137) 43%, 
            rgba(129,129,129,0.165703781512605) 100%);
    }
    a{
        text-decoration:none;
        border: 1px solid rgba(164,149,230,0.639093137254902);
        width:20%;
        font-size:1.5rem;
        text-align:center;
        color:white;
        &:hover{
            background: linear-gradient(120deg, 
                rgba(159,121,14,0.7763480392156863) 0%, 
                rgba(227,187,76,0.639093137254902) 35%, 
                rgba(96,23,194,0.5802696078431373) 100%);
        }
    }
`;
