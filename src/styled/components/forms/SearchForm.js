import styled from 'styled-components';
import {Mentions} from 'antd';

export const MentionsInput = styled(Mentions)`
  border-radius: 40px;
  padding: 10px;
  margin: 10px;
  background-color: rgb(247, 249, 249);
  & > textarea {
    background-color: rgb(247, 249, 249);
  }
`;