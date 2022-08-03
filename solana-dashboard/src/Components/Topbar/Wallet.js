import React from "react";
import styled from "styled-components"

const ConnectWallet = styled.button`
    background-color: transparent;
    border: 1px solid #4D4AE8;
    border-radius: 1rem;
    box-sizing: border-box;
    color: #4D4AE8;
    cursor: pointer;
    margin: 0.5em;
    padding: 1em 2em;
    transition: 0.25s;
    &:hover,
    &:focus {
        color: rgb(0, 255, 163) ;
        border : 1px solid rgb(0, 255, 163) ;
    }
    margin-left : auto ;
`

const Wallet = () => {
    return (
        <ConnectWallet>
            Connect Wallet
        </ConnectWallet>
    )
}

export default Wallet ;