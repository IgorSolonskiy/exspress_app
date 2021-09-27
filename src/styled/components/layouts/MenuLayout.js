import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 60vw;
  justify-content: center;
  margin: 0 auto;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  border-right: 1px solid #eee;
  padding-right: 30px;
`;


export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const NavigationItem = styled.li`
  list-style-type: none;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 10px 10px 0;
  
  &:hover {
    background-color: #eee;
    border-radius: 30px;
  }
  
  & > i {
    width: 30px;
    margin: 0 15px;
  }
  &:first-child{
    margin-top: 25px;
  }
`;