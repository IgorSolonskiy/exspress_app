import styled from 'styled-components';
import { Input } from 'antd';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const TextArea = styled(Input.TextArea)`
  border: none;
  resize: none;
  font-size: 24px;
  
  && {
    border: none;
  }
`;