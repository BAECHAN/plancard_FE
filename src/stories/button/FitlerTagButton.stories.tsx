import { FilterTagButton } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof FilterTagButton> = {
  title: 'Button/FilterTagButton',
  component: FilterTagButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
    isActive: {
      control: 'boolean',
      description: '활성화 여부',
    },
    disabled: { control: 'boolean', description: '버튼 비활성화 여부' },
  },
  args: { onToggle: fn() },
} satisfies Meta<typeof FilterTagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button',
  },
};

export const XSmall: Story = {
  args: {
    size: 'xSmall',
    children: 'Button',
  },
};
export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button',
  },
};
