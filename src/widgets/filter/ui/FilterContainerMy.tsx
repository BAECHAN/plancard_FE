import { InteractiveTagButton } from '@/shared/ui';
import { TagList } from '@/widgets/tag/ui';

const FilterContainerMy = () => {
  return (
    <div className="flex flex-col gap-2">
      <TagList>
        <li>
          <InteractiveTagButton onClick={() => {}}>Sports</InteractiveTagButton>
        </li>
        <li>
          <InteractiveTagButton onClick={() => {}}>Music</InteractiveTagButton>
        </li>
        <li>
          <InteractiveTagButton onClick={() => {}}>Food</InteractiveTagButton>
        </li>
        <li>
          <InteractiveTagButton onClick={() => {}}>Travel</InteractiveTagButton>
        </li>
        <li>
          <InteractiveTagButton onClick={() => {}}>Art</InteractiveTagButton>
        </li>
      </TagList>
    </div>
  );
};

export default FilterContainerMy;
