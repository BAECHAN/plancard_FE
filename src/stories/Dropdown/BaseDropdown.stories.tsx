import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/shared/lib/shadcn-ui/components/ui';
import { BaseDropdown, IconBadge } from '@/shared/ui';

import type { Meta, StoryObj } from '@storybook/react';
import { FiMoreVertical } from 'react-icons/fi';

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

const dropdownMenuItemStyle =
  'hover:bg-skyblue cursor-pointer w-full flex justify-center text-mono400 hover:text-navy rounded-md text-base'; // font size는 여기서 지정
const dropdownMenuSeparatorStyle = 'border-t my-2 w-[90%] mx-auto text-mono400';

export const PlanDetailMenu: Story = {
  args: {
    triggerNode: (
      <IconBadge
        IconComponent={FiMoreVertical}
        alt={'세로 더보기 아이콘'}
        size="small"
      />
    ),
    contentNode: (
      <>
        <DropdownMenuItem className={dropdownMenuItemStyle}>
          제목 수정
        </DropdownMenuItem>
        <DropdownMenuItem className={dropdownMenuItemStyle}>
          메모 보기
        </DropdownMenuItem>
        <DropdownMenuItem className={dropdownMenuItemStyle}>
          여행날짜 수정
        </DropdownMenuItem>
        <DropdownMenuSeparator className={dropdownMenuSeparatorStyle} />
        <DropdownMenuItem className={dropdownMenuItemStyle}>
          플랜 탐험 등록
        </DropdownMenuItem>
        <DropdownMenuItem className={dropdownMenuItemStyle}>
          플랜 공유 링크 생성
        </DropdownMenuItem>
        <DropdownMenuSeparator className={dropdownMenuSeparatorStyle} />
        <DropdownMenuItem className={dropdownMenuItemStyle}>
          플랜 삭제
        </DropdownMenuItem>
      </>
    ),
    side: 'right',
    align: 'start',
  },
};
