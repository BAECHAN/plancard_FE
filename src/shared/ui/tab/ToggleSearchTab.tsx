import {
  Tabs,
  TabsList,
  TabsTrigger,
} from '@/shared/lib/shadcn-ui/components/ui';
import {
  MyOrExplore,
  PickViewMode,
  usePathStore,
  usePickViewStore,
} from '@/shared/store';
import { Option, Size } from '@/shared/type';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

interface ToggleSearchTabProps {
  size?: Size;
  disabled?: boolean;
}

const ToggleSearchTab = ({
  disabled = false,
  size = 'medium',
}: ToggleSearchTabProps) => {
  const sizeClass: Record<Size, string> = {
    small: 'h-7 text-xl',
    medium: 'h-9 text-2xl',
    large: 'h-11 text-3xl',
  };

  const activeClass =
    'data-[state=active]:border-none data-[state=active]:rounded-none data-[state=active]:shadow-[inset_0_-1px_0_0,0_4px_0_0] data-[state=active]:shadow-current data-[state=active]:text-primary pb-4';

  const { currentPage, currentTab } = usePathStore();

  const optionList: Option<MyOrExplore>[] = useMemo(
    () => [
      { label: `My ${currentPage === 'cards' ? 'Card' : 'Plan'}`, value: 'my' },
      { label: 'Explore', value: 'explore' },
    ],
    [currentPage],
  );

  const { pickView, updatePickView } = usePickViewStore();

  const optionListInPickView: Option<PickViewMode | MyOrExplore>[] =
    useMemo(() => {
      if (
        pickView.viewMode === 'MY_CARD_PICK' ||
        pickView.viewMode === 'EXPLORE_CARD_PICK'
      ) {
        return [
          { label: 'My Card', value: 'MY_CARD_PICK' },
          { label: 'Explore', value: 'EXPLORE_CARD_PICK' },
        ];
      } else if (
        pickView.viewMode === 'MY_DAY_PICK' ||
        pickView.viewMode === 'EXPLORE_DAY_PICK'
      ) {
        return [
          { label: 'My Day', value: 'MY_DAY_PICK' },
          { label: 'Explore', value: 'EXPLORE_DAY_PICK' },
        ];
      } else {
        return optionList;
      }
    }, [pickView.viewMode]);

  const isPickView: boolean =
    (pickView.viewMode &&
      [
        'MY_CARD_PICK',
        'EXPLORE_CARD_PICK',
        'MY_DAY_PICK',
        'EXPLORE_DAY_PICK',
      ].includes(pickView.viewMode)) ??
    false;

  return (
    <Tabs
      defaultValue={optionList[0].value}
      value={isPickView ? pickView.viewMode! : currentTab}
    >
      <TabsList className="relative h-auto w-full bg-white">
        {isPickView
          ? optionListInPickView.map(option => (
              <TabsTrigger
                key={option.value}
                value={option.value}
                className={`w-full ${sizeClass[size]} ${activeClass}`}
                onClick={() =>
                  updatePickView({ viewMode: option.value as PickViewMode })
                }
              >
                {option.label}
              </TabsTrigger>
            ))
          : optionList.map(option => (
              <Link
                key={option.value}
                to={`/${currentPage}/${option.value}`}
                className="w-[50%]"
              >
                <TabsTrigger
                  value={option.value}
                  className={`w-full ${sizeClass[size]} ${activeClass}`}
                >
                  {option.label}
                </TabsTrigger>
              </Link>
            ))}
      </TabsList>
    </Tabs>
  );
};

export default ToggleSearchTab;
