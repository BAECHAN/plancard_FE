import { TagButton } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { FaArrowRightLong, FaCalendarDay } from 'react-icons/fa6';

const meta: Meta<typeof TagButton> = {
  title: 'Button/TagButton',
  component: TagButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'skyblue', 'navy', 'gray', 'amber', 'periwinkle'],
      description: '버튼 색상',
    },
    size: {
      control: 'radio',
      options: ['xSmall', 'small', 'medium', 'large'],
      description: '버튼 크기',
    },
    children: {
      control: 'text',
      description: '버튼 text',
      defaultValue: 'icon',
    },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
    disabled: { control: 'boolean', description: '버튼 비활성화 여부' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'gray',
    size: 'medium',
    children: 'Button',
  },
};

export const Skyblue: Story = {
  args: {
    variant: 'skyblue',
    size: 'medium',
    children: 'Button',
  },
};

export const Navy: Story = {
  args: {
    variant: 'navy',
    size: 'medium',
    children: 'Button',
  },
};

export const Amber: Story = {
  args: {
    variant: 'amber',
    size: 'medium',
    children: 'Button',
  },
};

export const Periwinkle: Story = {
  args: {
    variant: 'periwinkle',
    size: 'medium',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Button',
  },
};

export const XSmall: Story = {
  args: {
    variant: 'primary',
    size: 'xSmall',
    children: 'Button',
  },
};
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'gray',
    size: 'medium',
    children: 'Button',
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: (
      <>
        <span>13 Jan</span>
        <span>
          <FaArrowRightLong />
        </span>
        <span>21 Jan</span>
        <span>
          <FaCalendarDay />
        </span>
      </>
    ),
  },
};
