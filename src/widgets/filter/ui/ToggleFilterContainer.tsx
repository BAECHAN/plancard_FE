import { Option } from '@/shared/type';
import { ToggleFilterTab } from '@/shared/ui';
import { ButtonList } from '@/widgets/button/ui';

const ToggleFilterContainer = ({
  optionList,
}: {
  optionList: Option<string>[][];
}) => {
  return (
    <ButtonList className="gap-3">
      {optionList.map(option => (
        <li key={option[1].label}>
          <ToggleFilterTab
            size="medium"
            option={option}
            onClick={() => {}}
          />
        </li>
      ))}
    </ButtonList>
  );
};

export default ToggleFilterContainer;
