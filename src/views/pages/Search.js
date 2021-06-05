import React from 'react'
import styled from 'styled-components';
import {Route} from "react-router-dom";
import SearchLnb from "../components/Header/SearchLnb";


function Search({match}) {

    const query = match.params.query;

    return (
        <>
            <Route exact path={'/search/:category/:query'} component={SearchLnb}/>
            <Container>
                <h1>{query}</h1>
            </Container>
        </>
    )
}


const Container = styled.div`

`;

export default Search;