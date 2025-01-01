import {
  cardLarge,
  cardMedium,
  cardSmall,
  titleLarge,
  titleMedium,
  titleSmall,
  titleXsmall,
  titleXsmall2,
  titleXsmall3,
} from '@/shared/const';
import { Card as CardType, Size } from '@/shared/type';
import { BaseBadge, IconBadge, IconButton, ScrapButton } from '@/shared/ui';
import { Util } from '@/shared/util';
import { FaStar } from 'react-icons/fa6';
import { HiMapPin } from 'react-icons/hi2';

const sizeClassCountry: Record<Size, string> = {
  large: cardLarge,
  medium: cardMedium,
  small: cardSmall,
};

const sizeClassTitle: Record<Size, string> = {
  large: titleLarge,
  medium: titleMedium,
  small: titleSmall,
};

const sizeClassCountryTitle: Record<Size, string> = {
  large: titleXsmall,
  medium: titleXsmall2,
  small: titleXsmall3,
};

const sizeClassDescription: Record<Size, string> = {
  large: titleMedium,
  medium: titleSmall,
  small: titleXsmall,
};

interface CardProps {
  onClick: () => void;
  onScrap?: () => void;
  IconComponent?: React.ElementType;
  info: CardType;
  size?: Size;
}

const Card = ({
  onClick,
  onScrap,
  info,
  size = 'medium',
  IconComponent,
}: CardProps) => {
  const {
    cardId,
    imageList,
    title,
    description,
    country,
    city,
    theme,
    category,
    rating,
    googleMapLink,
    scrap,
  } = info;

  const iconSize = Util.convertSizeToDownSize(size);

  const handleMapPinButtonClick = () => {
    console.log('지도 핀 버튼 클릭');

    Util.openInNewTab(googleMapLink);
  };

  const handleScrapButtonClick = () => {
    console.log('북마크 버튼 클릭');

    onScrap?.();
  };

  return (
    <div className="flex flex-col gap-1">
      {IconComponent && (
        <div className={`flex justify-end`}>
          <IconComponent size={iconSize} />
        </div>
      )}

      <div
        className={`rounded-md bg-white ${sizeClassCountry[size]} flex flex-col text-ellipsis whitespace-pre-wrap border border-[#D9D9DE] p-2`}
        onClick={onClick}
      >
        <div className="card-header flex justify-between">
          <div className="flex gap-1">
            <IconBadge
              iconPath="https://flagcdn.com/fr.svg"
              alt="국기"
              size={size}
            />
            <div className={`flex flex-col ${sizeClassCountryTitle[size]}`}>
              <p>{city},</p>
              <p>{country}</p>
            </div>
          </div>
          <div className="flex-grow-0" />
          <div className="card-bookmark">
            <ScrapButton
              isActive={scrap}
              onClick={handleScrapButtonClick}
              size={iconSize}
            />
          </div>
        </div>
        <div className={`card-title flex justify-center`}>
          <p className={`${sizeClassTitle[size]}`}>{title}</p>
        </div>
        <div className="card-image mb-4 mt-2">
          <img
            src={`${imageList[0].imageUrl}`}
            alt="Card Image"
            className="rounded-md"
            width={'100%'}
            height="auto"
          />
        </div>

        <div className="card-body">
          <div className="flex justify-between">
            <div className="flex gap-1">
              {Array.from({ length: rating }).map((_, index) => (
                <IconBadge
                  key={index}
                  IconComponent={(props: any) => (
                    <FaStar
                      color="#FFCB01"
                      {...props}
                    />
                  )}
                  alt="별 아이콘"
                  size={iconSize}
                />
              ))}
            </div>
            <div className="flex-grow-0" />
            <BaseBadge
              variant="periwinkle"
              size={iconSize}
            >
              {category}
            </BaseBadge>
          </div>
          <div className={`flex items-end`}>
            <p
              className={`h-auto ${sizeClassDescription[size]} text-mono500 ${size === 'medium' ? 'line-clamp-3' : size === 'large' ? 'line-clamp-5' : 'line-clamp-1'}`}
            >
              {description}
            </p>
            <IconButton
              IconComponent={HiMapPin}
              alt="지도 핀 아이콘"
              onClick={handleMapPinButtonClick}
              size={iconSize}
              color="#ff2424"
            />
          </div>
          <div className="flex justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
