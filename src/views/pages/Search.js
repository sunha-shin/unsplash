import React from 'react'
import styled from 'styled-components';
import SearchContainer from "../containers/SearchContainer";

function Search({match}) {

    const query = match.params.query;

    return (
        <>
            <Container>
                <SearchContainer/>
            </Container>
        </>
    )
}


const Container = styled.div`

`;

export default Search;