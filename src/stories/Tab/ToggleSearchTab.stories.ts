import { ToggleSearchTab } from '@/shared/ui/Tab/ToggleSearchTab';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof ToggleSearchTab> = {
  title: 'Tab/ToggleSearchTab',
  component: ToggleSearchTab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '탭 크기',
    },
    onClick: { action: 'clicked', description: '탭 토글 이벤트' },
    disabled: { control: 'boolean', description: '탭 비활성화 여부' },
  },
  args: {
    onClick: fn(),
    disabled: false,
    size: 'medium',
    option: [
      { label: 'Mine', value: 'my' },
      { label: 'Explore', value: 'explore' },
    ],
  },
} satisfies Meta<typeof ToggleSearchTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {};

export const Large: Story = {
  args: {
    size: 'large',
  },
};
