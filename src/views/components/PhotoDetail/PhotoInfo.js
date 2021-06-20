import React, {useState} from 'react'
import styled from 'styled-components';
import UserProfile from "../UserProfile";
import {IconButton} from "../Button/Button.Styled";
import {HeartIcon, PlusIcon, ZoomInIcon, ZoomOutIcon} from "../../../icons";
import cn from 'classnames';

const PhotoInfo = ({data}) => {

    const [zoomIn, setZoomIn] = useState(false);

    const {
        urls,
        width,
        height,
        color,
        user: {
            profile_image,
            name,
            username,
            for_hire
        },
        alt_description
    } = data;

    const imageBoxStyle = {
        paddingBottom: height / width * 100 + '%',
        backgroundColor: color
    }

    return (
        <Container>
            <Head>
                <UserProfile
                    profileImage={profile_image?.medium}
                    name={name}
                    username={username}
                    forHire={for_hire}
                />
                <ButtonGroup>
                    <IconButton
                        iconWidth={15}
                        iconHeight={15}
                    >
                        <HeartIcon/>
                    </IconButton>
                    <IconButton
                        iconWidth={16}
                        iconHeight={16}
                    >
                        <PlusIcon/>
                    </IconButton>
                </ButtonGroup>
            </Head>
            <Body className={cn({zoomIn})}>
                <Image onClick={() => setZoomIn(v => !v)}>
                    <ImageBox style={imageBoxStyle}>
                        <img src={data.urls?.full}
                             alt={data.alt_description || ""}/>
                    </ImageBox>
                    <ButtonZoom className={"btn-zoom"}>
                        {
                            zoomIn ? <ZoomOutIcon/> : <ZoomInIcon/>
                        }
                    </ButtonZoom>
                </Image>
            </Body>
            <Detail>

            </Detail>
        </Container>
    )
}

const Container = styled.div`

`;

const Head = styled.div`
  display: flex;
  padding: 0 25px;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin-left: 8px;
  }
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
`;

const Detail = styled.div`

`;

const ImageBox = styled.div`
  position: relative;
  width: 100%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Image = styled.div`
  position: relative;
  max-width: 70%;
  width: 100%;
  cursor: zoom-in;

  &:hover {
    .btn-zoom {
      opacity: 1;
    }
  }

  #popup & {
    max-width: 85%;
  }

  .zoomIn & {
    max-width: 100%!important;
    cursor: zoom-out;
  }

`;


const ButtonZoom = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  opacity: 0;
  transition: 0.2s;

  svg {
    fill: #fff;
  }

`;

export default PhotoInfo;