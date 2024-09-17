import { ToggleArrowDown } from '@/shared/ui/Icon/ToggleArrowDown';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ToggleArrowDown> = {
  title: 'Icon/ToggleArrowdown',
  component: ToggleArrowDown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '메뉴 크기',
    },
    isOpen: { control: 'boolean', description: '메뉴 활성화 여부' },
  },
} satisfies Meta<typeof ToggleArrowDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    isOpen: true,
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    isOpen: true,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    isOpen: true,
  },
};

export const Inactive: Story = {
  args: {
    size: 'medium',
    isOpen: false,
  },
};
