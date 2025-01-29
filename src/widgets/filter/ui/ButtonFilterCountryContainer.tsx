import { COUNTRY_MAP } from '@/shared/const';
import { City, Country } from '@/shared/type';
import { FilterTagButton, IconBadge } from '@/shared/ui';
import { ButtonList } from '@/widgets/button/ui';

const ButtonFilterCountryContainer = ({
  activeCountry,
  activeCity,
  onChangeActiveCountry,
  onChangeActiveCity,
}: {
  activeCountry: Country['isoCode'] | null;
  activeCity: City['cityId'] | null;
  onChangeActiveCountry: (country: Country['isoCode'] | null) => void;
  onChangeActiveCity: (city: City['cityId'] | null) => void;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {activeCountry ? (
        <ButtonList className="gap-3">
          <FilterTagButton
            value
            onToggle={() => onChangeActiveCountry(null)}
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
              onToggle={() => onChangeActiveCity(null)}
            >
              {activeCity}
            </FilterTagButton>
          ) : (
            <>
              <FilterTagButton
                value={false}
                onToggle={() => onChangeActiveCity('메테오라')}
              >
                메테오라
              </FilterTagButton>
              <FilterTagButton
                value={false}
                onToggle={() => onChangeActiveCity('아테네')}
              >
                아테네
              </FilterTagButton>
              <FilterTagButton
                value={false}
                onToggle={() => onChangeActiveCity('산토리니')}
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
              onToggle={() => onChangeActiveCountry('GR')}
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
    </div>
  );
};

export default ButtonFilterCountryContainer;
