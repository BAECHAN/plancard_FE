/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Size } from '@/shared/type';
import TrashButton from '@/shared/ui/button/TrashButton';
import { Card } from '@/widgets/card/ui';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';

const StyledSwiper = styled(Swiper)`
  width: 1080px;
  height: 350px;
  padding: 20px 30px;
  background-color: #aeddf6;
  border-radius: 16px;

  .swiper-slide {
    width: 100%;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* 추가적으로 Swiper의 네비게이션 버튼 스타일을 커스터마이즈할 수 있습니다 */
  .swiper-button-next {
    background: url(/icons/arrow-right.png) no-repeat;
    background-size: 50% auto;
    background-position: center;
  }

  .swiper-button-prev {
    background: url(/icons/arrow-right.png) no-repeat;
    background-size: 50% auto;
    background-position: center;
    transform: rotate(180deg);
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }

  .swiper-pagination-bullet {
    background: #3498db; /* 원하는 색상으로 변경 */
  }
`;
const CardSwiper = ({ size = 'medium' }: { size: Size }) => {
  return (
    <>
      <StyledSwiper
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={15}
        grabCursor
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Keyboard, Mousewheel, Navigation]}
        className="mySwiper"
      >
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <SwiperSlide key={index}>
              <Card
                IconComponent={TrashButton}
                size="small"
                info={{
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
                }}
                onClick={() => {}}
              />
            </SwiperSlide>
          );
        })}
      </StyledSwiper>
    </>
  );
};

export default CardSwiper;
