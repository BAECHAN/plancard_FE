import { CARD_DETAIL, useModalStore } from '@/shared/store';
import { CardOrMyCard } from '@/shared/type';
import { Card, CardList } from '@/widgets/card/ui';

const cardList: CardOrMyCard[] = [
  {
    cardId: '1',
    theme: ['symbol', 'night'],
    title: 'Card',
    description:
      '프랑스 파리 안나톨 5가(5 Av.Anatole)에 있는 탑이다. 탑의 이름은 건축가 에펠의 이름을 딴것으로 1889년 3월 31일 준공해 1889년 5월 6일에 개장했다. 프랑스의 건축가 알렉상드르 귀스타브 에펠(Alexandre Gustave Eiffel, 1832~1923)[6]이 만든 거대한 철탑.',
    country: 'France',
    city: 'Paris',
    scrap: false,
    imageList: [
      {
        imageId: '1',
        imageUrl: `${import.meta.env.BASE_URL}images/eiffel-tower.svg`,
        alt: '에펠탑',
        isMain: true,
      },
    ],
    rating: 4,
    category: '관광지',
    googleMapLink:
      'https://www.google.com/maps/place/%EC%97%90%ED%8E%A0%ED%83%91/data=!4m2!3m1!1s0x47e66e2964e34e2d:0x8ddca9ee380ef7e0?sa=X&ved=1t:155783&ictx=111',
  },
  {
    cardId: '2',
    theme: ['symbol', 'night'],
    title: 'MyCard',
    description: '자유의 여신상은 미국 뉴욕에 위치한 유명한 관광지입니다.',
    country: 'USA',
    city: 'New York',
    scrap: false,
    imageList: [
      {
        imageId: '1',
        imageUrl: `${import.meta.env.BASE_URL}images/eiffel-tower.svg`,
        alt: '에펠탑',
        isMain: true,
      },
    ],
    rating: 4,
    category: '관광지',
    googleMapLink: 'https://www.google.com/maps/place/Statue+of+Liberty/',
    getDate: new Date(),
    lastUpdateDate: new Date(),
    myImageList: [
      {
        imageId: '1',
        imageUrl: `${import.meta.env.BASE_URL}images/eiffel-tower.svg`,
        alt: '에펠탑',
        isMain: true,
      },
    ],
    myMemo: `1시간정도 둘러볼 예정
근처 맛집 알아봐둠 카드링크 걸어둠 쭉걸어가다보면 걷다가걷다가 걷다보면
http://plancard/card~

운영시간 09:00~18:00
입장료 10달러
오늘지나면 입장료는 두배로 뛰어버립니다요
쿠쿠쿠
아직도
`,
    myTagList: [
      {
        tagId: '1',
        tagName: 'Landmark',
      },

      {
        tagId: '2',
        tagName: 'outside',
      },
      {
        tagId: '3',
        tagName: 'night',
      },
      {
        tagId: '4',
        tagName: 'symbol',
      },
    ],
  },
  {
    cardId: '3',
    theme: ['symbol', 'night'],
    title: '빅벤',
    description: '빅벤은 영국 런던에 위치한 유명한 관광지입니다.',
    country: 'UK',
    city: 'London',
    scrap: false,
    imageList: [
      {
        imageId: '1',
        imageUrl: `${import.meta.env.BASE_URL}images/eiffel-tower.svg`,
        alt: '에펠탑',
        isMain: true,
      },
    ],
    rating: 4,
    category: '관광지',
    googleMapLink: 'https://www.google.com/maps/place/Big+Ben/',
  },
  {
    cardId: '4',
    theme: ['symbol', 'night'],
    title: '콜로세움',
    description: '콜로세움은 이탈리아 로마에 위치한 유명한 관광지입니다.',
    country: 'Italy',
    city: 'Rome',
    scrap: false,
    imageList: [
      {
        imageId: '1',
        imageUrl: `${import.meta.env.BASE_URL}images/eiffel-tower.svg`,
        alt: '에펠탑',
        isMain: true,
      },
    ],
    rating: 4,
    category: '관광지',
    googleMapLink: 'https://www.google.com/maps/place/Colosseum/',
  },
  {
    cardId: '5',
    theme: ['symbol', 'night'],
    title: '크렘린',
    description: '크렘린은 러시아 모스크바에 위치한 유명한 관광지입니다.',
    country: 'Russia',
    city: 'Moscow',
    scrap: false,
    imageList: [
      {
        imageId: '1',
        imageUrl: `${import.meta.env.BASE_URL}images/eiffel-tower.svg`,
        alt: '에펠탑',
        isMain: true,
      },
    ],
    rating: 4,
    category: '관광지',
    googleMapLink: 'https://www.google.com/maps/place/Kremlin/',
  },
  {
    cardId: '6',
    theme: ['symbol', 'night'],
    title: '만리장성',
    description: '만리장성은 중국 베이징에 위치한 유명한 관광지입니다.',
    country: 'China',
    city: 'Beijing',
    scrap: false,
    imageList: [
      {
        imageId: '1',
        imageUrl: `${import.meta.env.BASE_URL}images/eiffel-tower.svg`,
        alt: '에펠탑',
        isMain: true,
      },
    ],
    rating: 4,
    category: '관광지',
    googleMapLink: 'https://www.google.com/maps/place/Great+Wall/',
  },
  {
    cardId: '7',
    theme: ['symbol', 'night'],
    title: '시드니 오페라 하우스',
    description:
      '시드니 오페라 하우스은 호주 시드니에 위치한 유명한 관광지입니다.',
    country: 'Australia',
    city: 'Sydney',
    scrap: false,
    imageList: [
      {
        imageId: '1',
        imageUrl: `${import.meta.env.BASE_URL}images/eiffel-tower.svg`,
        alt: '에펠탑',
        isMain: true,
      },
    ],
    rating: 4,
    category: '관광지',
    googleMapLink: 'https://www.google.com/maps/place/Sydney+Opera+House/',
  },
  {
    cardId: '8',
    theme: ['symbol', 'night'],
    title: '페트로나스 트윈 타워',
    description:
      '페트로나스 트윈 타워은 말레이시아 쿠알라룸푸르에 위치한 유명한 관광지입니다.',
    country: 'Malaysia',
    city: 'Kuala Lumpur',
    scrap: false,
    imageList: [
      {
        imageId: '1',
        imageUrl: `${import.meta.env.BASE_URL}images/eiffel-tower.svg`,
        alt: '에펠탑',
        isMain: true,
      },
    ],
    rating: 4,
    category: '관광지',
    googleMapLink: 'https://www.google.com/maps/place/Petronas+Towers/',
  },
  {
    cardId: '9',
    theme: ['symbol', 'night'],
    title: '타지마할',
    description: '타지마할은 인도 아그라에 위치한 유명한 관광지입니다.',
    country: 'India',
    city: 'Agra',
    scrap: false,
    imageList: [
      {
        imageId: '1',
        imageUrl: `${import.meta.env.BASE_URL}images/eiffel-tower.svg`,
        alt: '에펠탑',
        isMain: true,
      },
    ],
    rating: 4,
    category: '관광지',
    googleMapLink: 'https://www.google.com/maps/place/Taj+Mahal/',
  },
  {
    cardId: '10',
    theme: ['symbol', 'night'],
    title: '마추픽추',
    description: '마추픽추은 페루 쿠스코에 위치한 유명한 관광지입니다.',
    country: 'Peru',
    city: 'Cusco',
    scrap: false,
    imageList: [
      {
        imageId: '1',
        imageUrl: `${import.meta.env.BASE_URL}images/eiffel-tower.svg`,
        alt: '에펠탑',
        isMain: true,
      },
    ],
    rating: 4,
    category: '관광지',
    googleMapLink: 'https://www.google.com/maps/place/Machu+Picchu/',
  },
];

const ListContainerCard = () => {
  const { openModal } = useModalStore();

  const handleCardClick = (clickedCardId: string) => {
    openModal({
      type: CARD_DETAIL,
      data: cardList.find(item => item.cardId === clickedCardId),
    });
  };

  return (
    <CardList className="gap-6">
      {cardList.map((card, index) => (
        <Card
          key={index}
          onClick={() => handleCardClick(card.cardId)}
          info={card}
        />
      ))}
    </CardList>
  );
};

export default ListContainerCard;
