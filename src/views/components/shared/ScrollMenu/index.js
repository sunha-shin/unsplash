import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components';
import {ArrowLeftIcon, ArrowRightIcon} from "../../../../icons";
import {DefaultButton} from "../Button/Button.Styled";
import cn from 'classnames';

const ScrollMenu = ({data = [], renderItem = () => {}, style}) => {

    const [scrollLeft, setScrollLeft] = useState(0);
    const [maxScroll, setMaxScroll] = useState(1);
    const trackRef = useRef(null);

    useEffect(() => {
        if (trackRef.current) {
            setMaxScroll(trackRef.current.scrollWidth - trackRef.current.clientWidth)
        }
    }, [data])

    const onScroll = (event) => {
        const scrollLeft = event.target.scrollLeft;
        const scrollWidth = event.target.scrollWidth;
        const clientWidth = event.target.clientWidth;
        const maxScroll = scrollWidth - clientWidth;
        setScrollLeft(scrollLeft);
        setMaxScroll(maxScroll);    // scrollLeft의 maxScroll
    };

    const start = scrollLeft <= 0;
    const end = scrollLeft >= maxScroll;

    const onClickLeft = () => {
        if (trackRef.current) {
            trackRef.current.scrollLeft = Math.max(0, trackRef.current.scrollLeft - 400);
        }
    };

    const onClickRight = () => {
        if (trackRef.current) {
            trackRef.current.scrollLeft = Math.min(maxScroll, trackRef.current.scrollLeft + 400);
        }
    };

    return (
        <Container className={cn("ScrollMenu", {start, end})} style={style}>
            {
                !start &&
                <ButtonLeft onClick={onClickLeft}>
                    <ArrowLeftIcon/>
                </ButtonLeft>
            }
            <Track className={"Track"}
                   onScroll={onScroll}
                   ref={trackRef}>
                {
                    data.map((item, index) => renderItem(item, index))
                }
            </Track>
            {
                !end &&
                <ButtonRight onClick={onClickRight}>
                    <ArrowRightIcon/>
                </ButtonRight>
            }
        </Container>
    )
}

const Container = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
  padding: 0 30px;

  &::after, &::before {
    content: '';
    position: absolute;    
    top: 0;
    bottom: 0;
    width: 200px;
    pointer-events: none;
    transition: 0.2s;
  }

  &::before {
    left: 0;
    background: linear-gradient(270deg, hsla(0, 0%, 100%, 0) 0, #fff 90%, #fff);
  }

  &::after {
    right: 0;
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0, #fff 90%, #fff);
  }
  
  &.start::before {
    opacity: 0;
  }

  &.end::after {
    opacity: 0;
  }
`;

const Track = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
`;

const ButtonArrow = styled(DefaultButton)`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 60px;
  z-index: 100;

  &:hover {
    fill: #111;
    svg {
      fill: #111;
    }
  }

  svg {
    width: 22px;
    fill: #767676;
    transition: 0.4s;
  }
`;

const ButtonLeft = styled(ButtonArrow)`
  left: 0;  
`;

const ButtonRight = styled(ButtonArrow)`
  right: 0;
`;

export default ScrollMenu;