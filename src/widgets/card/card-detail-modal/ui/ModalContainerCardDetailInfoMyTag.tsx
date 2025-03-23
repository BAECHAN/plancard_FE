import { MyCard } from '@/shared/type';
import { FilterTagButton, InputTagButton } from '@/shared/ui';
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
          {/** TODO: 외부에서 값을 핸들링하기 위해 defaultValue가 아닌 value를 사용
           * 나중에 데이터를 변경하는 함수를 추가해야 함
           */}
          {myTagList?.map(tag => (
            <FilterTagButton
              key={tag.tagId}
              value
              onToggle={() => alert(tag.tagName)}
            >
              {tag.tagName}
            </FilterTagButton>
          ))}

          {myTagList.length < 5 && (
            <InputTagButton
              defaultValue={'Add..'}
              key={`add-tag`}
              onToggle={() => {}}
            />
          )}
        </ButtonList>
      </div>
    </div>
  );
};

export default ModalContainerCardDetailInfoMyTag;
