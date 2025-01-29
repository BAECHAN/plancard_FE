import { useKeydown } from '@/shared/hooks';
import { SearchInputText, type SearchInputTextProps } from '@/shared/ui';
import { forwardRef, memo, useImperativeHandle, useRef } from 'react';

/**
 * @description '/' 키를 누르면 검색 입력창에 포커스를 주는 Search widget
 */
const FocusableSearchInputText = memo(
  forwardRef<HTMLInputElement, SearchInputTextProps>((props, ref) => {
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
  }),
);

FocusableSearchInputText.displayName = 'FocusableSearchInputText';

export default FocusableSearchInputText;
