import { SortingTitleButton } from '@/shared/ui';
import { SortingTitleButtonList } from '@/widgets/sorting/ui';

const SortingContainerMy = () => {
  return (
    <div className="flex flex-col gap-2">
      <SortingTitleButtonList>
        <li>
          <SortingTitleButton
            onClick={() => {}}
            title="빠른 획득순"
          />
        </li>
        <li>
          <SortingTitleButton
            onClick={() => {}}
            title="느린 획득순"
          />
        </li>
        <li>
          <SortingTitleButton
            onClick={() => {}}
            title="카드 이름순"
          />
        </li>
        <li>
          <SortingTitleButton
            onClick={() => {}}
            title="카드 이름역순"
          />
        </li>
        <li>
          <SortingTitleButton
            onClick={() => {}}
            title="도시 이름순"
          />
        </li>
      </SortingTitleButtonList>
    </div>
  );
};

export default SortingContainerMy;
