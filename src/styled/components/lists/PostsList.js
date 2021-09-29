import styled from 'styled-components';
import {Menu} from 'antd';

export const MenuItem = styled(Menu.Item)`
  width: 150px;
  padding: 10px;
  color: ${({color}) => color ? color : '#000'};
`;

export const MenuDescription = styled.span`
  margin-left: 15px;
`;

export const Container = styled.div`
  border-top: 1px solid #eee;
  width: 100%;
`;

export const PostWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border: none;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const Post = styled.div`
  position: relative;
  font-size: 18px;
  width: 100%;
`;

export const Name = styled.span`
  font-weight: bold;
  margin-right: 15px;
  cursor: pointer;
`;

export const InfoUser = styled.span`
  font-size: 16px;
`;

export const Username = styled.span`
  cursor: pointer;
`;

export const Settings = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    background-color: #eee;
  }
`;

export const Content = styled.div`
  font-size: 20px;
`;

export const ModalTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;