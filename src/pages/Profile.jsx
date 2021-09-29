import {MenuLayout} from '../components/layouts/MenuLayout';
import {
  AvatarProfile,
  BackgroundProfile,
  Container,
  EditBtn,
  EditProfile,
  Follow,
  FollowContainer,
  Navigation, NavigationContent,
  NavigationItem,
  ProfileContainer,
  ProfileData,
  ProfileMention,
  ProfileName,
  ProfileTitle,
  ProfileTitleIcon,
} from '../styled/components/pages/Profile';
import {useDispatch, useSelector} from 'react-redux';
import {UserOutlined} from '@ant-design/icons';
import {useEffect, useState} from 'react';
import {PostsList} from '../components/lists/PostsList';
import {getPostsAsync} from '../store/posts/actions';

export const Profile = () => {
  const profile = useSelector(state => state.auth.profile);
  const [activeMenu, setActiveMenu] = useState('Tweets');
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPostsAsync(profile.username))
  },[])

  const tweetsControl = activeMenu === 'Tweets' ? 'active-item' : '';
  const paymentControl = activeMenu === 'Payment' ? 'active-item' : '';

  return (
      <MenuLayout>
        <Container>
          <ProfileTitle>
            <ProfileTitleIcon className="fas fa-arrow-left"/> {profile.name}
          </ProfileTitle>
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
          <Navigation>
            <NavigationItem onClick={()=>setActiveMenu('Tweets')} className={tweetsControl}>Tweets</NavigationItem>
            <NavigationItem onClick={()=>setActiveMenu('Payment')} className={paymentControl}>Payment</NavigationItem>
          </Navigation>
          <NavigationContent visible={tweetsControl}>
            <PostsList />
          </NavigationContent>
          <NavigationContent visible={paymentControl}>
            <div>Payment</div>
          </NavigationContent>
        </Container>
      </MenuLayout>
  );
};