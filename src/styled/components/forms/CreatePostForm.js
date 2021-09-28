import styled from 'styled-components';
import { Input } from 'antd';

export const FormWrapper = styled.form`
  display: flex;
  margin:0 20px;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const TextArea = styled(Input.TextArea)`
  border: none;
  resize: none;
  font-size: 24px;
  
  && {
    border: none;
    box-shadow: none;
  }
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  border-top:1px solid #eee ;
`;

