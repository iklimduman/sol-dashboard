import React from "react";
import styled from "styled-components" ;
import { UpcomingNFTs } from "../../DummyData/DummyData"; 

const CardWrapper = styled.div`
    width : 15vw ; 
    height: 30vh;
    background-image: url(${props => props.backgroundImage});
    display : flex ;
    flex-direction: column ;
    align-items: center ;
    justify-content: center ;

`

const UpcomingCard = (props) => {
    console.log(props.backgroundImage)
    return (
        <CardWrapper background={props.backgroundImage}>
            <span>{props.solPrice}</span>
            <span>{props.supply}</span>
            <span>{props.releaseDate}</span>
        </CardWrapper>
    )
}

export default UpcomingCard;