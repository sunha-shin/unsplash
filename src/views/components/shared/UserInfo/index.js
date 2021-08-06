import React, {useState} from 'react'
import styled from 'styled-components';
import {IconButton} from "../Button/Button.Styled";
import {authActions} from "../../../../redux/actionCreators";
import ProfileImage from "../ProfileImage";

const UserInfo = ({user}) => {

    const [showPhotos, setShowPhotos] = useState();
    const logout = () => {
        authActions.logout();
    };

    return (
        <Container>
            <ProfileImage size={40} url={user?.profile_image?.medium}/>
            <Name>{user.name}</Name>
            <UserPhotos>
                <h2 onClick={() => setShowPhotos(v => !v)}>
                    photos({user?.total_photos})
                </h2>
                {
                    showPhotos &&
                    <UserPhotosList>
                        {
                            user?.photos?.map?.((item) => (
                                <div key={item?.id} className={'photoItem'}>
                                    <img src={item?.urls?.small} alt=""/>
                                </div>
                            ))
                        }
                    </UserPhotosList>
                }
            </UserPhotos>
            <Logout onClick={logout}>
                Log out
            </Logout>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  font-size: 16px;
  color: #333;
  font-weight: 600;
  margin-left: 20px;
`;

const UserPhotos = styled.div`
  position: relative;
  margin-right: 40px;
  z-index: 1000;

  h2 {
    font-size: 14px;
    color: #666;
    margin-left: 30px;
    text-transform: capitalize;
    font-weight: 500;
  }
`;

const UserPhotosList = styled.div`
  position: absolute;
  right: 0;
  min-width: 200px;
  top: 100%;
  background: #fff;
  display: flex;
  padding: 30px;

  .photoItem {
    width: 80px;
    height: 120px;
    margin: 0 4px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Logout = styled(IconButton)`

`;


export default UserInfo;