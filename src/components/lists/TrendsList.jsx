import {
  Container, NextTrend,
  Title, TrendDescription, TrendTheme, TrendTweets,
  TrendWrapper,
} from '../../styled/components/lists/TrendList';

export const TrendsList = () => {
  return (
      <Container>
        <Title>Trends for you</Title>
        <TrendWrapper>
          <TrendTheme>
            Trending in Ukraine
          </TrendTheme>
          <TrendDescription>
            #naked_
          </TrendDescription>
          <TrendTweets>
            5,051 Tweets
          </TrendTweets>
        </TrendWrapper>
        <TrendWrapper>
          <TrendTheme>
            Politics
          </TrendTheme>
          <TrendDescription>
            America
          </TrendDescription>
          <TrendTweets>
            2,231 Tweets
          </TrendTweets>
        </TrendWrapper>
        <NextTrend>
          Show More
        </NextTrend>
      </Container>
  );
};