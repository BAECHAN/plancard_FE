import { Card as CardType } from '@/shared/type';
import { Card, CardList } from '@/widgets/card/ui';

const tempInfo: CardType = {
  cardId: '1',
  theme: ['symbol', 'night'],
  title: '에펠탑',
  description:
    '프랑스 파리 안나톨 5가(5 Av.Anatole)에 있는 탑이다. 탑의 이름은 건축가 에펠의 이름을 딴것으로 1889년 3월 31일 준공해 1889년 5월 6일에 개장했다. 프랑스의 건축가 알렉상드르 귀스타브 에펠(Alexandre Gustave Eiffel, 1832~1923)[6]이 만든 거대한 철탑.',
  country: 'France',
  city: 'Paris',
  scrap: false,
  imageList: [
    {
      imageId: '1',
      imageUrl: '/images/eiffel-tower.svg',
      alt: '에펠탑',
      isMain: true,
    },
  ],
  rating: 4,
  category: '관광지',
  googleMapLink:
    'https://www.google.com/maps/place/%EC%97%90%ED%8E%A0%ED%83%91/data=!4m2!3m1!1s0x47e66e2964e34e2d:0x8ddca9ee380ef7e0?sa=X&ved=1t:155783&ictx=111',
};
const ListContainerCard = () => {
  return (
    <div className="">
      <CardList className="gap-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <Card
            key={index}
            onClick={() => {}}
            info={tempInfo}
          />
        ))}
      </CardList>
    </div>
  );
};

export default ListContainerCard;
