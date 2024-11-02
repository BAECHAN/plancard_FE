import { forwardRef } from 'react';
type SearchInputTextProps = {
  id: string;
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  type: 'text';
  label?: string;
};

const searchInputTextStyle =
  'mt-1 block w-full h-full px-4 py-2 border rounded-lg focus:outline-none border-gray-300';
const SearchInputText = forwardRef<HTMLInputElement, SearchInputTextProps>(
  (
    { id, value, onChange, label = '', placeholder = '', type = 'text' },
    ref,
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.stopPropagation();
      e.preventDefault();

      onChange(e.target.value);
    };

    return (
      <label htmlFor={id}>
        {label}
        <input
          type={type}
          id={id}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          spellCheck="false"
          className={`${searchInputTextStyle}`}
          ref={ref}
        />
      </label>
    );
  },
);

SearchInputText.displayName = 'InputText';

export default SearchInputText;
