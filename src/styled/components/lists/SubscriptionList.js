import styled from 'styled-components';
import {Card, Button} from 'antd';

export const Container = styled.div`
  display: flex;
  margin: 20px;
`;

export const SubscriptionCardWrapper = styled(Card)`
  margin: 0 20px;
  padding: 40px 10px 10px 10px;
  position: relative;

  &:hover {
    -webkit-box-shadow: 0px 0px 4px 8px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 4px 8px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 4px 8px rgba(34, 60, 80, 0.2);
  }
`;

export const DisabledWrapper = styled.div`
  display: ${({visible}) => visible ? 'block' : 'none'};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: #eee;
  opacity: .8;
`;

export const BookmarkIcon = styled.i`
  color: ${({color}) => color};
  position: absolute;
  top: 5px;
  left: 10px;
  font-size: 40px;
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const PriceCard = styled.h3`
  font-size: 18px;
`;

export const CardBtn = styled(Button)`
  width: 100%;
`;

export const PopularWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
`;

export const PopularIcon = styled.i`
  font-size: 34px;
  color: greenyellow;
`;

export const CancelModalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

export const CancelModalDate = styled.span`
  font-size: 14px;
  font-weight: lighter;
  color: #808080;
`;

export const CancelModalDescription = styled.p`
  color: #5469d4;;
`;
