import { useLoginForm } from '@/features/auth/model';
import { BaseButton, CheckboxButton, InputInForm } from '@/shared/ui';
import { Link } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const { register, handleSubmit, errors, dirtyFields, onSubmit, isLoading } =
    useLoginForm();

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-md flex-col gap-4 rounded bg-mono100 p-6 shadow-md"
    >
      <div
        className="flex flex-col gap-4"
        aria-label="로그인 정보 입력 필드"
      >
        <InputInForm
          id="email"
          type="email"
          placeholder="Email"
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
          id="password"
          type="password"
          placeholder="Password"
          register={register('password', {
            required: '비밀번호는 필수 입력사항입니다.',
            minLength: {
              value: 8,
              message: '비밀번호는 최소 8자 이상이어야 합니다.',
            },
          })}
          errors={errors}
          dirtyFields={dirtyFields}
        />
      </div>
      <div className="flex items-center gap-2 text-xs text-mono400">
        <CheckboxButton
          size="xSmall"
          isControlled={false}
          onClick={() => {}}
        >
          <p>자동로그인</p>
        </CheckboxButton>
      </div>
      <div className="flex items-center justify-end gap-2 text-xs text-mono400">
        <Link
          to="/forgot-password"
          className="transition-colors hover:text-primary hover:underline"
        >
          비밀번호 찾기
        </Link>
      </div>
      <BaseButton
        type="submit"
        variant="primary"
      >
        로그인
      </BaseButton>
      <div className="flex items-center justify-center gap-1 text-xs">
        <p className="text-mono400">계정이 없으신가요?</p>
        <Link
          to="/signup"
          className="hover:text-primary hover:underline"
        >
          회원가입
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
