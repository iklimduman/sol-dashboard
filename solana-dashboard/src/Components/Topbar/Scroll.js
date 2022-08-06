import styled from "styled-components" ;

const ScrollContainer = styled.div`
    display : flex ;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width : 50% ;
    padding : 0 2em ;
`

const ScrollItem = styled.span`
    color : #CECECE ;
    cursor : pointer ;
`

const Scroll = () => {
    return (
        <ScrollContainer>
            <ScrollItem>UPCOMINGS</ScrollItem>
            <ScrollItem>TOP PROFILES</ScrollItem>
            <ScrollItem>TOP COLLECTIONS</ScrollItem>
        </ScrollContainer>
    )
}

export default Scroll ;