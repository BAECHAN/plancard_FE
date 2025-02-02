import { CardImage } from '@/shared/type';
import { useCallback, useState } from 'react';
import Swiper from 'swiper';

const tempImageList: CardImage[] = [
  {
    imageId: '1',
    isMain: false,
    imageUrl: '../images/eiffel-tower.svg',
    alt: 'Image 1',
  },
  {
    imageId: '2',
    isMain: true,
    imageUrl: '../images/spain.svg',
    alt: 'Image 2',
  },
  {
    imageId: '3',
    isMain: false,
    imageUrl: 'https://via.placeholder.com/800x600',
    alt: 'Image 3',
  },
];

/**
 * 메인 이미지를 맨 앞으로 정렬하는 함수
 * @param imageList 이미지 리스트
 * @returns 메인 이미지를 맨 앞으로 정렬한 이미지 리스트
 */
const convertSortingMainFirst = (imageList: CardImage[]) => {
  return imageList.sort((a, b) =>
    a.isMain === b.isMain ? 0 : a.isMain ? -1 : 1,
  );
};

const useModalContainerCardDetailImageSwiper = () => {
  const [swiperInstance, setSwiperInstance] = useState<Swiper | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainFirstImageList, setMainFirstImageList] = useState<CardImage[]>(
    convertSortingMainFirst(tempImageList),
  );

  const handleSwiperReady = useCallback((swiper: Swiper) => {
    setSwiperInstance(swiper);
  }, []);

  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  const handleDeleteImage = () => {
    setMainFirstImageList(imageList => {
      const newArr = [...imageList];
      newArr.splice(currentIndex, 1);
      return newArr;
    });
  };

  const handleRegisterMainImage = () => {
    setMainFirstImageList(imageList => {
      const newArr = imageList.map((image, index) => ({
        ...image,
        isMain: index === currentIndex,
      }));
      return convertSortingMainFirst(newArr);
    });
  };

  const checkMainImage = () => {
    return mainFirstImageList[currentIndex].isMain;
  };

  return {
    swiperInstance,
    mainFirstImageList,
    checkMainImage,
    handleSwiperReady,
    handleIndexChange,
    handleDeleteImage,
    handleRegisterMainImage,
  };
};

export default useModalContainerCardDetailImageSwiper;
