import styled from "@emotion/styled";

const InfoContainer = styled.div`
    display : flex ;
    align-items : center ;
    justify-content: space-between;
    flex-direction : row ;
    width : 100% ;
`

const LogoContainer = styled.div`
    height: 100%;
    flex : 30% ;
    background-image: url("../../Assets/solana-sol-logo.png")  ;
    background-size: cover;
    background-repeat: no-repeat;
    border : 1px solid blue ;
`

const SolInfoContainer = styled.div`
    flex : 70% ;
    display : flex ;
    flex-direction: column;
    box-sizing: border-box;
    padding : 0.5em ;
    font-size: 12px ;
`

const MyPageButton = styled.button`
    width: 40% ;
    background-color : transparent ;
    border: 1px solid #4D4AE8 ;
    border-radius: 0.5rem ;
    color: #4D4AE8 ;
    cursor: pointer ;
    margin: 0.5em ;
    &:hover
    {
        color: rgb(0, 255, 163) ;
        border: 1px solid rgb(0, 255, 163) ;
    }
`

const Info = () => {
    return (
        <InfoContainer>
            <LogoContainer>

            </LogoContainer>

            <SolInfoContainer>
                <span style={{
                    color: "#BAB5BB",
                    fontSize: "12px",
                }}>
                    SOL / TETHERUS = 40.42 USDT, -0.12(-0.30%)
                </span>
                <MyPageButton style={{

                }}>My Page</MyPageButton>

            </SolInfoContainer>

        </InfoContainer >
    )
}

export default Info;