import React, {useState} from 'react'
import styled from 'styled-components';
import UserProfile from "../shared/UserProfile";
import {IconButton} from "../shared/Button/Button.Styled";
import moment from "moment";
import {
    HeartIcon,
    InfoIcon,
    LicenseIcon, LocationIcon,
    PlusIcon,
    PublishedIcon,
    ShareIcon,
    ZoomInIcon,
    ZoomOutIcon
} from "../../../icons";
import cn from 'classnames';
import {composeFormatNumber} from "../../../lib/common";
import LocalData from "../../../data";

const PhotoInfo = ({data}) => {

    const [zoomIn, setZoomIn] = useState(false);

    const {
        width,
        height,
        color,
        user: {
            profile_image,
            name,
            username,
            for_hire
        },
        location: {
            title
        },
        description,
    } = data;

    const imageBoxStyle = {
        paddingBottom: height / width * 100 + '%',
        backgroundColor: color
    }

    const formatViews = composeFormatNumber(data.views);
    const formatDownloads = composeFormatNumber(data.downloads);

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
                        <img src={data.urls?.regular}
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
                <CountHead className={'CountHead'}>
                    <Count className={'Count'}>
                        <Title>
                            <h1>views</h1>
                            <p>{formatViews}</p>
                        </Title>
                        <Title>
                            <h1>downloads</h1>
                            <p>{formatDownloads}</p>
                        </Title>
                    </Count>
                    <ButtonGroup className={'Buttons'}>
                        <IconButton
                            iconWidth={15}
                            iconHeight={15}
                        >
                            <ShareIcon/>
                            <p>Share</p>
                        </IconButton>
                        <IconButton
                            iconWidth={16}
                            iconHeight={16}
                        >
                            <InfoIcon/>
                            <p>Info</p>
                        </IconButton>
                    </ButtonGroup>
                </CountHead>

                <CountBody>
                    {
                        data.location.title &&
                        <BodyInfo>
                            <Icons><LocationIcon/></Icons>
                            <p>{data.location.title}</p>
                        </BodyInfo>
                    }
                    <BodyInfo>
                        <Icons><PublishedIcon/></Icons>
                        <p>Published on {moment(data.created_at).format('MMMM D, YYYY')}</p>
                    </BodyInfo>
                    <BodyInfo>
                        <Icons><LicenseIcon/></Icons>
                        <p>{LocalData.license}</p>
                    </BodyInfo>
                </CountBody>
                {
                    description &&
                    <Desc>
                        {description}
                    </Desc>
                }
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

  > * {
    margin-left: 8px;
  }
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
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
  width: 30%;
  height: auto;
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
    width: 100%;
    max-width: 100% !important;
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


const Detail = styled.div`
  padding: 30px 14px 16px;
`;

const Count = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 50px;
`;

const CountHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 160px;
  height: 26px;
  margin-right: 30px;
  text-transform: capitalize;

  h1 {
    color: #767676;
    padding-bottom: 8px;
  }
`;

const CountBody = styled.div`
  line-height: 1.6;
`;

const BodyInfo = styled.div`
  display: flex;

  p {
    color: #767676;
    font-size: 14px;
  }
`;

const Desc = styled.div`
  margin-top: 20px;
  line-height: 1.6;
`;

const Icons = styled.div`
  margin-right: 8px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    fill: #767676;
    width: 16px;
    height: 16px;
  }
`;


export default PhotoInfo;