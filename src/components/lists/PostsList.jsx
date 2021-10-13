import {useDispatch, useSelector} from 'react-redux';
import {
  Container,
  Content,
  ContentWrapper, DropdownPost,
  InfoUser,
  MenuDescription,
  MenuItem,
  ModalTitle,
  Name,
  Post,
  PostWrapper,
  Settings, SpinnerWrapper,
  Username,
} from '../../styled/components/lists/PostsList';
import {UserOutlined} from '@ant-design/icons';
import {Avatar} from 'antd';
import moment from 'moment';
import {Menu} from 'antd';
import {Modal} from 'antd';
import {useState} from 'react';
import {UpdatePostForm} from '../forms/UpdatePostForm';
import {AtomSpinner} from 'react-epic-spinners';

export const PostsList = ({onDeletePost, onUpdatePost}) => {
      const posts = useSelector(state => state.posts.posts);
      const isLoading = useSelector(state => state.posts.isLoading);
      const profile = useSelector(state => state.auth.profile);
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
          await onDeletePost(postId);
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

      if(isLoading){
        return (
            <SpinnerWrapper>
              <AtomSpinner color="#1890ff" />
            </SpinnerWrapper>
        )
      }

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
                        <InfoUser>
                          &#183; {moment(post.createdAt).fromNow()}
                        </InfoUser>
                        <DropdownPost placement="bottomCenter" arrow
                                      display={post.user._id === profile._id}
                                      overlay={renderMenu(post)}
                                      trigger={['click']}>
                          <Settings>
                            <i className="fas fa-ellipsis-h"/>
                          </Settings>
                        </DropdownPost>
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