import { login } from '@/shared/api';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormValues = {
  email: string;
  password: string;
};

const useLoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async data => {
    setIsLoading(true);
    try {
      const response = await login(data.email, data.password);
      alert(`Login successful! Token: ${response.data.refreshToken}`);
      navigate('/cards/my');
    } catch (error) {
      alert('Login failed: Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    dirtyFields,
    onSubmit,
    isLoading,
  };
};

export default useLoginForm;
