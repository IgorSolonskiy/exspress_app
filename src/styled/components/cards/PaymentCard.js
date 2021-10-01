import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const CardDataWrapper = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
`;

export const CardDataItem = styled.div`
  font-size: 16px;
  text-transform: capitalize;
`;