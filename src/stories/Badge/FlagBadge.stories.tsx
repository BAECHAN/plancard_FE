import { FlagBadge } from '@/shared/ui/Badge/FlagBadge';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FlagBadge> = {
  title: 'Badge/FlagBadge',
  component: FlagBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '배지 크기',
    },
    imgPath: {
      control: 'text',
      description: '이미지 경로',
      defaultValue: 'https://flagcdn.com/gr.svg',
    },
  },
  args: {
    imgPath: 'https://flagcdn.com/gr.svg',
    size: 'medium',
    alt: '국기',
  },
} satisfies Meta<typeof FlagBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
