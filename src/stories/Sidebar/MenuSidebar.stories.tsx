import { MenuItem, MenuSidebar } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MenuSidebar> = {
  title: 'Sidebar/MenuSidebar',
  component: MenuSidebar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '메뉴 사이드바 크기',
    },
  },
} satisfies Meta<typeof MenuSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: (
      <>
        <MenuItem
          active
          size={'small'}
          onClick={() => {}}
        >
          <b>카드</b>
        </MenuItem>
        <MenuItem
          active={false}
          size={'small'}
          onClick={() => {}}
        >
          <b>플랜</b>
        </MenuItem>
      </>
    ),
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    children: (
      <>
        <MenuItem
          active
          size={'medium'}
          onClick={() => {}}
        >
          <b>카드</b>
        </MenuItem>
        <MenuItem
          active={false}
          size={'medium'}
          onClick={() => {}}
        >
          <b>플랜</b>
        </MenuItem>
      </>
    ),
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    children: (
      <>
        <MenuItem
          active
          size={'large'}
          onClick={() => {}}
        >
          <b>카드</b>
        </MenuItem>
        <MenuItem
          active={false}
          size={'large'}
          onClick={() => {}}
        >
          <b>플랜</b>
        </MenuItem>
      </>
    ),
    size: 'large',
  },
};
