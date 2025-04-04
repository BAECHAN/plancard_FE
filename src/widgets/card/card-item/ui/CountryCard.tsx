import {
  countryLarge as large,
  countryMedium as medium,
  countrySmall as small,
} from '@/shared/const';
import { Country, Size } from '@/shared/type';
import { Image } from '@/shared/ui';

interface CountryCardProps {
  onClick: () => void;
  info: Country;
  size?: Size;
}

const CountryCard = ({ onClick, info, size = 'medium' }: CountryCardProps) => {
  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
  };

  const { imageUrl, title, description } = info;

  return (
    <div
      className={`rounded-md ${sizeClass[size]} relative flex flex-col gap-1 text-ellipsis whitespace-pre-wrap border border-[#D9D9DE]`}
      onClick={onClick}
    >
      <Image
        src={imageUrl}
        alt="Country Image"
        className="rounded-t-md"
      />
      <div className="flex flex-col gap-1 p-2">
        <h2 className="text-base">{title} </h2>
        <p
          className={`h-auto ${size === 'small' ? 'line-clamp-3' : size === 'medium' ? 'line-clamp-5' : 'line-clamp-6'}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
