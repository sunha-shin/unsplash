import React, {useState} from 'react'
import styled from 'styled-components';
import UserProfile from "../UserProfile";
import {IconButton} from "../Button/Button.Styled";
import {HeartIcon, PlusIcon, ZoomInIcon, ZoomOutIcon} from "../../../icons";
import cn from 'classnames';

const PhotoInfo = ({data}) => {

    const [zoomIn, setZoomIn] = useState();

    const {
        urls,
        user: {
            profile_image,
            width,
            height,
            name,
            color,
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
                    <IconButton iconWidth={15}
                                iconHeight={15}
                    >
                        <HeartIcon/>
                    </IconButton>
                    <IconButton iconWidth={16}
                                iconHeight={16}
                    >
                        <PlusIcon/>
                    </IconButton>
                </ButtonGroup>

            </Head>
            <Body className={cn(zoomIn)}>
                <ImageBox style={{}}>
                    <Image onClick={() => setZoomIn(v => !v)}>
                        <img src={data.urls?.full} alt={data.alt_description || ""}/>
                        <ButtonZoom className={"btn-zoom"}>
                            {
                                zoomIn ? <ZoomInIcon/> : <ZoomOutIcon/>
                            }
                        </ButtonZoom>
                    </Image>
                </ImageBox>
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

const Image = styled.div`
  position: relative;
  max-width: 70%;
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
    max-width: 100% !important;
    cursor: zoom-out;
  }
`;

const ImageBox = styled.div`
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

  }

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonZoom = styled.div`
  position: relative;
  top: 20px;
  left: 20px;
  opacity: 0;
  transition: 0.2s;

  svg {
    fill: #fff;
  }


`;

export default PhotoInfo;