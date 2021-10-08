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
  padding: 20px 20px 0;
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

export const UnfollowBtn = styled.button`
  width: 100px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  background: #FFFFFF;
  color: #FF0000;
  border: 1px solid #FF0000;

  &:hover {
    border: 1px solid #eee;
    background-color: #FF0000;
    color: #FFFFFF;
  }
`;

export const FollowBtn = styled.button`
  width: 100px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  background: #FFFFFF;
  color: rgb(29, 155, 240);
  border: 1px solid rgb(29, 155, 240);

  &:hover {
    border: 1px solid #eee;
    background-color:rgb(29, 155, 240);
    color: #FFFFFF;
  }
`;


export const ProfileData = styled.div`
  width: 100%;
  padding: 0 20px;
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
  padding: 0 20px;
`;

export const Follow = styled.div`
  font-size: 16px;

  &:last-child {
    margin-left: 20px;
  }
`;

export const Navigation = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
  padding: 0;

  & > .active-item {
    border-bottom: 4px solid rgb(29, 155, 240);
  }
`;

export const NavigationItem = styled.li`
  list-style-type: none;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;

  & > a {
    color: #000000;
  }
`;

export const NavigationContent = styled.div`
  display: ${({visible}) => visible ? 'block' : 'none'};
`;

export const SubscriptionWrapper = styled.div`
  display: ${({visible}) => visible ? 'flex' : 'none'};
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const TypesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubscriptionData = styled.div`
  width: 100%;
`;

export const InfoContainer = styled.div`
  padding: 20px;
  border-top: 1px solid #eee;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #33c27f;
  color: #eeeeee;
  font-size: 25px;
  padding: 5px;
`;

export const TextContainer = styled.div`
  margin-left: 10px;
`;

export const SubscriptionPlan = styled.span`
  font-weight: bold;
  margin: 0 10px;
  text-transform: capitalize;
`;

export const SubscriptionActive = styled.span`
  background-color: #98FB98;
  color: #228B22;
  padding: 5px;
  margin: 0 10px;
  border-radius: 5px;
`;

export const SubscriptionCancels = styled.span`
  background-color: #C0C0C0;
  color: #000;
  padding: 5px;
  margin: 0 10px;
  border-radius: 5px;
`;

export const UpdateSubscription = styled.span`
  color: #808080;
  margin: 0 10px;
`;