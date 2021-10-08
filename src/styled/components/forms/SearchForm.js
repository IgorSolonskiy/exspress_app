import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const MentionsInput = styled.input`
  border-radius: 40px;
  padding: 10px;
  margin: 10px;
  background-color: rgb(247, 249, 249);
  width: 100%;
  outline: none;

  & > textarea {
    background-color: rgb(247, 249, 249);
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
`;

export const MentionDescription = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding: 5px;
`;

export const MentionLink = styled(Link)`
  color: #000000;
  
  &:hover {
    color: #000000;
  }
`;