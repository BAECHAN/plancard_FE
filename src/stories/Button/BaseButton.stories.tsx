import { BaseButton } from '@/shared/ui/Button/BaseButton';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { FaPlus } from 'react-icons/fa6';

const meta: Meta<typeof BaseButton> = {
  title: 'Button/BaseButton',
  component: BaseButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'skyblue', 'navy', 'gray', 'amber'],
      description: '버튼 색상',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '버튼 크기',
    },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
    disabled: { control: 'boolean', description: '버튼 비활성화 여부' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof BaseButton>;

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

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
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
        <span>Button</span>
        <span>
          <FaPlus />
        </span>
      </>
    ),
  },
};
