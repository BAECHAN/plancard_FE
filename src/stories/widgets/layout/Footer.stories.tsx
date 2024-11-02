import { Footer } from '@/widgets/layout/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Footer> = {
  title: 'Widgets/Layout/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '헤더 크기',
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};
