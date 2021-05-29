import React from 'react'
import styled from 'styled-components';


function Search({match}) {

    const query = match.params.query;
    
    return (
        <Container>
            {query}
        </Container>
    )
}


const Container = styled.div`
    
`;

export default Search;