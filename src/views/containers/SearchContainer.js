import React, {useEffect} from 'react'
import styled from 'styled-components';
import {Route, withRouter} from "react-router-dom";
import MasonryList from "../components/PhotoList/MasonryList";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/search/redux";
import {CLIENT_ID} from "../../constants";
import SearchLnb from "../components/Header/SearchLnb";
import SearchHead from "../components/Search/SearchHead";
import {ContentContainer} from "../components/Layout/Layout.Styled";
import GridList from "../components/PhotoList/GridList";
import CollectionItem from "../components/Items/CollectionItem";
import UserItem from "../components/Items/UserItem";

const SearchContainer = ({match}) => {

    const query = match.params.query;
    const dispatch = useDispatch();

    const {photos, collections, users, related_searches} = useSelector(state => state.search);

    useEffect(() => {
        searchPhotos();
    }, [query])

    const searchPhotos = () => {
        dispatch(Action.Creators.searchPhotos({
            query,
            client_id: CLIENT_ID
        }))
    };

    //const renderPhotos = () => <MasonryList data={photos.results}/>

    const renderCollectionItem = (item) => <CollectionItem item={item}/>
    const renderUserItem = (item) => <UserItem item={item}/>

    return (
        <Container>
            <ContentContainer>

                <SearchLnb/>
                <SearchHead query={query} related_searches={related_searches}/>

                <Route exact path={'/search/photos/:query'}>
                    <MasonryList data={photos.results}/>
                </Route>

                <Route exact path={'/search/collections/:query'}>
                    <GridList data={collections.results}
                              renderItem={renderCollectionItem}/>
                </Route>

                <Route exact path={'/search/users/:query'}>
                    <GridList data={users.results}
                              renderItem={renderUserItem}/>
                </Route>

            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`;

export default withRouter(SearchContainer);