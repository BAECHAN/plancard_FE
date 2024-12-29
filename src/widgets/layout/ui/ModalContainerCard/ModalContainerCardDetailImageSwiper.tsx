import { CardImage } from '@/shared/type';
import { BaseButton } from '@/shared/ui';
import { ButtonList } from '@/widgets/button/ui';
import { CardImageSwiper } from '@/widgets/swiper/ui';
import { useState } from 'react';

const tempImageList: CardImage[] = [
  {
    imageId: '1',
    isMain: false,
    imageUrl: 'images/eiffel-tower.svg',
    alt: 'Image 1',
  },
  {
    imageId: '2',
    isMain: true,
    imageUrl: 'images/spain.svg',
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

const ModalContainerCardDetailImageSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainFirstImageList, setMainFirstImageList] = useState<CardImage[]>(
    convertSortingMainFirst(tempImageList),
  );

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

  const handleDeleteButtonClick = () => {
    if (confirm('정말 삭제하시겠습니까?')) {
      handleDeleteImage();
    }
  };

  return (
    <div
      aria-label="card-detail-image-swiper"
      className="w-1/2"
    >
      <CardImageSwiper
        imageList={mainFirstImageList}
        onIndexChange={handleIndexChange}
      />
      <div
        aria-label="card-detail-image-button-group"
        className="flex"
      >
        <ButtonList className="flex w-full justify-around">
          <BaseButton
            variant="amber"
            onClick={handleDeleteButtonClick}
          >
            해당 사진 삭제
          </BaseButton>
          <BaseButton
            variant="skyblue"
            onClick={() => {}}
          >
            대표 사진으로 등록
          </BaseButton>
          <BaseButton
            variant="primary"
            onClick={() => {}}
          >
            사진 등록
          </BaseButton>
        </ButtonList>
      </div>
    </div>
  );
};

export default ModalContainerCardDetailImageSwiper;
