import { useDebounce } from '@/shared/hooks';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
export type SearchInputTextProps = {
  id: string;
  onSearch: (query: string) => void;
  type?: 'text' | 'password';
  initialValue?: string;
  placeholder?: string;
  label?: string;
};

const searchInputTextStyle =
  'mt-1 block w-full h-full px-4 py-2 border rounded-lg focus:outline-none border-gray-300';

const SearchInputText = forwardRef<HTMLInputElement, SearchInputTextProps>(
  (
    {
      id,
      initialValue = '',
      onSearch,
      label = '',
      placeholder = '',
      type = 'text',
    },
    ref,
  ) => {
    const [query, setQuery] = useState<string>(initialValue);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const debouncedQuery = useDebounce(query, 700);

    useImperativeHandle(ref, () => searchInputRef.current!);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.stopPropagation();
      e.preventDefault();

      const inputValue = e.target.value;
      const normalizedValue = inputValue.normalize('NFC');
      setQuery(normalizedValue);
    };

    useEffect(() => {
      onSearch(encodeURIComponent(debouncedQuery));
    }, [debouncedQuery, onSearch]);

    return (
      <label htmlFor={id}>
        {label}
        <input
          ref={searchInputRef}
          type={type}
          id={id}
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          spellCheck="false"
          className={`${searchInputTextStyle}`}
        />
      </label>
    );
  },
);

SearchInputText.displayName = 'InputText';

export default SearchInputText;
