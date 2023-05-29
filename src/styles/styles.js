import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #404258;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const DivCronometro = styled.div`
    width: 50%;
    height: 50%;
    background-color: #474E68;
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    @media (max-width: 1380px){
        width: 70%;
    }
    @media (max-width: 960px){
        width: 80%;
    }
    @media (max-width: 810px){
        width: 90%;
    }
`
export const Cronometro = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 630px){
        width: 65%;
    }
`
export const SpanPrincipal = styled.span`
    width: 50%;
    height: 50%;
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    span{
        background-color: #6B728E;
        border-radius: 5px;
        width: 100%;
        height: 50%;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 430px){
            font-size: 20px;
        }
        @media (max-width: 330px){
            font-size: 15px;
        }
    }
    @media (max-width: 840px){
        width: 70%;
    }
    @media (max-width: 650px){
        width: 75%;
    }
    @media (max-width: 530px){
        width: 85%;
    }
    @media (max-width: 330px){
        font-size: 20px;
    }
`
export const DivButtons = styled.div`
    width: 50%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    @media (max-width: 530px){
        width: 85%;
    }
`
export const Buttons = styled.button`
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.$start ? '#6D9886' : props.$restart ? '#BC8CF2' : '#BD4B4B'};
    color: #FFFFFF;
    cursor: pointer;
    @media (max-width: 840px){
        width: 200px;
        height: 50px;
    }
    @media (max-width: 330px){
        width: 100px;
        height: 30px;
        font-size: 10px;
    }
`
export const DivHistorico = styled.div`
    width: 20%;
    height: 100%;
    background-color: #50577A;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    justify-content: center;
    ul{
        width: 100%;
        height: auto;
        max-height: 10000000px;
        overflow-y: scroll;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 15px;
        padding: 20px 0;
        list-style: none;

        li{
            width: 80%;
            height: auto;
            padding: 10px 0;
            background-color: #6B728E;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #FFFFFF;
            @media (max-width: 400px){
                font-size: 12px;
            }
        }
    }
    @media (max-width: 650px){
        width: 25%;
    }
    @media (max-width: 630px){
        width: 35%;
    }
`