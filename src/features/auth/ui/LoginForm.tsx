import { EmailInput, PasswordInput } from '@/entities/login/ui';
import { login } from '@/shared/api';
import { Button } from '@/shared/lib/shadcn-ui/components/ui';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormValues = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async data => {
    // await new Promise(resolve => setTimeout(resolve, 1000));
    // alert(JSON.stringify(data, null, 2));

    try {
      const response = await login(data.email, data.password);
      alert(`Login successful! Token: ${response.data.refreshToken}`);
      navigate('/mypage');
    } catch (error) {
      alert('Login failed: Invalid credentials');
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md rounded bg-white p-6 shadow-md"
    >
      <h2 className="mb-4 text-2xl">Login</h2>

      <div className="mb-4">
        <EmailInput
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address',
            },
          })}
          isDirty={!!dirtyFields.email}
          isError={!!(dirtyFields.email && errors.email)}
        />
        {errors.email && dirtyFields.email && (
          <small
            className="text-red-500 mt-1"
            role="alertdialog"
          >
            {errors.email.message}
          </small>
        )}
      </div>

      <div className="mb-4">
        <PasswordInput
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: `Password must have at least 8 characters`,
            },
          })}
          isDirty={!!dirtyFields.password}
          isError={!!(dirtyFields.password && errors.password)}
        />
        {errors.password && (
          <small
            className="text-red-500 mt-1"
            role="alertdialog"
          >
            {errors.password.message}
          </small>
        )}
      </div>

      <Button>cancel</Button>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 rounded px-4 py-2 text-white disabled:opacity-50"
        disabled={
          isSubmitting || errors.email || errors.password ? true : false
        }
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
