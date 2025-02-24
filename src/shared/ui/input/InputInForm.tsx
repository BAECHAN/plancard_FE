import {
  FieldErrors,
  FieldValues,
  UseFormRegisterReturn,
} from 'react-hook-form';

type InputInFormProps = {
  id: string;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  register: UseFormRegisterReturn;
  errors: FieldErrors;
  dirtyFields: FieldValues;
};

const InputInForm = ({
  id,
  label = '',
  placeholder = '',
  type = 'text',
  register,
  errors,
  dirtyFields,
}: InputInFormProps) => {
  const showError = dirtyFields[id] && errors[id];

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={id}
          className="text-gray-700 block text-sm font-medium"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`focus:ring-blue-500 block w-full rounded-lg border border-mono200 bg-white px-4 py-2 focus:outline-none focus:ring-2 ${
          showError ? 'ring-error' : 'ring-primary'
        }`}
        aria-invalid={showError ? 'true' : undefined}
        {...register}
      />
      {showError && errors[id] && (
        <p className="text-xs text-error">{errors[id].message as string}</p>
      )}
    </div>
  );
};

export default InputInForm;
