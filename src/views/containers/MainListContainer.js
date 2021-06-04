import React, {useEffect} from 'react'
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/photos/redux";
import {CLIENT_ID} from "../../constants";
import {ContentContainer} from "../components/Layout/Layout.Styled";
import MasonryList from "../components/PhotoList/MasonryList";

const MainListContainer = () => {

    const dispatch = useDispatch();
    const list = useSelector(state => state.photos.list);

    useEffect(() => {
        getPhotos()
    }, [])

    const getPhotos = () => {
        dispatch(Action.Creators.getPhotos({
            client_id:CLIENT_ID,
            page:1,
            per_page:30
        }))
    };

    //const renderItem = (item) => <PhotoItem item={item}/>;
    return (
        <ContentContainer>
            <MasonryList data={list}/>
        </ContentContainer>
    )
}



const Container = styled.div`

`;

export default MainListContainer;