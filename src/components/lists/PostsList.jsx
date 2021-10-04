import {useSelector} from 'react-redux';
import {
  Container,
  Content,
  ContentWrapper,
  InfoUser,
  MenuDescription,
  MenuItem,
  ModalTitle,
  Name,
  Post,
  PostWrapper,
  Settings,
  Username,
} from '../../styled/components/lists/PostsList';
import {UserOutlined} from '@ant-design/icons';
import {Avatar} from 'antd';
import moment from 'moment';
import {Menu, Dropdown} from 'antd';
import {Modal} from 'antd';
import {useState} from 'react';
import {UpdatePostForm} from '../forms/UpdatePostForm';

export const PostsList = ({onRemovePost, onUpdatePost}) => {
      const posts = useSelector(state => state.posts.posts);
      const [updatePost, setUpdatePost] = useState(null);

      const configModal = postId => ({
        title: <ModalTitle>Delete Tweet?</ModalTitle>,
        content: 'This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from Twitter search results.',
        cancelText: 'Cancel',
        okText: 'Delete',
        closable: false,
        okType: 'danger',
        mask: false,
        icon: '',
        centered: true,
        className: 'post-delete-modal',
        width: 300,
        onOk: async () => {
          await onRemovePost(postId);
        },
      });


      const renderMenu = post => (
          <Menu>
            <MenuItem color={'red'} key="0" onClick={async () => {
              await setUpdatePost(false);
              Modal.confirm(configModal(post._id));
            }}>
              <i className="far fa-trash-alt"/><MenuDescription>Delete</MenuDescription>
            </MenuItem>
            <MenuItem key="1" onClick={() => {
              setUpdatePost(post);
            }}>
              <i className="fas fa-edit"/><MenuDescription>Update</MenuDescription>
            </MenuItem>
          </Menu>
      );

      const contentControl = post => {
        if (updatePost) {
          if (updatePost._id === post._id) return <UpdatePostForm
              onUpdatePost={onUpdatePost(post._id)}
              onVisibleForm={setUpdatePost}
              content={post.content}/>;
        }

        return <Content>{post.content}</Content>;
      };

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
                        <InfoUser>  &#183; {moment(post.createdAt)
                            .fromNow()}</InfoUser>
                        <Dropdown placement="bottomCenter" arrow
                                  overlay={renderMenu(post)}
                                  trigger={['click']}>
                          <Settings>
                            <i className="fas fa-ellipsis-h"/>
                          </Settings>
                        </Dropdown>
                      </Post>
                      {contentControl(post)}
                    </ContentWrapper>
                  </PostWrapper>
              );
            })}
          </Container>
      );
    }
;
;