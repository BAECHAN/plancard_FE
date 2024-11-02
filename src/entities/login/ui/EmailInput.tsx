import { FormInputProps } from '@/entities/login';
import { InputTextInForm } from '@/shared/ui';
import { forwardRef } from 'react';

const EmailInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ isError, isDirty, ...rest }: FormInputProps, ref) => {
    return (
      <InputTextInForm
        id="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        isError={isError}
        isDirty={isDirty}
        ref={ref}
        register={rest}
      />
    );
  },
);

EmailInput.displayName = 'EmailInput';

export default EmailInput;
