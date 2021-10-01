import styled from 'styled-components'

import BG from "../../images/textura1.jpg";
import BGMain from "../../images/Sebo.jpg";

export const Container = styled.section`
    background: url(${BGMain});
    background-size: cover;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const ScrowBox = styled.div`

    height: 90%;
    display: flex;
    overflow-x: auto;
    &::-webkit-scrollbar {
    background: none;
    }
    &::-webkit-scrollbar-thumb {
        -webkit-appearance: none;
        background: linear-gradient(90deg, 
            rgba(2,0,36,0.5270483193277311) 0%, 
            rgba(121,56,9,0.6783088235294117) 35%, 
            rgba(15,2,32,0.4962359943977591) 100%);
        border: 1px solid rgba(213, 206, 206, 0.7411659663865546);
    }
    ul {
        position: relative;
    }
`;
export const BGcontainer = styled.div`
    background: url(${BG});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    border: solid rgba(115, 84, 17, 0.5158438375350141);;
    box-shadow: 6px 50px 60px black;
    margin:5px;
    color:white;
    list-style-type:none;
    &:hover {
        width:0 auto;
        height:25em;
    }
`;
export const ScrowItens = styled.img`
    width: 0 auto;
    height: 23em;
    margin-left: 2.5px;
    margin-right: 2.5px;
`;