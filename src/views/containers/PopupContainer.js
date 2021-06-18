import React, {useEffect} from 'react'
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import PhotoDetail from "../components/PhotoDetail";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/photos/redux";
import {useLocation} from "react-router-dom";

const PopupContainer = () => {

    const {
        openPhotoPopup,
        photoById,
        photoRelated,
        currentPhotoId
    } = useSelector(state => state.photos);

    // console.log("@@ photoById[currentPhotoId]::", photoById[currentPhotoId])

    const dispatch = useDispatch();
    const location = useLocation();

    if (!openPhotoPopup) return null;

    const onClose = () => {
        window.history.pushState({}, null, location.pathname);
        dispatch(Action.Creators.updateState({
            openPhotoPopup: false
        }))
    };

    return ReactDOM.createPortal(
        <Container>
            <Screen
                className={"PopupScreen"}
                onClick={onClose}/>
            <PopupContents className={"PopupContents"}>
                <Track className={"Track"}>
                    <PhotoDetail photoById={photoById[currentPhotoId]}
                                 photoRelated={photoRelated[currentPhotoId]}
                    />
                </Track>
            </PopupContents>
        </Container>,
        document.getElementById('popup')
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2000;
`;

const Screen = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const PopupContents = styled.div`
  position: relative;
  z-index: 2000;
  height: 100vh;
  max-width: 80vw;
  margin: 0 auto;
`;

const Track = styled.div`
  height: 100%;
  overflow-y: auto;
  padding-top: 50px;
  padding-bottom: 100px;
`;

export default PopupContainer;