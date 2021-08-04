import React from 'react'
import styled from 'styled-components';
import Visual from "../components/Home/Visual";
import MainListContainer from "../containers/MainListContainer";

function Home() {
    
    return (
        <Container>
            <Visual/>
            <MainListContainer/>
        </Container>
    )
}


const Container = styled.div`
    
`;

export default Home;