import {
  PLAN_BUTTON_FILTER_THEME_OPTION,
  TOGGLE_FILTER_OPTION,
} from '@/shared/const';
import { usePathStore } from '@/shared/store';
import { City, Country } from '@/shared/type';
import {
  ButtonFilterContainer,
  ButtonFilterCountryContainer,
  ToggleFilterContainer,
} from '@/widgets/filter/ui';
import { useState } from 'react';

const FilterContainerExplore = () => {
  const { currentPage } = usePathStore();
  const [activeCountry, setActiveCountry] = useState<Country['isoCode'] | null>(
    null,
  );

  const [activeCity, setActiveCity] = useState<City['cityId'] | null>(null);

  const handleChangeActiveCountry = (country: Country['isoCode'] | null) => {
    setActiveCountry(country);
  };

  const handleChangeActiveCity = (city: City['cityId'] | null) => {
    setActiveCity(city);
  };

  return (
    <div className="flex flex-col gap-4">
      {currentPage === 'cards' ? (
        <>
          <ButtonFilterCountryContainer
            activeCountry={activeCountry}
            activeCity={activeCity}
            onChangeActiveCountry={handleChangeActiveCountry}
            onChangeActiveCity={handleChangeActiveCity}
          />
          <ButtonFilterContainer optionList={PLAN_BUTTON_FILTER_THEME_OPTION} />
          {activeCity && (
            <ToggleFilterContainer optionList={[TOGGLE_FILTER_OPTION[1]]} />
          )}
        </>
      ) : (
        <>
          <ButtonFilterCountryContainer
            activeCountry={activeCountry}
            activeCity={activeCity}
            onChangeActiveCountry={handleChangeActiveCountry}
            onChangeActiveCity={handleChangeActiveCity}
          />
          <ButtonFilterContainer optionList={PLAN_BUTTON_FILTER_THEME_OPTION} />
          {activeCity && (
            <ToggleFilterContainer optionList={TOGGLE_FILTER_OPTION} />
          )}
        </>
      )}
    </div>
  );
};

export default FilterContainerExplore;
