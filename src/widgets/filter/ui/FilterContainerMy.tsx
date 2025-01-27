import { useContentPageStore } from '@/shared/store';
import {
  MY_CARD_BUTTON_FILTER_THEME_OPTION,
  TOGGLE_FILTER_OPTION,
} from '@/shared/util/const';
import ButtonFilterContainer from '@/widgets/filter/ui/ButtonFilterContainer';
import ToggleFilterContainer from '@/widgets/filter/ui/ToggleFilterContainer';

const FilterContainerMy = () => {
  const { pageType } = useContentPageStore();

  return (
    <div className="flex flex-col gap-4">
      {pageType === 'card' ? (
        <>
          <ButtonFilterContainer
            optionList={MY_CARD_BUTTON_FILTER_THEME_OPTION}
          />
          <ToggleFilterContainer optionList={[TOGGLE_FILTER_OPTION[1]]} />
        </>
      ) : (
        <ToggleFilterContainer optionList={[TOGGLE_FILTER_OPTION[1]]} />
      )}
    </div>
  );
};

export default FilterContainerMy;
