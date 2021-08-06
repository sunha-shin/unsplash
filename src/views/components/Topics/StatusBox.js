import React from 'react'
import styled from 'styled-components';
import {DefaultButton} from "../shared/Button/Button.Styled";
import {ContributionsIcon, CuratorIcon, StatusIcon, TopContributorsIcon} from "../../../icons";
import ProfileImage from "../shared/ProfileImage";
import {abbreviateNumber} from "../../../lib/common";

const StatusBox = ({total_photos, status, top_contributors, owners}) => {

    const formatedContributions = abbreviateNumber(total_photos);

    return (
        <Container>
            <Content>
                <LeftEnd>
                    <Icon><StatusIcon/></Icon>
                    <p>Status</p>
                </LeftEnd>
                <StatusButton>
                    {status}
                </StatusButton>
            </Content>
            <Line/>
            <Content>
                <LeftEnd>
                    <Icon><CuratorIcon/></Icon>
                    <p>Curator</p>
                </LeftEnd>
                <RightEnd>
                    <img src={owners?.[0]?.profile_image?.small} alt=""/>
                </RightEnd>
            </Content>
            <Line/>
            <Content>
                <LeftEnd>
                    <Icon><ContributionsIcon/></Icon>
                    <p>Contributions</p>
                </LeftEnd>
                <RightEnd>
                    <span>{formatedContributions}</span>
                </RightEnd>
            </Content>
            <Line/>
            <Content>
                <LeftEnd>
                    <Icon><TopContributorsIcon/></Icon>
                    <p>Top contributors</p>
                </LeftEnd>
                <TopContributors>
                    {
                        top_contributors.map((item) => (
                            <ProfileImage key={item.id} url={item?.profile_image?.small} size={16}/>
                        ))
                    }
                </TopContributors>
            </Content>
        </Container>
    )
}

const Container = styled.div`
  padding: 24px;
  border: 1px solid #d1d1d1;
  background: transparent;
  //color: #767676;
  border-radius: 5px;
  display: grid;
`;

const Content = styled(DefaultButton)`
  height: 32px;
  font-size: 14px;
  color: #111;
  text-transform: capitalize;
  cursor: unset;

  display: flex;
  justify-content: space-between;
`;

const Icon = styled.div`
  margin: 0 14px 0 0;

  svg {
    fill: #d1d1d1;
    width: 19px;
    height: 19px;
  }
`;

const LeftEnd = styled.div`
  display: flex;
  align-items: center;
`;

const RightEnd = styled.div`
  span {
    font-weight: bold;
  }
`;

const TopContributors = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 112px;
`;

const Line = styled.div`
  border-top: 1px solid #d1d1d1;
  margin: 10px;
`;

const StatusButton = styled(DefaultButton)`
    
`;
export default StatusBox;