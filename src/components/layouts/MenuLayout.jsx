import {
  Container,
  MenuWrapper, NavigationItem,
  NavigationList,
} from '../../styled/components/layouts/MenuLayout';
import {TwitterIcon} from '../icons/TwitterIcon';
import {Button} from 'antd';
import {
  Link,
} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {SidebarWrapper} from '../../styled/components/pages/Home';
import {SearchForm} from '../forms/SearchForm';
import {TrendsList} from '../lists/TrendsList';

export const MenuLayout = ({children}) => {
  const profile = useSelector(state => state.auth.profile);

  return (
      <Container>
        <MenuWrapper>
          <TwitterIcon position={'block'} size={'30px'}
                       style={{marginLeft: '15px'}}
                       color={'rgb(29, 155, 240)'}/>
          <nav>
            <NavigationList>
              <Link to="/home"><NavigationItem><i className="fas fa-home"/>Home</NavigationItem></Link>
              <NavigationItem><i
                  className="fas fa-hashtag"/>Explore</NavigationItem>
              <NavigationItem><i
                  className="far fa-bell"/>Notifications</NavigationItem>
              <NavigationItem><i
                  className="far fa-envelope"/>Messages</NavigationItem>
              <NavigationItem><i
                  className="far fa-bookmark"/>Bookmarks</NavigationItem>
              <NavigationItem><i
                  className="far fa-list-alt"/>Lists</NavigationItem>
              <Link to={`/${profile.username}`}><NavigationItem><i
                  className="far fa-user"/>Profile</NavigationItem></Link>
              <NavigationItem><i
                  className="fas fa-ellipsis-h"/>More</NavigationItem>
            </NavigationList>
          </nav>
          <Button type="primary" shape="round" size={'large'}>
            Tweet
          </Button>
        </MenuWrapper>
        {children}
        <SidebarWrapper>
          <SearchForm/>
          <TrendsList/>
        </SidebarWrapper>
      </Container>
  );
};