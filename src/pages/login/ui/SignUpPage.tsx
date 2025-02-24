import { SignUpForm } from '@/features/auth/ui';
import { Block, MainContainer } from '@/widgets/layout/ui';

const SignUpPage: React.FC = () => {
  return (
    <MainContainer className="h-[80vh] w-full items-center justify-center gap-7">
      <Block
        label="회원가입페이지 타이틀"
        className="justify-center"
      >
        <strong className="text-center text-2xl">회원가입</strong>
      </Block>
      <SignUpForm />
    </MainContainer>
  );
};

export default SignUpPage;
