import React from 'react'
import styled from 'styled-components';
import Tags from "../Tags";

const CollectionItem = ({item}) => {

    const {
        preview_photos
    } = item;

    return (
        <Container className={'CollectionsContainer'}>
            <Thumb>
                <ThumbContents>
                    <Left>
                        <Image>
                            {
                                preview_photos && preview_photos[0] &&
                                <img src={preview_photos[0].urls.regular} alt=""/>
                            }
                        </Image>
                    </Left>
                    <Right>
                        <Top>
                            <Image>
                                {
                                    preview_photos && preview_photos[1] &&
                                    <img src={preview_photos[1].urls.regular} alt=""/>
                                }
                            </Image>
                        </Top>
                        <Bottom>
                            <Image>
                                {
                                    preview_photos && preview_photos[2] &&
                                    <img src={preview_photos[2].urls.regular} alt=""/>
                                }
                            </Image>
                        </Bottom>
                    </Right>
                </ThumbContents>
            </Thumb>
            <Desc>
                <h2>{item.title}</h2>
                <p>{item.total_photos} photos · Curated by {item.user.name}</p>
            </Desc>
            <Tags data={item.tags}/>
        </Container>
    )
}

const Container = styled.div`

`;

const Thumb = styled.div`
  background: #eee;
  padding-bottom: 70%;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
`;

const ThumbContents = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const Left = styled.div`
  width: 70%;
  padding-right: 2px;
`;

const Right = styled.div`  
  width: 30%;
`;

const Top = styled.div`
  height: 50%;
  padding-bottom: 1px;
`;

const Bottom = styled.div`
  height: 50%;
  padding-top: 1px;
`;

const Image = styled.div`
  background: #eee;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  padding: 15px 0 8px;

  h2 {
    font-size: 18px;
    font-weight: 600;
    color: #111;
    text-transform: capitalize;
    margin-bottom: 8px;
  }

  P {
    font-size: 14px;
    color: #767676;
  }
`;
export default CollectionItem;