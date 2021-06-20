import React from 'react'
import styled from 'styled-components';
import cn from 'classnames'

const Section = ({title, children}) => {
    return (
        <Container className={cn(title)}>
            <Title>Related {title}</Title>
            {children}
        </Container>
    )
}

const Container = styled.div`
  margin-top: 60px;
`;

const Title = styled.div`
  font-size: 18px;
  color: #111;
  margin-bottom: 25px;
  .photos & {
    margin-bottom: 15px;
  }
`;

export default Section;