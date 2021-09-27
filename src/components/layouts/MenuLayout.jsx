import {
  Container,
  MenuWrapper, NavigationItem,
  NavigationList,
} from '../../styled/components/layouts/MenuLayout';
import {TwitterIcon} from '../icons/TwitterIcon';
import {Button} from 'antd';

export const MenuLayout = ({children}) =>{
  return (
      <Container>
        <MenuWrapper>
          <TwitterIcon position={'block'} size={'30px'}
                       style={{marginLeft:'15px'}}
                       color={'rgb(29, 155, 240)'}/>
          <nav>
            <NavigationList>
              <NavigationItem><i className="fas fa-home"/>Home</NavigationItem>
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
              <NavigationItem><i
                  className="far fa-user"/>Profile</NavigationItem>
              <NavigationItem><i
                  className="fas fa-ellipsis-h" />More</NavigationItem>
            </NavigationList>
          </nav>
          <Button type="primary" shape="round"  size={'large'}>
            Tweet
          </Button>
        </MenuWrapper>
        {children}
      </Container>
  );
}