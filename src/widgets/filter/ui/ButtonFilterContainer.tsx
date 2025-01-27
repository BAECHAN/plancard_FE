import { Option } from '@/shared/type';
import { FilterTagButton } from '@/shared/ui';
import { ButtonList } from '@/widgets/button/ui';

const ButtonFilterContainer = ({
  optionList,
}: {
  optionList: Option<string>[];
}) => {
  return (
    <ButtonList className="gap-3">
      {optionList.map(option => (
        <li key={option.value}>
          <FilterTagButton>{option.label}</FilterTagButton>
        </li>
      ))}
    </ButtonList>
  );
};

export default ButtonFilterContainer;
