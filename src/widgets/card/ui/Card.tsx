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
import { BaseBadge, IconBadge, IconButton } from '@/shared/ui';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
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
  info: CardType;
  size?: Size;
}

const Card = ({ onClick, info, size = 'medium' }: CardProps) => {
  const {
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

  const iconSize =
    size === 'medium' ? 'small' : size === 'large' ? 'medium' : 'xsmall';

  return (
    <div
      className={`rounded-md ${sizeClassCountry[size]} flex flex-col border-[1px] border-[#D9D9DE] p-2 text-ellipsis whitespace-pre-wrap`}
      onClick={onClick}
    >
      <div className="card-header flex justify-between  ">
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
          <IconBadge
            IconComponent={scrap ? FaBookmark : FaRegBookmark}
            alt="북마크"
            size={iconSize}
          />
        </div>
      </div>
      <div className={`card-title flex justify-center `}>
        <p className={`${sizeClassTitle[size]}`}>{title}</p>
      </div>
      <div className="card-image mt-2 mb-4">
        <img
          src={imageList[0].imageUrl}
          alt="Card Image"
          className="rounded-md"
          width={'100%'}
          height="auto"
        />
      </div>

      <div className="card-body">
        <div className="flex justify-between">
          <IconBadge
            IconComponent={(props: any) => (
              <FaStar
                color="#FFCB01"
                {...props}
              />
            )}
            alt="별 아이콘"
            size={iconSize}
          />
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
            onClick={() => {}}
            size={iconSize}
            color="#ff2424"
          />
        </div>
        <div className="flex justify-end"></div>
      </div>
    </div>
  );
};

export default Card;