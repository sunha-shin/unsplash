import React, {useEffect, useState} from 'react'
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
    const category = match.params.category;
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    const {photos, collections, users, related_searches} = useSelector(state => state.search);

    useEffect(() => {
        searchPhotos();
    }, [query])

    useEffect(() => {
        setPage(1);
    }, [category])

    useEffect(() => {
        if (page > 1) {
            searchPhotosMore();
        }
    }, [page])

    const searchPhotos = () => {
        dispatch(Action.Creators.searchPhotos({
            query,
            client_id: CLIENT_ID
        }))
    };

    const searchPhotosMore = () => {
        dispatch(Action.Creators.searchPhotosMore({
            query,
            client_id: CLIENT_ID,
            page
        }, category))
    };


    const renderCollectionItem = (item) => <CollectionItem item={item}/>
    const renderUserItem = (item) => <UserItem item={item}/>

    const nextPhotos = () => {
        setPage(p => p + 1);
    };


    return (
        <Container>
            <ContentContainer>

                <SearchLnb/>
                {/* imported SearchLnb here to use match */}
                <SearchHead query={query} related_searches={related_searches}/>

                <Route exact path={'/search/photos/:query'}>
                    <MasonryList
                        data={photos.results}
                        next={nextPhotos}
                    />
                </Route>

                <Route exact path={'/search/collections/:query'}>
                    <GridList data={collections.results}
                              renderItem={renderCollectionItem}
                              next={nextPhotos}
                    />
                </Route>

                <Route exact path={'/search/users/:query'}>
                    <GridList data={users.results}
                              renderItem={renderUserItem}
                              next={nextPhotos}
                    />
                </Route>

            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`;

export default withRouter(SearchContainer);