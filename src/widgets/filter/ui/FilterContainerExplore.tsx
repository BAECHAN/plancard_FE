import { City, Country, SearchFilterBase } from '@/shared/type';
import { FilterTagButton, IconBadge, ToggleFilterTab } from '@/shared/ui';
import { COUNTRY_MAP, TOGGLE_FILTER_TAB_OPTION } from '@/shared/util/const';
import { ButtonList } from '@/widgets/button/ui';
import { useState } from 'react';

const FilterContainerExplore = () => {
  const [props, setProps] = useState<SearchFilterBase>({
    scrap: false,
    country: 'FR',
    city: 'paris',
    theme: ['1', '2'],
    category: ['11', '22'],
  });

  const [activeCountry, setActiveCountry] = useState<Country['isoCode'] | null>(
    null,
  );

  const [activeCity, setActiveCity] = useState<City['cityId'] | null>(null);

  return (
    <div className="flex flex-col gap-4">
      {activeCountry ? (
        <ButtonList className="gap-3">
          <FilterTagButton
            value
            onToggle={() => setActiveCountry(null)}
          >
            <>
              <IconBadge
                iconPath={`https://flagcdn.com/${activeCountry.toLocaleLowerCase()}.svg`}
              />
              {COUNTRY_MAP[activeCountry]}
            </>
          </FilterTagButton>
          {activeCity ? (
            <FilterTagButton
              value
              onToggle={() => setActiveCity(null)}
            >
              {activeCity}
            </FilterTagButton>
          ) : (
            <>
              <FilterTagButton
                value={false}
                onToggle={() => setActiveCity('메테오라')}
              >
                메테오라
              </FilterTagButton>
              <FilterTagButton
                value={false}
                onToggle={() => setActiveCity('아테네')}
              >
                아테네
              </FilterTagButton>
              <FilterTagButton
                value={false}
                onToggle={() => setActiveCity('산토리니')}
              >
                산토리니
              </FilterTagButton>
            </>
          )}
        </ButtonList>
      ) : (
        <ButtonList className="gap-3">
          <li>
            <FilterTagButton
              value={false}
              onToggle={() => setActiveCountry('GR')}
            >
              <>
                <IconBadge iconPath={'https://flagcdn.com/gr.svg'} />
                그리스
              </>
            </FilterTagButton>
          </li>
          <li>
            <FilterTagButton>
              <>
                <IconBadge iconPath={'https://flagcdn.com/jp.svg'} />
                일본
              </>
            </FilterTagButton>
          </li>
          <li>
            <FilterTagButton>
              <>
                <IconBadge iconPath={'https://flagcdn.com/kr.svg'} />
                한국
              </>
            </FilterTagButton>
          </li>
          <li>
            <FilterTagButton>
              <>
                <IconBadge iconPath={'https://flagcdn.com/us.svg'} />
                미국
              </>
            </FilterTagButton>
          </li>
          <li>
            <FilterTagButton>
              <>
                <IconBadge iconPath={'https://flagcdn.com/th.svg'} />
                태국
              </>
            </FilterTagButton>
          </li>
        </ButtonList>
      )}

      <ButtonList className="gap-3">
        <li>
          <FilterTagButton
            value={props.theme?.includes('1')}
            onToggle={newValue =>
              setProps(prev => ({
                ...prev,
                theme: newValue
                  ? ['1', '2']
                  : prev.theme?.filter(t => t !== '1'),
              }))
            }
          >
            Sports
          </FilterTagButton>
        </li>
        <li>
          <FilterTagButton defaultValue={false}>Music</FilterTagButton>
        </li>
        <li>
          <FilterTagButton defaultValue={false}>Food</FilterTagButton>
        </li>
        <li>
          <FilterTagButton defaultValue={false}>Travel</FilterTagButton>
        </li>
        <li>
          <FilterTagButton defaultValue={false}>Art</FilterTagButton>
        </li>
      </ButtonList>
      {activeCity && (
        <ButtonList className="gap-3">
          {TOGGLE_FILTER_TAB_OPTION.filter((_, index) => index === 1).map(
            option => (
              <li key={option[1].label}>
                <ToggleFilterTab
                  size="medium"
                  option={option}
                  onClick={() => {
                    setProps(prev => ({
                      ...prev,
                      scrap: !prev.scrap,
                    }));
                  }}
                />
              </li>
            ),
          )}
        </ButtonList>
      )}
    </div>
  );
};

export default FilterContainerExplore;
