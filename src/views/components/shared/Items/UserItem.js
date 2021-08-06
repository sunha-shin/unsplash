import React from 'react'
import styled from 'styled-components';
import {DefaultButton, IconButton} from "../Button/Button.Styled";
import {FollowIcon} from "../../../../icons";
import {ButtonOutlineEffect, TextEllipsis} from "../../../../lib/styled";
import {navigate} from "../../../../lib/history";

const UserItem = ({item}) => {

    const {
        name,
        username,
        profile_image,
        photos
    } = item;

    const onClick = () => {
        navigate(`/@${username}`)
    };

    return (
        <Container>
            <Head>
                <UserProfile>
                    <Avatar>
                        <img src={profile_image?.medium} alt={`Avatar of user ${name}`}/>
                    </Avatar>
                    <Info>
                        <div className="name">
                            {name}
                        </div>
                        <div className="username">
                            @{username}
                        </div>
                    </Info>
                </UserProfile>
                <ButtonGroup>
                    <IconButton
                        iconWidth={18}
                        iconHeight={18}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}>
                        <FollowIcon/>
                    </IconButton>
                    {
                        item.for_hire &&
                        <ButtonHire onClick={(e) => {
                            e.stopPropagation();
                        }}>
                            Hire
                        </ButtonHire>
                    }
                </ButtonGroup>
            </Head>
            <PreviewImages>
                <ul>
                    {
                        photos.map((p, i) => (
                            <li key={i}>
                                <Image>
                                    <img src={p.urls?.regular} alt=""/>
                                </Image>
                            </li>
                        ))
                    }
                </ul>
            </PreviewImages>
            <ButtonView>View profile</ButtonView>
        </Container>
    )
}

const Container = styled.div`
  border-radius: 6px;
  cursor: pointer;
  padding: 16px;
  transition: 0.3s;
  ${ButtonOutlineEffect}
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

const Avatar = styled.div`
  margin-right: 16px;
  flex-shrink: 0;

  img {
    border-radius: 50%;
  }
`;

const Info = styled.div`
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
    ${TextEllipsis};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-shrink: 0;
`;

const ButtonHire = styled(DefaultButton)`
  padding: 0 11px;
  height: 32px;
  font-size: 14px;
  font-weight: bold;
  text-transform: capitalize;
  background: #007fff;
  color: #fff;
  border-radius: 3px;
  transition: 0.3s;
  margin-left: 8px;

  &:hover {
    background: #006aff;
  }
`;

const PreviewImages = styled.div`
  margin-bottom: 16px;

  ul {
    display: flex;
    margin: 0 -4px;

    li {
      width: 33.33%;
      padding: 0 4px;
    }
  }
`;

const Image = styled.div`
  position: relative;
  background: #eee;
  padding-bottom: 80%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ButtonView = styled(DefaultButton)`
  ${ButtonOutlineEffect};
  border-radius: 3px;
  width: 100%;
  height: 32px;
  font-size: 14px;
  color: #767676;

`;

export default UserItem;


// import React from 'react'
// import styled from 'styled-components';
// import {DefaultButton} from "../Button/Button.Styled";
// import {FollowIcon} from "../../../icons";
//
// const UserItem = ({item}) => {
//
//     console.log("@@ Useritem item", item)
//     return (
//         <Container>
//             <Header>
//                 <UserInfo>
//                     <img src={item.profile_image?.medium} alt=""/>
//                     <Names>
//                         <h5>{item.first_name} {item.last_name}</h5>
//                         <p>@{item.instagram_username}</p>
//                     </Names>
//                 </UserInfo>
//                 <Buttons>
//                     <ButtonFollow><FollowIcon/></ButtonFollow>
//                     <ButtonHire>Hire</ButtonHire>
//                 </Buttons>
//             </Header>
//             <Photos>
//                 {
//                     item.photos.map(({urls}) => (
//                         <PhotoItem>
//                             <img src={urls?.thumb} alt=""/>
//                         </PhotoItem>
//                     ))
//                 }
//             </Photos>
//             <ButtonViewProfile>
//                 View profile
//             </ButtonViewProfile>
//         </Container>
//     )
// }
//
// const Container = styled.div`
//   border: 1px solid #d1d1d1;
//   padding: 16px;
//   border-radius: 5px;
//   cursor: pointer;
//
//   &:hover {
//     border-color: #111;
//   }
// `;
//
// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//
//   img {
//     border-radius: 50%;
//     margin-right: 15px;
//     object-fit: cover;;
//   }
// `;
//
// const UserInfo = styled.div`
//   display: flex;
//   align-items: center;
// `;
//
// const Names = styled.div`
//   h5 {
//     font-weight: 800;
//     margin-bottom: 7px;
//     font-size: 18px;
//   }
//
//   p {
//     color: #767676;
//     font-size: 15px;
//   }
// `;
//
//
// const Photos = styled.div`
//   display: flex;
//   margin: 20px 0;
//   justify-content: space-between; 
// `;
//
// const PhotoItem = styled.div`
//   display: flex;
//   justify-content: space-between;  
//  
//   img {
//     width: 100%;
//     height: 75%;
//     object-fit: cover;
//   }
// `;
//
// const Buttons = styled.div`
//   display: flex;
//   align-items: center;
// `;
//
// const ButtonFollow = styled(DefaultButton)`
//   color: #767676;
//   background: #fff;
//   height: 32px;
//   padding: 0 11px;
//   font-size: 14px;
//   line-height: 30px;
//   border: 1px solid #d1d1d1;
//   border-radius: 4px;
//   text-align: center;
//   transition: all .1s ease-in-out;
// `;
//
// const ButtonHire = styled(ButtonFollow)`
//   background: #007fff;
//   padding: 0 11px;
//   color: #FFF;
//   border: none;
//   margin-left: 8px;
// `;
//
// const ButtonViewProfile = styled(ButtonFollow)`
//   width: 100%;
//   border-color: #d1d1d1;
//   color: #767676;
//   background: #fff;
//   height: 32px;
//   padding: 0 11px;
//   font-size: 14px;
//   line-height: 30;
// `;
// export default UserItem;