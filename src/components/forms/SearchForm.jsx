import {
  InfoWrapper, MentionDescription,
  MentionLink,
  MentionsInput,
} from '../../styled/components/forms/SearchForm';
import {useDispatch, useSelector} from 'react-redux';
import {setUsers} from '../../store/users/reducer';
import {getUsersAsync} from '../../store/users/action';
import {Menu, Dropdown, } from 'antd';

export const SearchForm = () => {
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    if (!e.target.value)
      return dispatch(setUsers([]));

    if (e.target.value.length > 3 && !users.length)
      return dispatch(setUsers([]));

    await dispatch(getUsersAsync(e.target.value));
  };

  const menuControl = <Menu>
    {users.map(user => {
      return (
          <Menu.Item key={user._id}>
            <MentionLink to={`/${user.username}`}>
              <InfoWrapper>
                <MentionDescription>{user.name}</MentionDescription>
                <MentionDescription>{user.username}</MentionDescription>
              </InfoWrapper>
            </MentionLink>
          </Menu.Item>
      );
    })}
  </Menu>;

  return (
      <Dropdown overlay={menuControl} placement="bottomCenter" arrow>
        <MentionsInput onChange={handleSearch}/>
      </Dropdown>
  );
};
