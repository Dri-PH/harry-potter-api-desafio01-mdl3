import styled from 'styled-components'

export const Container = styled.section`
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    border:solid 1px;
    background: rgb(47,8,2);
    background: linear-gradient(48deg, 
        rgba(47,8,2,1) 0%, 
        rgba(115,43,13,0.9920343137254902) 27%, 
        rgba(82,41,6,1) 49%, 
        rgba(92,45,9,1) 67%, 
        rgba(19,0,0,1) 100%);
    box-shadow: inset -9px -9px 9px rgba(0, 0, 0, 0.3),
    inset 9px 9px 9px rgba(0, 0, 0, 0.3);
    img{
        width:5vw;
    }
`;