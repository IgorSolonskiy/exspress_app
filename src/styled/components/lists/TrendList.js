import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px;
  background-color: rgb(247, 249, 249);
  border-radius: 20px;
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  padding: 15px 0 0 20px;
`;

export const TrendWrapper = styled.div`
  padding: 20px;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

export const TrendTheme = styled.div`
  font-size: 16px;
`;

export const TrendDescription = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const TrendTweets = styled.div`
  font-size: 16px;
`;

export const NextTrend = styled.div`
  padding: 20px;
  font-size: 16px;
  color: rgb(29, 155, 240);
  cursor: pointer;
  &:hover {
    background-color: #eee;
    border-radius: 20px;
  }
`;

