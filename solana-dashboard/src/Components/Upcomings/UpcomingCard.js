import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Countdown from "../BaseComponents/Countdown";

const CardWrapper = styled.div`
    width : 16vw ; 
    display : flex ;
    flex-direction: column ;
    align-items: center ;
    justify-content: center ;
    background-color: rgb(62,67,76);
    border-radius: 5px;
    padding : 8px ;
`

const NFTImage = styled.div`

    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    margin-bottom: 16px ;
    width : 15vw ;
    height: 240px;
`

const InfoContainer = styled.div`
    width: 15vw;
    display : flex;
    flex-direction: column ;
    color : #DBD8E3 ;
`

const UpcomingCard = (props) => {

    const CountDownConstant = (new Date(props.releaseDate).getTime() - Date.now()) / 1000 ;

    return (
        <CardWrapper>
            <NFTImage image={props.backgroundImage} />
            <InfoContainer>
                <span style={{ marginRight: "auto", fontFamily: "'Cabin', sans-serif", fontSize : "22px", marginBottom : "8px" }}>{props.title}</span>
                <span style={{marginBottom : "4px",fontFamily: "'Cabin', sans-serif", fontSize : "18px",}}>Price : {props.solPrice} SOL</span>
                <span style={{marginBottom : "4px"}}>Supply : {props.supply}</span>
                <div style={{marginBottom : "4px"}}>Release in <Countdown countDownTo={CountDownConstant}/></div>
            </InfoContainer>

        </CardWrapper>
    )
}

export default UpcomingCard;