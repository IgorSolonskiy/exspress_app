import styled from 'styled-components';
import {Avatar} from 'antd';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
`;

export const ProfileTitle = styled.h2`
  font-size: 24px;
  padding: 10px;
  border-bottom: 1px solid #eee;
  font-weight: bold;
  margin: 0;
`;

export const ProfileTitleIcon = styled.i`
  cursor: pointer;
  margin-right: 20px;
  padding: 10px;
  
  &:hover {
    background-color: #eee;
    border-radius: 50%;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BackgroundProfile = styled.div`
  width: 100%;
  height: 250px;
  background: #eee;
`;

export const AvatarProfile = styled(Avatar)`
  position: absolute;
  top: 250px;
  left: 20px;
  border: 4px solid #FFF;
`;

export const EditProfile = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding:20px 20px 0;
`;

export const EditBtn = styled.button`
  width: 100px;
  border: 1px solid #eee;
  background: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
`;

export const ProfileData = styled.div`
  width: 100%;
  padding:0 20px;
`;

export const ProfileName = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

export const ProfileMention = styled.div`
  font-size: 16px;
`;

export const FollowContainer = styled.div`
  display: flex;
  margin: 20px 0 0 0;
  padding:0 20px;
`;

export const Follow = styled.div`
  font-size: 16px;
  &:last-child{
    margin-left: 20px;
  }
`;

export const   Navigation = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
  padding: 0;
  & > .active-item {
    border-bottom: 4px solid rgb(29, 155, 240);;
  }
`;

export const NavigationItem = styled.li`
  list-style-type: none;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
`;

export const NavigationContent = styled.div`
  display: ${({visible})=>visible ? 'block' : 'none'};
`;