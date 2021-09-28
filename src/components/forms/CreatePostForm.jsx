import {Avatar, Button} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {
  BtnWrapper,
  FormWrapper,
  InputWrapper, TextArea,
} from '../../styled/components/forms/CreatePostForm';
import {useFormik} from 'formik';
import * as Yup from 'yup';

export const CreatePostForm = ({onCreatePost}) => {
  const formik = useFormik({
    initialValues: {
      content: '',
    },
    validationSchema: Yup.object({
      content: Yup.string()
          .max(150, 'Must be 150 characters or less')
          .required('Required'),
    }),
    enableReinitialize: true,
    validateOnChange: false,
    onSubmit: (values, formikHelpers) => {
      onCreatePost(values);
      formikHelpers.resetForm();
    },
  });

  return (
      <FormWrapper>
          <Avatar style={{marginRight: '15px'}} size={64}
                  icon={<UserOutlined/>}/>
          <InputWrapper>
            <TextArea name="content" id="content"
                      autoSize={{minRows: 1, maxRows: 6}}
                      onChange={formik.handleChange}
                      value={formik.values.content}
                      placeholder={'What\'s happening?'}/>
            <BtnWrapper>
              <Button disabled={formik.values.content ? 0 : 1}
                      onClick={formik.handleSubmit} style={{margin: '10px'}}
                      type="primary" shape="round" size={'large'}>
                Tweet
              </Button>
            </BtnWrapper>
          </InputWrapper>
        {formik.errors.content ? <div
            className="text-danger">{formik.errors.content}</div> : null}
      </FormWrapper>
  );
};