import { forwardRef, useMemo } from 'react';

export type InputProps = {
  id: string;
  defaultValue?: string;
  onSearch?: (query: string) => void;
  label?: string;
  placeholder?: string;
  align?: 'left' | 'center' | 'right';
  type?: 'text' | 'password';
  query?: string;
  spellCheck?: boolean;
  autoComplete?: 'off' | 'on';
  autoFocus?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label = '',
      placeholder = '',
      align = 'left',
      type = 'text',
      query = '',
      onChange,
      onReset,
      spellCheck = false,
      autoComplete = 'off',
      autoFocus = false,
      onKeyDown,
      onFocus,
      onBlur,
    },
    ref,
  ) => {
    const searchInputTextStyle = useMemo(
      () =>
        `block w-full h-full pl-2 ${query.length ? 'pr-10' : 'pr-2'} py-2 border rounded-lg focus:outline-none border-gray-300`,
      [query.length],
    );

    const handleCloseButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onReset?.();
      onFocus?.();
    };

    return (
      <label
        htmlFor={id}
        className="relative"
      >
        {label}
        <input
          ref={ref}
          type={type}
          id={id}
          value={query}
          onChange={onChange}
          placeholder={placeholder}
          spellCheck={spellCheck}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          className={`${searchInputTextStyle} text-${align}`}
        />
        {query.length > 0 && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 transform text-mono500 hover:text-black"
            onClick={handleCloseButtonClick}
            aria-label="입력 내용 지우기"
          >
            ✕
          </button>
        )}
      </label>
    );
  },
);

Input.displayName = 'Input';

export default Input;
