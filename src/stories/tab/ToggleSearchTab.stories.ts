import { ToggleSearchTab } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';

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
    disabled: { control: 'boolean', description: '탭 비활성화 여부' },
  },
  args: {
    disabled: false,
    size: 'medium',
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
