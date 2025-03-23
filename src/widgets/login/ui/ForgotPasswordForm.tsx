import { BaseButton, InputInForm } from '@/shared/ui';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

type FormValues = {
  email: string;
};

const ForgotPasswordForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async data => {
    try {
      //await resetPassword(data.email);
      alert('비밀번호 재설정 링크가 이메일로 전송되었습니다.');
      navigate('/login');
    } catch (error) {
      alert('비밀번호 재설정 요청에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-md flex-col gap-6 rounded bg-mono100 p-6 shadow-md"
    >
      <div className="flex flex-col gap-2">
        <p className="text-sm text-mono500">
          가입하신 이메일 주소를 입력하시면 비밀번호 재설정 링크를 보내드립니다.
        </p>
      </div>

      <div
        className="flex flex-col gap-4"
        aria-label="비밀번호 찾기 이메일 입력 필드"
      >
        <InputInForm
          id="email"
          type="email"
          placeholder="이메일 주소 입력"
          register={register('email', {
            required: '이메일은 필수 입력사항입니다.',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '유효한 이메일 주소를 입력해주세요.',
            },
          })}
          errors={errors}
          dirtyFields={dirtyFields}
        />
      </div>

      <BaseButton
        type="submit"
        variant="primary"
      >
        비밀번호 재설정 링크 받기
      </BaseButton>

      <div className="flex items-center justify-center gap-1 text-xs">
        <p className="text-mono400">로그인 페이지로 돌아가기</p>
        <Link
          to="/login"
          className="transition-colors hover:text-primary hover:underline"
        >
          로그인
        </Link>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
