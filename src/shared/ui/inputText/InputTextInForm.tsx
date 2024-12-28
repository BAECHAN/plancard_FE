import { InputTextCommonProps } from '@/shared/ui/inputText/InputText';
import { forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type InputTextInFormProps = {
  id: string;
  isDirty: boolean;
  register?: Omit<UseFormRegisterReturn, 'ref'>;
} & InputTextCommonProps;

const InputTextInForm = forwardRef<HTMLInputElement, InputTextInFormProps>(
  (
    {
      id,
      register,
      label = '',
      placeholder = '',
      type = 'text',
      isError = false,
      isDirty = false,
    },
    ref,
  ) => {
    return (
      <label
        htmlFor={id}
        className="block"
      >
        {label}
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`focus:ring-blue-500 mt-1 block w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 ${
            isError ? 'border-red-500 focus:border-red-500' : 'border-gray-300'
          }`}
          ref={ref}
          aria-invalid={isDirty ? (!isError ? 'true' : 'false') : undefined}
          {...register}
        />
      </label>
    );
  },
);

InputTextInForm.displayName = 'InputTextInForm';

export default InputTextInForm;
