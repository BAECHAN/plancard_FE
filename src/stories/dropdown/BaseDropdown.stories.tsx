import {
  DROPDOWN_MENU_ITEM_STYLE,
  DROPDOWN_MENU_SEPARATOR_STYLE,
} from '@/shared/const';
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/shared/lib/shadcn-ui/components/ui';
import { BaseDropdown, MoreButton } from '@/shared/ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BaseDropdown> = {
  title: 'Dropdown/BaseDropdown',
  component: BaseDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    side: 'bottom',
    align: 'start',
  },
} satisfies Meta<typeof BaseDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlanDetailMenu: Story = {
  args: {
    triggerNode: <MoreButton size="small" />,
    contentNode: (
      <>
        <DropdownMenuItem className={DROPDOWN_MENU_ITEM_STYLE}>
          제목 수정
        </DropdownMenuItem>
        <DropdownMenuItem className={DROPDOWN_MENU_ITEM_STYLE}>
          메모 보기
        </DropdownMenuItem>
        <DropdownMenuItem className={DROPDOWN_MENU_ITEM_STYLE}>
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
    ),
    side: 'right',
    align: 'start',
  },
};
