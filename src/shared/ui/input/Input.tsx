import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';

export type InputProps = {
  id: string;
  label?: string;
  placeholder?: string;
  align?: 'left' | 'center' | 'right';
  type?: 'text' | 'password';
  value?: string;
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
      value = '',
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
    const inputTextStyle = useMemo(
      () =>
        `block w-full h-full pl-2 ${value.length ? 'pr-10' : 'pr-2'} py-2 border rounded-lg focus:outline-none border-gray-300`,
      [value.length],
    );

    const [isFocused, setIsFocused] = useState(false);

    /** input reset 버튼 클릭 시 input blur 방지 */
    const isClickedResetButtonRef = useRef(false);

    const handleCloseButtonMouseDown = (
      e: React.MouseEvent<HTMLButtonElement>,
    ) => {
      e.preventDefault();
      isClickedResetButtonRef.current = true;

      onReset?.();
      onFocus?.();

      setTimeout(() => {
        isClickedResetButtonRef.current = false;
      }, 0);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (isClickedResetButtonRef.current) {
        return;
      }
      setIsFocused(false);
      onBlur?.();
    };

    const handleFocus = () => {
      setIsFocused(true);
      onFocus?.();
    };

    useEffect(() => {
      return () => {
        isClickedResetButtonRef.current = false;
      };
    }, []);

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
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          spellCheck={spellCheck}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={onKeyDown}
          className={`${inputTextStyle} text-${align}`}
        />
        {value.length > 0 && isFocused && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 transform text-mono500 hover:text-black"
            onMouseDown={handleCloseButtonMouseDown}
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
