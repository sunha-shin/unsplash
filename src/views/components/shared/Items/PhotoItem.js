import styled from 'styled-components';
import cn from 'classnames';
import {useIntersection} from '../../../../hooks/useIntersection'
import {useEffect, useState} from "react";

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

    return (
        <Container onClick={onClick} className={cn({isActive})} ref={itemRef}>
            <Thumb style={thumbStyle}>
                <img src={item.urls.regular} alt=""/>
            </Thumb>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
  opacity: .3;
  transition: 0.5s;
  transform: translateY(40px);

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


export default PhotoItem;