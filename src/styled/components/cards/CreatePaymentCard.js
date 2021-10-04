import styled from 'styled-components';
import { Input } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-top: 1px solid #eee;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormInput = styled(Input)`
  width: 300px;
  margin-bottom: 10px;
`;

export const ErrorWrapper = styled.div`
  margin-bottom: 10px;
  color: #FF0000;
`;