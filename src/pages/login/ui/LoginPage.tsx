import { Block, MainContainer } from '@/widgets/layout/ui';
import { LoginForm } from '@/widgets/login/ui';

const LoginPage: React.FC = () => {
  return (
    <MainContainer className="h-[80vh] w-full items-center justify-center gap-7">
      <Block
        label="로그인페이지 타이틀"
        className="justify-center"
      >
        <strong className="text-center text-2xl">로그인</strong>
      </Block>
      <LoginForm />
    </MainContainer>
  );
};

export default LoginPage;
