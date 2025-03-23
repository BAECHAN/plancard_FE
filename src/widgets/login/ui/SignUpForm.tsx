import { BaseButton, InputInForm } from '@/shared/ui';
import { useSignUpForm } from '@/widgets/login/hooks';
import { Link } from 'react-router-dom';

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    errors,
    dirtyFields,
    onSubmit,
    isLoading,
  } = useSignUpForm();

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-md flex-col gap-4 rounded bg-mono100 p-6 shadow-md"
    >
      <div
        className="flex flex-col gap-4"
        aria-label="회원가입 정보 입력 필드"
      >
        <InputInForm
          id="email"
          type="email"
          placeholder="이메일"
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

        <InputInForm
          id="nickname"
          type="text"
          placeholder="닉네임"
          register={register('nickname', {
            required: '닉네임은 필수 입력사항입니다.',
            minLength: {
              value: 2,
              message: '닉네임은 최소 2자 이상이어야 합니다.',
            },
            maxLength: {
              value: 10,
              message: '닉네임은 최대 10자까지 가능합니다.',
            },
            pattern: {
              value: /^[A-Za-z0-9가-힣]+$/,
              message: '닉네임은 한글, 영문, 숫자만 사용 가능합니다.',
            },
          })}
          errors={errors}
          dirtyFields={dirtyFields}
        />

        <InputInForm
          id="password"
          type="password"
          placeholder="비밀번호"
          register={register('password', {
            required: '비밀번호는 필수 입력사항입니다.',
            minLength: {
              value: 8,
              message: '비밀번호는 최소 8자 이상이어야 합니다.',
            },
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              message: '비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다.',
            },
          })}
          errors={errors}
          dirtyFields={dirtyFields}
        />

        <InputInForm
          id="confirmPassword"
          type="password"
          placeholder="비밀번호 확인"
          register={register('confirmPassword', {
            required: '비밀번호 확인은 필수입니다.',
            validate: value =>
              value === watch('password') || '비밀번호가 일치하지 않습니다.',
          })}
          errors={errors}
          dirtyFields={dirtyFields}
        />
      </div>

      <BaseButton
        type="submit"
        variant="primary"
        disabled={isLoading}
      >
        {isLoading ? '처리중...' : '회원가입'}
      </BaseButton>

      <div className="flex items-center justify-center gap-1 text-xs">
        <p className="text-mono400">이미 계정이 있으신가요?</p>
        <Link
          to="/login"
          className="hover:text-primary hover:underline"
        >
          로그인
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
