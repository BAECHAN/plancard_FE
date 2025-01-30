import {
  DROPDOWN_MENU_ITEM_STYLE,
  DROPDOWN_MENU_SEPARATOR_STYLE,
} from '@/shared/const';
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/shared/lib/shadcn-ui/components/ui';
import { useModalStore, useRangeCalendarStore } from '@/shared/store';
import { BaseDropdown, IconBadge } from '@/shared/ui';
import { FiMoreVertical } from 'react-icons/fi';

const PlanDetailMenuDropdown = () => {
  const { openModal } = useModalStore();
  const { openCalendar } = useRangeCalendarStore();

  const handleMenuItemClick = (
    e: React.MouseEvent<HTMLDivElement>,
    clickedItem: string,
  ) => {
    console.log(clickedItem);

    switch (clickedItem) {
      case 'showMemo':
        openModal({
          type: 'planMemoDetail',
          data: {
            planId: '1',
            memo: 'test',
          },
        });
        break;

      case 'editPlanDate':
        openCalendar();
        break;
    }
  };

  return (
    <BaseDropdown
      triggerNode={
        <IconBadge
          IconComponent={FiMoreVertical}
          alt="더보기 아이콘"
          className="rounded p-1.5 hover:bg-mono200"
        />
      }
      contentNode={
        <>
          <DropdownMenuItem
            className={DROPDOWN_MENU_ITEM_STYLE}
            onClick={e => handleMenuItemClick(e, 'showMemo')}
          >
            메모 보기
          </DropdownMenuItem>
          <DropdownMenuItem
            className={DROPDOWN_MENU_ITEM_STYLE}
            onClick={e => handleMenuItemClick(e, 'editPlanDate')}
          >
            여행날짜 수정
          </DropdownMenuItem>
          <DropdownMenuSeparator className={DROPDOWN_MENU_SEPARATOR_STYLE} />
          <DropdownMenuItem className={DROPDOWN_MENU_ITEM_STYLE}>
            플랜 탐험 등록
          </DropdownMenuItem>
          <DropdownMenuItem className={DROPDOWN_MENU_ITEM_STYLE}>
            플랜 공유 링크 생성
          </DropdownMenuItem>
          <DropdownMenuSeparator className={DROPDOWN_MENU_SEPARATOR_STYLE} />
          <DropdownMenuItem className={DROPDOWN_MENU_ITEM_STYLE}>
            플랜 삭제
          </DropdownMenuItem>
        </>
      }
      side="bottom"
      align="end"
    />
  );
};

export default PlanDetailMenuDropdown;
