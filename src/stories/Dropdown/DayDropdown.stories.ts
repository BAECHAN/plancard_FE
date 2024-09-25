import DayDropdown from '@/shared/ui/Dropdown/DayDropdown';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof DayDropdown> = {
  title: 'Dropdown/DayDropdown',
  component: DayDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '버튼 크기',
    },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
  },
  args: {
    onClick: fn(),
    option: [
      new Date('2022-01-01'),
      new Date('2022-01-02'),
      new Date('2022-01-03'),
      new Date('2022-01-04'),
      new Date('2022-01-05'),
      new Date('2022-01-06'),
    ],
    index: 0,
    size: 'medium',
  },
} satisfies Meta<typeof DayDropdown>;

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
