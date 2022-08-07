import styled from "styled-components";
import React from "react";
import Info from "./Info";
import Scroll from "./Scroll";
import SerachBar from "./SearchBar";
import Wallet from "./Wallet";
import { style } from "@mui/system";

const Main = styled.div`
    display : flex;
    flex-direction: row;
    justify-content: space-between;
`

const Top = styled(Main)`
    width : 90vw ;
    //height: 70px ;
    margin : auto ;
    margin-bottom: 3vh;
`

const WideFlex = styled(Main)`
    flex-grow : 3 ;
`

const NarrowFlex = styled(Main)`
    flex-grow : 1 ;
`

const MiddleFlex = styled(Main)`
    flex-grow : 2 ;
`

const Topbar = () => {
    return (
        <Top>
            <MiddleFlex>
                <Info />
            </MiddleFlex>

            <WideFlex>
                <SerachBar />
                <Scroll />
            </WideFlex>

            <NarrowFlex>
                <Wallet />
            </NarrowFlex>

        </Top>
    )
}

export default Topbar;