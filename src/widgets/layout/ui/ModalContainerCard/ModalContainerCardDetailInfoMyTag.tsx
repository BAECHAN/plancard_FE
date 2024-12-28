import { MyCard } from '@/shared/type';
import { FilterTagButton } from '@/shared/ui';
import { ButtonList } from '@/widgets/button/ui';

const ModalContainerCardDetailInfoMyTag = ({
  myTagList,
}: {
  myTagList: MyCard['myTagList'];
}) => {
  return (
    <div
      aria-label="card-detail-info-my-tag"
      className="flex flex-col gap-3"
    >
      <div
        aria-label="card-detail-title"
        className="font-bold"
      >
        My Tag
      </div>
      <div aria-label="card-detail-content">
        <ButtonList className="flex-wrap gap-1">
          {myTagList?.map(tag => (
            <FilterTagButton
              key={tag.tagId}
              defaultValue={false}
            >
              {tag.tagName}
            </FilterTagButton>
          ))}
        </ButtonList>
      </div>
    </div>
  );
};

export default ModalContainerCardDetailInfoMyTag;
