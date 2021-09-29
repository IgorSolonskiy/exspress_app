import {useFormik} from 'formik';
import * as Yup from 'yup';
import {
  BtnWrapper,
  TextArea,
  UpdateWrapper,
} from '../../styled/components/forms/UpdatePostForm';
import {Button} from 'antd';

export const UpdatePostForm = ({content, onUpdatePost, onVisibleForm}) => {
  const formik = useFormik({
    initialValues: {
      content,
    },
    validationSchema: Yup.object({
      content: Yup.string()
          .max(150, 'Must be 150 characters or less')
          .required('Required'),
    }),
    enableReinitialize: true,
    validateOnChange: false,
    onSubmit: async (values, formikHelpers) => {
      await onUpdatePost(values.content);
      onVisibleForm(null);
    },
  });

  return (
      <UpdateWrapper>
        <TextArea name="content" id="content"
                  autoSize={{minRows: 1, maxRows: 6}}
                  onChange={formik.handleChange}
                  value={formik.values.content}
                  placeholder={'What\'s happening?'}/>
        <BtnWrapper>
          <Button onClick={formik.handleSubmit} type="primary">Update</Button>
          <Button type="primary" onClick={() => onVisibleForm(null)} danger
                  style={{marginLeft: '15px'}}>
            Cancel
          </Button>
        </BtnWrapper>
      </UpdateWrapper>
  );
};