import { UseFormRegisterReturn } from 'react-hook-form';

export type FormInputProps = {
  isError: boolean;
  isDirty: boolean;
} & UseFormRegisterReturn;
