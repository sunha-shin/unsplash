import React from 'react'
import styled from 'styled-components';
import {Route, Switch} from 'react-router-dom';
import Home from "./views/components/pages/Home";
import Search from "./views/components/pages/Search";

const App = () => {
    return (
        <Container>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/search/photos/:query'} component={Search}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`

`;

export default App;