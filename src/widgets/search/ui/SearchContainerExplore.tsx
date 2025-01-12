import { COUNTRIES } from '@/shared/const';
import { Country, Option, Size } from '@/shared/type';
import { Autocomplete, BaseButton } from '@/shared/ui';
import { Util } from '@/shared/util';
import { useState } from 'react';

const countriesOptions = COUNTRIES.map((item: Country) => {
  return {
    label: item.title,
    value: item.isoCode,
  };
});
const SearchContainerExplore = ({ size = 'large' }: { size?: Size }) => {
  const [selectedOption, setSelectedOption] = useState<Option<string> | null>(
    null,
  );

  const handleSelectedOption = (selectedOption: Option<string>) => {
    setSelectedOption(selectedOption);
  };

  const buttonSize = Util.convertSizeToUpSize(size);

  return (
    <div className="explore-search-area relative flex items-center gap-2 px-1 py-2">
      <Autocomplete
        size={size}
        onOptionSelect={handleSelectedOption}
        options={countriesOptions}
      />
      <BaseButton
        size={buttonSize}
        onClick={() => {}}
      >
        Search{' '}
      </BaseButton>
    </div>
  );
};

export default SearchContainerExplore;
