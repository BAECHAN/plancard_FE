import { forwardRef } from 'react';

type InputTextProps = {
  id: string;
  onChange: (value: string) => void;
  value: string;
} & InputTextCommonProps;

export type InputTextCommonProps = {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  isError?: boolean;
};

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      id,
      value,
      onChange,
      label = '',
      placeholder = '',
      type = 'text',
      isError = false,
    },
    ref,
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };

    return (
      <label htmlFor={id}>
        {label}
        <input
          type={type}
          id={id}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isError ? 'border-red-500 focus:border-red-500' : 'border-gray-300'
          }`}
          ref={ref}
          aria-invalid={!isError ? 'true' : 'false'}
        />
      </label>
    );
  },
);

InputText.displayName = 'InputText';

export default InputText;
