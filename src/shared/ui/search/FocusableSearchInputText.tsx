import { useKeydown } from '@/shared/hooks';
import SearchInputText, {
  SearchInputTextProps,
} from '@/shared/ui/search/SearchInputText';
import { forwardRef, useImperativeHandle, useRef } from 'react';

/**
 * @description '/' 키를 누르면 검색 입력창에 포커스를 주는 Search widget
 */
const FocusableSearchInputText = forwardRef<
  HTMLInputElement,
  SearchInputTextProps
>((props, ref) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  useKeydown('/', () => {
    searchInputRef.current?.focus();
  }); // '/' 키를 누르면 검색 입력창에 포커스

  useImperativeHandle(ref, () => searchInputRef.current!); // 부모컴포넌트에서 ref로 검색 입력창에 접근

  return (
    <SearchInputText
      ref={searchInputRef}
      {...props}
    />
  );
});

FocusableSearchInputText.displayName = 'FocusableSearchInputText';

export default FocusableSearchInputText;
