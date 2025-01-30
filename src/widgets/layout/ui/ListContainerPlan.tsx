import { CardOrMyCard } from '@/shared/type';
import CardStack from '@/widgets/card/ui/CardStack';

const cardListInPlan: CardOrMyCard[] = [
  {
    cardId: '1',
    title: '아크로폴리스',
    description:
      '해발 150m 높이에 위치한 고대 그리스의 도시로 아테네의 상징이자 랜드마크.',
    country: 'Greece',
    city: 'Athens',
    category: '관광지',
    rating: 4,
    theme: ['symbol', 'night'],
    imageList: [
      {
        imageId: '1',
        imageUrl: '/images/greece-1.svg',
        alt: '아크로폴리스 이미지',
        isMain: true,
      },
    ],
    googleMapLink: 'https://www.google.com/maps/place/아크로폴리스',
    scrap: false,
  },
  {
    cardId: '2',
    title: '파나티나이코 경기장',
    description: 'BC329년부터 아테나 여신을 위한 축제장으로 사용되었던 곳',
    country: 'Greece',
    city: 'Athens',
    category: '관광지',
    rating: 4,
    theme: ['symbol', 'night'],
    imageList: [
      {
        imageId: '2',
        imageUrl: '/images/greece-2.svg',
        alt: '파나티나이코 경기장 이미지',
        isMain: true,
      },
    ],
    googleMapLink: 'https://www.google.com/maps/place/파나티나이코+경기장',
    scrap: false,
  },
  {
    cardId: '3',
    title: '리카비토스 언덕',
    description: '해발 277m의 아테네에서 가장 높은 언덕',
    country: 'Greece',
    city: 'Athens',
    category: '관광지',
    theme: ['symbol', 'night'],
    imageList: [
      {
        imageId: '3',
        imageUrl: '/images/greece-3.svg',
        alt: '리카비토스 언덕 이미지',
        isMain: true,
      },
    ],
    googleMapLink: 'https://www.google.com/maps/place/리카비토스+언덕',
    rating: 4,
    scrap: false,
  },
];

const ListContainerPlan = () => {
  return (
    <div className={`flex flex-wrap justify-start gap-5`}>
      {Array.from({ length: 24 }).map((_, index) => {
        return (
          <CardStack
            key={index}
            cardListInPlan={cardListInPlan}
            onClick={() => {}}
          />
        );
      })}
    </div>
  );
};

export default ListContainerPlan;
