import { ForgotPasswordForm } from '@/features/auth/ui';
import { Block, MainContainer } from '@/widgets/layout/ui';

const ForgotPasswordPage: React.FC = () => {
  return (
    <MainContainer className="h-[80vh] w-full items-center justify-center gap-7">
      <Block
        label="비밀번호찾기페이지 타이틀"
        className="justify-center"
      >
        <strong className="text-center text-2xl">비밀번호 찾기</strong>
      </Block>
      <ForgotPasswordForm />
    </MainContainer>
  );
};

export default ForgotPasswordPage;
