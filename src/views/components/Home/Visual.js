import React from 'react'
import styled from 'styled-components';
import SearchBox from "../shared/SearchBox";

const Visual = () => {

    return (
        <Container>
            <Contents>
                <h1>Unsplash</h1>
                <p>
                    The internet’s source of <span className="highlight">freely-usable images.</span> <br/>
                    Powered by creators everywhere.
                </p>
                <SearchBox shape={"square"}/>
                {/*<Trending>*/}
                {/*    <span>Trending : </span>*/}
                {/*    {*/}
                {/*        LocalData.trending.map((item, i) => (*/}
                {/*            <span key={i} className="highlight">{item} &nbsp;</span>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</Trending>*/}
            </Contents>
        </Container>
    )
}

const Container = styled.div`
  height: 600px;
  background: url("https://images.unsplash.com/photo-1551309292-e185c0b6e22a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80") 50% / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
  max-width: 895px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  h1 {
    color: #fff;
    font-size: 46px;
    margin-bottom: 16px;
    font-weight: bold;
  }

  p {
    color: #fff;
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 40px;

    span {
      text-decoration: underline;
    }

  }
`;

const Trending = styled.div`
  margin-top: 15px;
  color: #fff;
`;


export default Visual;