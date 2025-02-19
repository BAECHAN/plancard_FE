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
import { CARD_DETAIL, useModalStore } from '@/shared/store';
import { Card as CardType, Size } from '@/shared/type';
import {
  BaseBadge,
  CheckboxButton,
  IconBadge,
  IconButton,
  Image,
  ScrapButton,
  TrashButton,
} from '@/shared/ui';
import { Util } from '@/shared/util';
import { forwardRef } from 'react';
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

interface BaseCardProps {
  onScrap?: () => void;
  info: CardType;
  size?: Size;
}

interface CheckboxFeature {
  showCheckbox: boolean;
  isChecked: boolean;
  onCheck: (checked: boolean) => void;
}

interface DeleteFeature {
  showDelete: boolean;
  onDelete: () => void;
}

type CardProps = BaseCardProps &
  Partial<CheckboxFeature> &
  Partial<DeleteFeature>;

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      onScrap,
      info,
      size = 'medium',
      showCheckbox,
      isChecked = false,
      onCheck,
      showDelete,
      onDelete,
    },
    ref,
  ) => {
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

    const { openModal } = useModalStore();

    const handleCardClick = (clickedCardId: string) => {
      openModal({
        type: CARD_DETAIL,
        data: info,
      });
    };

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
      <div
        ref={ref}
        className="flex w-fit cursor-pointer flex-col gap-1"
      >
        <div className="flex justify-end">
          {showCheckbox && onCheck && (
            <CheckboxButton
              size={iconSize}
              isChecked={isChecked}
              onClick={onCheck}
            />
          )}
          {showDelete && onDelete && (
            <TrashButton
              size={iconSize}
              onClick={onDelete}
            />
          )}
        </div>

        <div
          className={`rounded-md bg-white ${sizeClassCountry[size]} flex flex-col text-ellipsis whitespace-pre-wrap border border-[#D9D9DE] p-2`}
          onClick={() => handleCardClick(cardId)}
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
            <Image
              src={`${imageList[0].imageUrl}`}
              alt="Card Image"
              className="h-auto w-full rounded-md"
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
  },
);

Card.displayName = 'Card';

export default Card;
