import styled from 'styled-components';
import {Input} from 'antd';

export const UpdateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const TextArea = styled(Input.TextArea)`
  border: none;
  resize: none;
  font-size: 20px;
  && {
    border: none;
    box-shadow: none;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;