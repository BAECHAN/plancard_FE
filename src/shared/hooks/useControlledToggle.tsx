import { MouseEventHandler, useState } from 'react';

export type UseControlledToggleProps = {
  value?: boolean;
  defaultValue?: boolean;
  onChange?: (value: boolean) => void;
};

/**
 *
 * @description 컴포넌트 외부에서 제어할 때 사용하는 값과
 * 컴포넌트 내부에서 제어할 때 사용하는 값을 구분하여 토글 컴포넌트를 만들 때 사용하는 훅
 *
 * @param value: 컴포넌트 외부에서 제어할 때 사용하는 값
 * @param onChange: 컴포넌트 외부에서 제어할 때 사용하는 값이 변경될 때 호출되는 콜백 함수
 *
 * @param defaultValue: 컴포넌트 내부에서 제어할 때 사용하는 초기값
 *
 * @returns actualValue: 컴포넌트 에서 사용하는 값
 * @returns handleToggle: actualValue 토글될 때 호출되는 콜백 함수
 */
const useControlledToggle = ({
  value,
  defaultValue,
  onChange,
}: UseControlledToggleProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const actualValue = isControlled ? value : internalValue;

  const handleToggle: MouseEventHandler = () => {
    const newValue = !actualValue;
    if (isControlled) {
      onChange?.(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  return { actualValue, handleToggle };
};

export default useControlledToggle;
