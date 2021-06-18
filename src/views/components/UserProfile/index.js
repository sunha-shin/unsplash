import React from 'react'
import styled from 'styled-components';
import {TextEllipsis} from "../../../lib/styled";

const UserProfile = ({profileImage, name, username, for_hire}) => {
    return (
        <Container>

                <Avatar>
                    <img src={profileImage?.medium} alt={`Avatar of user ${name}`}/>
                </Avatar>
                <Info>
                    <div className="name">{name}</div>
                    <div className="username">
                        {
                            for_hire ?
                                'Available for hire' : `@${username}`
                        }
                    </div>
                </Info>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 6px;
`;


const Avatar = styled.div`
  margin-right: 16px;
  flex-shrink: 0;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

const Info = styled.div`
  flex: 1;
  overflow: hidden;

  .name {
    font-size: 18px;
    color: #111;
    font-weight: bold;
    margin-bottom: 6px;
    ${TextEllipsis};
  }

  .username {
    font-size: 15px;
    color: #767676;
  }
`;

export default UserProfile;