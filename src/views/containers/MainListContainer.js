import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/photos/redux";
import {CLIENT_ID} from "../../constants";
import {ContentContainer} from "../components/shared/Layout/Layout.Styled";
import MasonryList from "../components/shared/PhotoList/MasonryList";

const MainListContainer = () => {

    const dispatch = useDispatch();
    const list = useSelector(state => state.photos.list);
    const [page, setPage] = useState(1);
    // const [inView, sentinelRef] = useIntersection();

    useEffect(() => {
        getPhotos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])


    const getPhotos = () => {
        dispatch(Action.Creators.getPhotos({
            client_id: CLIENT_ID,
            page,
            per_page: 10
        }))
    };

    const next = () => {
        setPage(p => p + 1)
    };

    return (
        <Container>
            <ContentContainer>
                <MasonryList
                    data={list}
                    next={next}
                />
            </ContentContainer>
        </Container>
    )
}


const Container = styled.div`

`;

export default MainListContainer;