import { InputTextCommonProps } from '@/shared/ui/inputText/InputText';
import { forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type InputTextInFormProps = {
  id: string;
  isDirty: boolean;
  register?: UseFormRegisterReturn;
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
          className={`mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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
