import React from 'react'
import styled from 'styled-components';
import PhotoInfo from "./PhotoInfo";
import Section from "./Section";
import MasonryList from "../PhotoList/MasonryList";
import GridList from "../PhotoList/GridList";
import CollectionItem from "../Items/CollectionItem";
import Tags from "../Tags";
import {ContentContainer} from "../Layout/Layout.Styled";

const PhotoDetail = ({photoById, photoRelated}) => {

    const renderCollectionItem = (item) => <CollectionItem item={item}/>

    return (
        <Container className={"PhotoDetail"}>
            {
                photoById &&
                <PhotoInfo data={photoById}/>
            }

            <ContentContainer>
                <Section title={'photos'}>
                    {
                        photoRelated?.results &&
                        <MasonryList data={photoRelated?.results}/>
                    }
                </Section>

                <Section title={'collections'}>
                    {
                        photoById?.related_collections &&
                        <GridList data={photoById?.related_collections?.results}
                                  renderItem={renderCollectionItem}/>
                    }
                </Section>

                <Section title={'tags'}>
                    {
                        photoById?.tags &&
                        <Tags data={photoById?.tags}/>
                    }
                </Section>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
  background: #fff;
  padding: 20px 0 70px;

  #popup & { // popup이라는 id가 잇을떄만 주기
    border-radius: 6px;
    overflow: hidden;
  }
`;

export default PhotoDetail;