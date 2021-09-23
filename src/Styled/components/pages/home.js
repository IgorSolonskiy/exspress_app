import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const LogoWrapper = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100vh;
`;

export const AuthWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0 30px;
`;

export const TwitterStyledIcon = styled.svg`
  position: ${({position})=>position};
  z-index: 2;
  width: ${({size})=>size};
  height: ${({size})=>size};
  top: 40%;
  left: 40%;
  fill: ${({color})=>color}
`;

export const TwitterTitle = styled.h1`
  font-size: 65px;
`;

export const TwitterDescription = styled.h1`
  font-size: 35px;
`;

export const AuthDescription = styled.p`
  font-size: 18px;
`;

export const AuthDescItem = styled.span`
  font-size: 18px;
  color: rgb(29, 155, 240);
  cursor: pointer;
`;