import {
  AvatarProfile,
  BackgroundProfile, EditBtn, EditProfile, Follow, FollowBtn, FollowContainer,
  ProfileContainer, ProfileData, ProfileMention, ProfileName, UnfollowBtn,
} from '../../styled/components/pages/Profile';
import {UserOutlined} from '@ant-design/icons';
import {useSelector} from 'react-redux';

export const ProfileCard = ({onFollow, onUnfollow}) => {
  const profile = useSelector(state => state.auth.profile);
  const user = useSelector(state => state.users.user);

  const followControl = user.following ?
      <EditProfile onClick={() => onUnfollow(user.username)}>
        <UnfollowBtn>Unfollow</UnfollowBtn>
      </EditProfile>
      :
      <EditProfile onClick={() => onFollow(user.username)}>
        <FollowBtn>Follow</FollowBtn>
      </EditProfile>;

  const editProfileControl = profile._id === user._id ?
      <EditProfile>
        <EditBtn>Edit profile</EditBtn>
      </EditProfile>
      : followControl;

  return (
      <ProfileContainer>
        <BackgroundProfile/>
        <AvatarProfile icon={<UserOutlined/>} size={120}/>
        {editProfileControl}
        <ProfileData>
          <ProfileName>{user.name}</ProfileName>
          <ProfileMention>@{user.username}</ProfileMention>
        </ProfileData>
        <FollowContainer>
          <Follow>0 Following</Follow>
          <Follow>0 Followers</Follow>
        </FollowContainer>
      </ProfileContainer>
  );
};