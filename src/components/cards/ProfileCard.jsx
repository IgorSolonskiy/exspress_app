import {
  AvatarProfile,
  BackgroundProfile, EditBtn, EditProfile, Follow, FollowContainer,
  ProfileContainer, ProfileData, ProfileMention, ProfileName,
} from '../../styled/components/pages/Profile';
import {UserOutlined} from '@ant-design/icons';
import {useSelector} from 'react-redux';

export const ProfileCard = () => {
  const profile = useSelector(state => state.auth.profile);

  return (
      <ProfileContainer>
        <BackgroundProfile/>
        <AvatarProfile icon={<UserOutlined/>} size={120}/>
        <EditProfile>
          <EditBtn>Edit profile</EditBtn>
        </EditProfile>
        <ProfileData>
          <ProfileName>{profile.name}</ProfileName>
          <ProfileMention>@{profile.username}</ProfileMention>
        </ProfileData>
        <FollowContainer>
          <Follow>0 Following</Follow>
          <Follow>0 Followers</Follow>
        </FollowContainer>
      </ProfileContainer>
  );
};