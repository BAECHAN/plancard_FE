import { LoginForm } from '@/features/auth/ui';

const LoginFormLayout = () => {
  return (
    <div className="bg-gray-100 flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded bg-white p-6 shadow-md">
        <LoginForm />
      </div>
    </div>
  );
};
export default LoginFormLayout;
