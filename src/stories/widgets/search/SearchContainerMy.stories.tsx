import { SearchContainerMy } from '@/widgets/search/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SearchContainerMy> = {
  title: 'Widgets/Search/SearchContainerMy',
  component: SearchContainerMy,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '컨텐츠 크기',
    },
  },
  args: {
    size: 'medium',
  },
} satisfies Meta<typeof SearchContainerMy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {},
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};
