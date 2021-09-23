import {
  AuthDescItem,
  AuthDescription,
  AuthWrapper,
  Container,
  Logo,
  LogoWrapper, TwitterDescription, TwitterTitle,
} from '../Styled/components/pages/home';
import {TwitterIcon} from '../Components/Icons/TwitterIcon';
import {LoginForm} from '../Components/Forms/LoginForm';
import {useState} from 'react';

export const Home = () => {
  const [showRegister,setShowRegister] = useState(false );



  return (
      <Container>
        <LogoWrapper>
          <Logo src="/HomeLogo.png" alt="Twitter background"/>
          <TwitterIcon position={'absolute'} size={'300px'} color={'#FFF'}/>
        </LogoWrapper>
        <AuthWrapper>
          <TwitterIcon position={'block'} size={'50px'} color={'rgb(29, 155, 240)'}/>
          <TwitterTitle>
            Happening now
          </TwitterTitle>
          <TwitterDescription>
            Join Twitter today.
          </TwitterDescription>
          <LoginForm />
          <AuthDescription>Already have an account? <AuthDescItem>Sign in</AuthDescItem></AuthDescription>
        </AuthWrapper>
      </Container>
  );
};