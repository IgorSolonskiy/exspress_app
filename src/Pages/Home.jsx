import {
  AuthDescItem,
  AuthDescription,
  AuthWrapper,
  Container,
  Logo,
  LogoWrapper, TwitterDescription, TwitterTitle,
} from '../styled/components/pages/home';
import {TwitterIcon} from '../components/Icons/TwitterIcon';
import {LoginForm} from '../components/Forms/LoginForm';
import {useState} from 'react';
import {RegisterForm} from '../components/Forms/RegisterForm';

export const Home = () => {
  const [showRegister, setShowRegister] = useState(false);

  const authFormControl = showRegister
      ? <RegisterForm/>
      : <LoginForm/>;

  const authDescriptionControl = showRegister
      ? <AuthDescription>Already have an account? <AuthDescItem
          onClick={() => setShowRegister(false)}>Sign
        in</AuthDescItem></AuthDescription>
      : <AuthDescription>Don’t have an account? <AuthDescItem
          onClick={() => setShowRegister(true)}>Sign
        up</AuthDescItem></AuthDescription>;

  return (
      <Container>
        <LogoWrapper>
          <Logo src="/HomeLogo.png" alt="Twitter background"/>
          <TwitterIcon position={'absolute'} size={'300px'} color={'#FFF'}/>
        </LogoWrapper>
        <AuthWrapper>
          <TwitterIcon position={'block'} size={'50px'}
                       color={'rgb(29, 155, 240)'}/>
          <TwitterTitle>
            Happening now
          </TwitterTitle>
          <TwitterDescription>
            Join Twitter today.
          </TwitterDescription>
          {authFormControl}
          {authDescriptionControl}
        </AuthWrapper>
      </Container>
  );
};