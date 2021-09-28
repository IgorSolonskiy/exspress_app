import {useSelector} from 'react-redux';
import {
  Container, Content, ContentWrapper, InfoUser, MenuDescription, MenuItem, Name,
  Post,
  PostWrapper, Settings, Username,
} from '../../styled/components/lists/PostsList';
import {UserOutlined} from '@ant-design/icons';
import {Avatar} from 'antd';
import moment from 'moment';
import { Menu, Dropdown } from 'antd';

export const PostsList = () => {
  const posts = useSelector(state => state.posts.posts);

  const menu = (
      <Menu>
        <MenuItem color={'red'} key="0">
          <i className="far fa-trash-alt" /><MenuDescription>Delete</MenuDescription>
        </MenuItem>
        <MenuItem key="1">
          <i className="fas fa-edit" /><MenuDescription>Update</MenuDescription>
        </MenuItem>
      </Menu>
  );

  return (
      <Container>
        {posts.map(post => {
          return (
              <PostWrapper key={post._id}>
                <Avatar style={{marginRight: '15px'}} size={48}
                        icon={<UserOutlined/>}/>
                <ContentWrapper>
                  <Post>
                    <Name>{post.user.name}</Name>
                    <Username>@{post.user.username}</Username>
                    <InfoUser>  &#183; {moment(post.createdAt).fromNow()}</InfoUser>
                    <Dropdown placement="bottomCenter" arrow overlay={menu}  trigger={['click']}>
                      <Settings>
                      <i className="fas fa-ellipsis-h" />
                      </Settings>
                    </Dropdown>
                  </Post>
                  <Content>{post.content}</Content>
                </ContentWrapper>
              </PostWrapper>
          )
        })}
      </Container>
  );
};