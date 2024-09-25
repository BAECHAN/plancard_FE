import BaseBadge from '@/shared/ui/Badge/BaseBadge';
import type { Meta, StoryObj } from '@storybook/react';
import { FaArrowRightLong, FaCalendarDay } from 'react-icons/fa6';

const meta: Meta<typeof BaseBadge> = {
  title: 'Badge/BaseBadge',
  component: BaseBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'skyblue', 'navy', 'gray', 'amber', 'periwinkle'],
      description: '배지 색상',
    },
    size: {
      control: 'radio',
      options: ['xsmall', 'small', 'medium', 'large'],
      description: '배지 크기',
    },
  },
  args: {
    size: 'medium',
    variant: 'primary',
  },
} satisfies Meta<typeof BaseBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
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
    size: 'xsmall',
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
