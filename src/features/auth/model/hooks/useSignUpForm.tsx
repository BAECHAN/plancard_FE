import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormValues = {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
  agreement: boolean;
};

const useSignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      agreement: false,
    },
  });

  const navigate = useNavigate();
  const password = watch('password');

  const onSubmit: SubmitHandler<FormValues> = async data => {
    if (!data.agreement) {
      alert('이용약관에 동의해주세요.');
      return;
    }

    setIsLoading(true);
    try {
      //const response = await signUp({
      //  email: data.email,
      //  password: data.password,
      //  nickname: data.nickname,
      //});
      alert('회원가입이 완료되었습니다!');
      navigate('/login');
    } catch (error) {
      alert('회원가입 실패: 이미 존재하는 이메일입니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    dirtyFields,
    onSubmit,
    isLoading,
  };
};

export default useSignUpForm;
