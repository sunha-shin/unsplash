import styled from 'styled-components';
import cn from 'classnames';
import {useIntersection} from '../../../../hooks/useIntersection'
import React, {useEffect, useState} from "react";
import UserProfile from "../UserProfile";
import {IconButton} from "../Button/Button.Styled";
import {HeartIcon, PlusIcon} from "../../../../icons";

const PhotoItem = ({item, onClick}) => {

    const [inView, itemRef] = useIntersection();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (inView)
            setIsActive(true);
    }, [inView])

    const thumbStyle = {
        paddingBottom: item.height / item.width * 100 + '%',
        backgroundColor: item.color
    };

    const {name, username, profile_image} = item?.user

    return (
        <Container onClick={onClick} className={cn('PhotoItem', {isActive})} ref={itemRef}>
            <Thumb style={thumbStyle}>
                <img src={item.urls.regular} alt=""/>
            </Thumb>

            <Screen>
                <UserInfo>
                    <UserProfile
                        profileImage={profile_image?.medium}
                        name={name}
                        username={username}
                        color={'#e7e6e7'}
                    />
                </UserInfo>
                <Icons>
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
                </Icons>
            </Screen>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
  //opacity: .3;
  transition: 0.5s;
  transform: translateY(40px);
  cursor: pointer;

  &.isActive {
    opacity: 1;
    transform: none;
  }
`;

const Thumb = styled.div`
  img {
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

const Screen = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: .2s;
  opacity: 0;

  padding: 20px;

  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.2);
  }
`;

const UserInfo = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

const Icons = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  > * {
    margin-left: 8px;
  }
`;
export default PhotoItem;