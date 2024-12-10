import { flexCenter } from '@/shared/const';
import { Card } from '@/shared/type';
import { BaseButton, IconButton } from '@/shared/ui';
import { ButtonList } from '@/widgets/button/ui';
import { ImageSwiper } from '@/widgets/swiper/ui';
import React from 'react';
import { FaRegCopy } from 'react-icons/fa6';

const tempImageList = [
  {
    imageId: '1',
    isMain: false,
    imageUrl: './images/eiffel-tower.svg',
    alt: 'Image 1',
  },
  {
    imageId: '2',
    isMain: true,
    imageUrl: './images/spain.svg',
    alt: 'Image 2',
  },
  {
    imageId: '3',
    isMain: false,
    imageUrl: 'https://via.placeholder.com/800x600',
    alt: 'Image 3',
  },
];

const ModalContainerCardDetail = React.memo(
  ({ cardData }: { cardData: Card }) => {
    const handleCopy = (
      e: React.MouseEvent<HTMLButtonElement>,
      copyText: string,
    ) => {
      // e.preventDefault();
      // e.stopPropagation();
      // if (isSnackbarOpen) {
      //   return;
      // }
      // if (navigator.clipboard && navigator.clipboard.writeText) {
      //   // 클립보드 API 사용 가능
      //   navigator.clipboard
      //     .writeText(description)
      //     .then(() => {
      //       console.log('Text copied to clipboard');
      //       onSnackbarOptionsChange({
      //         message: '클립보드에 복사되었습니다.',
      //         variant: 'info',
      //         duration: 4000,
      //         position: { vertical: 'top', horizontal: 'center' },
      //       });
      //       onSnackbarOpen();
      //     })
      //     .catch((err) => {
      //       console.error('Failed to copy text: ', err);
      //     });
      // } else {
      //   // 클립보드 API 사용 불가능
      //   console.warn('Clipboard API not supported or unavailable');
      // }
    };
    return (
      <div className={`card-detail-container ${flexCenter} w-full gap-3 h-5/6`}>
        <div className="card-detail-image-swiper w-1/2">
          <ImageSwiper imageList={tempImageList} />
          <div className="card-detail-image-button-group flex">
            <ButtonList className="flex justify-around w-full">
              <BaseButton
                variant="amber"
                onClick={() => {}}
              >
                사진 삭제
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
        <div className="card-detail-info flex flex-col gap-3 w-1/2 border rounded-2xl p-4 h-full">
          <div className="card-detail-info-name flex justify-between">
            <div className="card-detail-title font-bold">Name</div>
            <div className="card-detail-description">{cardData.title}</div>
          </div>
          <div className="card-detail-google-map-link flex justify-between gap-3">
            <div className="card-detail-title font-bold whitespace-nowrap">
              Google Map Link
            </div>
            <div className="card-detail-content truncate max-w-md">
              {cardData.googleMapLink}
            </div>
            <IconButton
              onClick={e => handleCopy(e, cardData.googleMapLink)}
              IconComponent={FaRegCopy}
              alt="복사 아이콘"
            />
          </div>
          <div className="card-detail-descrtipion flex flex-col gap-3">
            <div className="card-detail-title font-bold">Description</div>
            <div className="card-detail-description line-clamp-5">
              {cardData.description}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

ModalContainerCardDetail.displayName = 'ModalContainerCardDetail';

export default ModalContainerCardDetail;
