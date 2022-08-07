import React from "react";
import styled from "styled-components"

const CardWrapper = styled.div`
    width : 10vw ; 
    height: 20vh;
    background-color : green ;
    display : flex ;
    flex-direction: column ;
    align-items: center ;
    justify-content: center ;

`

const UpcomingCard = () => {
    return (
        <CardWrapper>
            <span>Sol Price</span>
            <span>Supply</span>
            <span>Timer</span>
        </CardWrapper>
    )
}

export default UpcomingCard;