import { FormInputProps } from '@/entities/login/type';

export interface UserInfo extends Record<string, string | number> {
  readonly id: number;
  name: string;
  age: number;
  email: string;
}

export interface UserFormInputProps extends FormInputProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'number' | 'password';
  placeholder?: string;
}
