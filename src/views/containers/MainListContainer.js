import React, {useEffect} from 'react'
import styled from 'styled-components';
import GridList from "../components/PhotoList/GridList";
import PhotoItem from "../components/Items/PhotoItem";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/photos/redux";
import {CLIENT_ID} from "../../constants";


const MainListContainer = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.photos.list);

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

    const renderItem = (item) => <PhotoItem item={item}/>;
    return (
        <Container>
            <GridList data={[]}
                      renderItem={renderItem}
            />
        </Container>
    )
}

const Container = styled.div`

`;

export default MainListContainer;