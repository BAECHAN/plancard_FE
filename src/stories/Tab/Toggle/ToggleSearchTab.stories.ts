import { ToggleSearchTab } from '@/shared/ui/Tab/Toggle/ToggleSearchTab';
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
  args: { onClick: fn() },
} satisfies Meta<typeof ToggleSearchTab>;

export default meta;
type Story = StoryObj<typeof meta>;

const optionDefault = [
  { label: 'Mine', value: 'my' },
  { label: 'Explore', value: 'explore' },
];

export const Small: Story = {
  args: {
    option: optionDefault,
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    option: optionDefault,
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    option: optionDefault,
    size: 'large',
  },
};
