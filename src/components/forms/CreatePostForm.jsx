import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {
  FormWrapper,
  InputWrapper, TextArea,
} from '../../styled/components/forms/CreatePostForm';


export const CreatePostForm = () => {
  return (
      <FormWrapper>
        <InputWrapper>
          <Avatar style={{marginRight:'15px'}} size={64} icon={<UserOutlined />} />
          <TextArea rows={3} defaultValue={"What's happening?"} />
        </InputWrapper>
      </FormWrapper>
  );
};