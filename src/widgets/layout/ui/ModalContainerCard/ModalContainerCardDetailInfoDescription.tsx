import { Card } from '@/shared/type';

const ModalContainerCardDetailInfoDescription = ({
  description,
}: {
  description: Card['description'];
}) => {
  return (
    <div
      aria-label="card-detail-descrtipion"
      className="flex flex-col gap-3"
    >
      <div
        aria-label="card-detail-title"
        className="font-bold"
      >
        Description
      </div>
      <div
        aria-label="card-detail-description"
        className="line-clamp-5"
      >
        {description}
      </div>
    </div>
  );
};

export default ModalContainerCardDetailInfoDescription;
