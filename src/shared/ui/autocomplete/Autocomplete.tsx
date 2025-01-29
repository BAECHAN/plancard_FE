import {
  exploreSuggestionsLarge as large,
  exploreSuggestionsMedium as medium,
  exploreSuggestionsSmall as small,
} from '@/shared/const';
import { Option, Size } from '@/shared/type';
import { SearchInputTextExplore } from '@/shared/ui';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

/**
 * @description ul클릭 시 blur가 실행되므로 handleInputBlur이 실행되지 않도록 막음
 * @param e
 */
const preventBlurOnMouseDown = (e: React.MouseEvent) => {
  e.preventDefault();
};

const Autocomplete = memo(
  ({
    size,
    onOptionSelect,
    options,
  }: {
    size: Size;
    onOptionSelect: (selectedOption: Option<string>) => void;
    options: Option<string>[];
  }) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [focusedIndex, setFocusedIndex] = useState<number>(-1);
    const [suggestionList, setSuggestionList] =
      useState<Option<string>[]>(options);
    const [openSuggestionArea, setOpenSuggestionArea] =
      useState<boolean>(false);

    const listRef = useRef<HTMLUListElement>(null);
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

    // 이벤트 처리 여부를 추적하기 위한 ref
    const keydownProcessedRef = useRef(false);
    const keydownTimeoutRef = useRef<NodeJS.Timeout>();

    const handleSearch = (query: string) => {
      setSearchValue(query);
      setFocusedIndex(-1);

      const filteredSuggestionList = options.filter(suggestion =>
        suggestion.label.includes(query),
      );

      setSuggestionList(filteredSuggestionList);

      // 조건에 맞으면 추천목록 열기
      if (filteredSuggestionList.length && query.length > 0) {
        setOpenSuggestionArea(true);
      } else {
        setOpenSuggestionArea(false);
      }
    };

    const sizeClass: Record<Size, string> = {
      small,
      medium,
      large,
    };

    const handleSuggestionClick = (
      e: React.MouseEvent<HTMLLIElement>,
      selectedOption: Option<string>,
    ) => {
      e.stopPropagation();
      e.preventDefault();
      onOptionSelect(selectedOption);
      handleSearch(selectedOption.label);
      setOpenSuggestionArea(false);
      setFocusedIndex(-1);
    };

    const handleInputBlur = () => {
      setTimeout(() => {
        setOpenSuggestionArea(false);
      }, 100);
    };

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        // 이미 처리된 이벤트인 경우 무시
        if (keydownProcessedRef.current) {
          return;
        }

        // 이벤트 처리 플래그 설정
        keydownProcessedRef.current = true;

        // 다음 이벤트를 위해 플래그 초기화 (약간의 지연 추가)
        if (keydownTimeoutRef.current) {
          clearTimeout(keydownTimeoutRef.current);
        }
        keydownTimeoutRef.current = setTimeout(() => {
          keydownProcessedRef.current = false;
        }, 100);

        if (!openSuggestionArea) {
          return;
        }

        if (
          e.key !== 'ArrowDown' &&
          e.key !== 'ArrowUp' &&
          e.key !== 'Enter' &&
          e.key !== 'Escape'
        ) {
          return;
        }

        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            e.stopPropagation();
            setFocusedIndex(prev => {
              const newIndex =
                prev < suggestionList.length - 1 ? prev + 1 : prev;
              itemRefs.current[newIndex]?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
              });
              return newIndex;
            });
            break;
          case 'ArrowUp':
            e.preventDefault();
            e.stopPropagation();
            setFocusedIndex(prev => {
              const newIndex = prev > 0 ? prev - 1 : prev;
              itemRefs.current[newIndex]?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
              });
              return newIndex;
            });
            break;
          case 'Enter':
            if (focusedIndex >= 0) {
              e.preventDefault();
              e.stopPropagation();
              const selected = suggestionList[focusedIndex];
              onOptionSelect(selected);
              handleSearch(selected.label);
              setOpenSuggestionArea(false);
              setFocusedIndex(-1);
            }
            break;
          case 'Escape':
            setOpenSuggestionArea(false);
            setFocusedIndex(-1);
            break;
        }
      },
      [focusedIndex, openSuggestionArea],
    );

    // cleanup
    useEffect(() => {
      return () => {
        if (keydownTimeoutRef.current) {
          clearTimeout(keydownTimeoutRef.current);
        }
      };
    }, []);

    return (
      <div
        className="relative flex w-full gap-3"
        onKeyDown={handleKeyDown}
      >
        <SearchInputTextExplore
          id="search"
          size={size}
          query={searchValue}
          placeholder="Which country or city do you want to travel to?"
          onSearch={query => handleSearch(query)}
          type="text"
          onBlur={handleInputBlur}
        />

        {openSuggestionArea && (
          <div
            className={`absolute h-fit max-h-52 w-full overflow-auto text-center ${sizeClass[size]} rounded-md border border-mono500 bg-white`}
          >
            <ul
              ref={listRef}
              onMouseDown={preventBlurOnMouseDown}
            >
              {suggestionList.length > 0 &&
                suggestionList.map((filteredSuggestion, index) => (
                  <li
                    ref={el => (itemRefs.current[index] = el)}
                    key={filteredSuggestion.value}
                    className={`cursor-pointer hover:bg-skyblue hover:text-white ${focusedIndex === index ? 'bg-skyblue text-white' : ''}`}
                    onClick={(e: React.MouseEvent<HTMLLIElement>) => {
                      handleSuggestionClick(e, filteredSuggestion);
                    }}
                    onMouseEnter={() => setFocusedIndex(index)}
                  >
                    <button type="button">{filteredSuggestion.label}</button>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
);

Autocomplete.displayName = 'Autocomplete';

export default Autocomplete;
