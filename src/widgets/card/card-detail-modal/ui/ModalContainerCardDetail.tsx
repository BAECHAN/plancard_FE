import { flexCenter } from '@/shared/const';
import { CardOrMyCard } from '@/shared/type';
import { TypeGuard } from '@/shared/util';
import {
  ModalContainerCardDetailImageSwiper,
  ModalContainerCardDetailInfo,
} from '@/widgets/card/card-detail-modal/ui';
import React from 'react';

const ModalContainerCardDetail = React.memo(
  ({ cardData }: { cardData: CardOrMyCard }) => {
    const { title, cardId, googleMapLink, description } = cardData;

    const isMyCard = TypeGuard.isMyCard(cardData);

    const { myMemo = '', myTagList = [] } = isMyCard ? cardData : {};

    return (
      <div
        aria-label="card-detail-container"
        className={` ${flexCenter} h-5/6 w-full gap-3`}
      >
        <ModalContainerCardDetailImageSwiper />
        <ModalContainerCardDetailInfo
          title={title}
          cardId={cardId}
          googleMapLink={googleMapLink}
          description={description}
          myMemo={myMemo}
          myTagList={myTagList}
        />
      </div>
    );
  },
);

ModalContainerCardDetail.displayName = 'ModalContainerCardDetail';

export default ModalContainerCardDetail;
