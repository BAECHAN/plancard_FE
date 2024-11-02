import { UserFormInputProps } from '@/entities/user/type/UserType';
import { InputTextInForm } from '@/shared/ui';
import { forwardRef } from 'react';

const UserFormInput = forwardRef<HTMLInputElement, UserFormInputProps>(
  (
    {
      id,
      label,
      type = 'text',
      placeholder = 'Please enter a value.',
      isError,
      isDirty,
      ...rest
    }: UserFormInputProps,
    ref,
  ) => {
    return (
      <InputTextInForm
        id={id}
        label={label}
        type={type}
        placeholder={placeholder}
        isError={isError}
        isDirty={isDirty}
        ref={ref}
        register={rest}
      />
    );
  },
);

UserFormInput.displayName = 'UserFormInput';

export default UserFormInput;
